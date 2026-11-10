"use client"
import { useState, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "@/src/services/api"
import { AllServices } from "@/src/services/allServices"
import ToastService from '@/src/services/ToastService'
import { useOpenPanelService } from '@/src/services/openpanel'
import EditIcon from "@/public/assets/icons/edit.svg"
import WhiteUserIcon from "@/public/assets/icons/white-user.svg"
import WhitePhoneIcon from "@/public/assets/icons/white-phone.svg"
import MailIcon from "@/public/assets/icons/email.svg"
import HomeIcon from "@/public/assets/icons/home.svg"
import RightArrowIcon from "@/public/assets/icons/purple-rightarrow.svg"
// Styles for disabled field
const disabledFieldStyles = {
	backgroundColor: 'rgba(255, 255, 255, 0.1)',
	color: '#ffffff',
	cursor: 'not-allowed'
} as const

interface CareerApplicationFormProps {
	// Optional props for customization
	leftSideText?: string
	leftSideSubtext?: string
	applyButtonText?: string
	applyButtonIcon?: React.ComponentType<any>
	errorTextColor?: string
	// Optional callback for when form is submitted successfully
	onSuccess?: () => void
	// Optional job data for career details page
	jobData?: {
		title?: string
		type?: string
		location?: string
		experience?: string
		slug?: string
	}
}

export default function CareerApplicationForm({
	leftSideText = "Ready to Apply?",
	leftSideSubtext = "Fill out the form to start your journey with us. Share your details and upload your CV—our team will review your profile and get in touch.",
	applyButtonText = "Apply Now",
	applyButtonIcon: ApplyButtonIcon = RightArrowIcon,
	errorTextColor = "text-warning",
	onSuccess,
	jobData
}: CareerApplicationFormProps) {
	const op = useOpenPanelService();
	
	// Form state
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		coverLetter: '',
		resume: null as File | null,
		consentCommunications: false,
		consentPrivacy: false
	})
	const [selectedFile, setSelectedFile] = useState<File | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [errors, setErrors] = useState<{[key: string]: string}>({})
	const [captchaToken, setCaptchaToken] = useState<string | null>(null)

	// Auto-populate subject if job data is provided
	useEffect(() => {
		if (jobData?.title && !formValues.subject) {
			setFormValues(prev => ({
				...prev,
				subject: `Application for ${jobData.title} Position`
			}))
		}
	}, [jobData?.title, formValues.subject])

	// Form validation
	const validateForm = (formData: typeof formValues) => {
		const newErrors: {[key: string]: string} = {}

		if (!formData.name?.trim()) {
			newErrors.name = 'Name is required'
		}
		if (!formData.email?.trim()) {
			newErrors.email = 'Email is required'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address'
		}
		if (!formData.phone?.trim()) {
			newErrors.phone = 'Phone is required'
		}
		if (!formData.subject?.trim()) {
			newErrors.subject = 'Subject is required'
		}
		if (!formData.resume) {
			newErrors.resume = 'CV file is required'
		}
		if (!formData.consentCommunications) {
			newErrors.consentCommunications = 'Please agree to receive communications'
		}
		if (!formData.consentPrivacy) {
			newErrors.consentPrivacy = 'Please accept the privacy policy'
		}
		if (!captchaToken) {
			newErrors.captcha = 'Please complete the captcha'
		}

		return newErrors
	}

	// Handle form submission
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsSubmitting(true)

		try {
			const formErrors = validateForm(formValues)
			if (Object.keys(formErrors).length > 0) {
				setErrors(formErrors)
				// Track validation errors
				op.track('career_application_validation_error', {
					errors: Object.keys(formErrors),
					has_job_data: !!jobData,
					job_title: jobData?.title || null,
					job_slug: jobData?.slug || null,
				});
				ToastService.show('Please fill in all required fields', 'error')
				setIsSubmitting(false)
				return
			}

			// Create FormData for file upload
			const formData = new FormData()
			formData.append('name', formValues.name)
			formData.append('email', formValues.email)
			formData.append('phone', formValues.phone)
			formData.append('subject', formValues.subject)
			formData.append('coverLetter', formValues.coverLetter || '')
			formData.append('cvFile', formValues.resume!)
			formData.append('consentCommunications', formValues.consentCommunications.toString())
			formData.append('consentPrivacy', formValues.consentPrivacy.toString())
			formData.append('captchaToken', captchaToken!)

			// Add job-specific information if provided
			if (jobData) {
				formData.append('jobTitle', jobData.title || '')
				formData.append('jobType', jobData.type || '')
				formData.append('jobLocation', jobData.location || '')
				formData.append('jobExperience', jobData.experience || '')
				formData.append('jobSlug', jobData.slug || '')
			}

			await AllServices.submitCareerApplication(formData)

			// Identify user if email is provided
			if (formValues.email) {
				op.identify({
					profileId: formValues.email,
					email: formValues.email,
					firstName: formValues.name?.split(' ')[0] || undefined,
					lastName: formValues.name?.split(' ').slice(1).join(' ') || undefined,
					properties: {
						has_submitted_career_application: true,
						phone: formValues.phone || undefined,
						preferred_job_title: jobData?.title || undefined,
					},
				});
			}

			// Track successful application submission
			op.track('career_application_submitted', {
				job_title: jobData?.title || null,
				job_type: jobData?.type || null,
				job_location: jobData?.location || null,
				job_experience: jobData?.experience || null,
				job_slug: jobData?.slug || null,
				has_cover_letter: !!formValues.coverLetter,
				has_resume: !!formValues.resume,
				has_consent_communications: formValues.consentCommunications,
				has_consent_privacy: formValues.consentPrivacy,
				user_email: formValues.email,
			});

			ToastService.show('Career application submitted successfully! We will contact you soon.', 'success')

			// Reset form
			setFormValues({
				name: '',
				email: '',
				phone: '',
				subject: jobData?.title ? `Application for ${jobData.title} Position` : '',
				coverLetter: '',
				resume: null,
				consentCommunications: false,
				consentPrivacy: false
			})
			setSelectedFile(null)
			setCaptchaToken(null)
			setErrors({})

			// Call success callback if provided
			onSuccess?.()
		} catch (error) {
			console.error("Error submitting career application:", error)
			// Track form submission error
			op.track('career_application_submission_error', {
				error_type: error instanceof Error ? error.message : 'unknown',
				has_job_data: !!jobData,
				job_title: jobData?.title || null,
				job_slug: jobData?.slug || null,
			});
			ToastService.show('Something went wrong. Please try again later.', 'error')
		} finally {
			setIsSubmitting(false)
		}
	}

	// Handle file upload
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			if (file.size > 10 * 1024 * 1024) {
				alert('File size exceeds 10MB limit')
				e.target.value = ''
				setSelectedFile(null)
				setFormValues(prev => ({ ...prev, resume: null }))
			} else {
				setSelectedFile(file)
				setFormValues(prev => ({ ...prev, resume: file }))
			}
		} else {
			setSelectedFile(null)
			setFormValues(prev => ({ ...prev, resume: null }))
		}
	}

	return (
		<section className="section-contact-1 position-relative section-padding" id="application-section">
			<div className="container position-relative z-1">
				<div className="row">
					<div className="col-lg-6 d-flex flex-column justify-content-center" style={{ minHeight: '600px' }}>
						<div className="border border-white p-4 rounded-3 h-100 d-flex flex-column justify-content-center"
							 style={{ backgroundColor: 'rgba(0, 164, 163, 0.15)' }}>
							<h5 className="ds-5 mt-3 mb-3 text-white">{leftSideText}</h5>
							<span className="fs-5 fw-medium text-white">{leftSideSubtext}</span>
						</div>
					</div>
					<div className="col-lg-6 ps-lg-0 pt-5 pt-lg-0">
						<div className="position-relative">
							<div className="position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
                                                <h3 className="text-white">Your Next Big Opportunity</h3>
                                                <p className="text-white">Make sure your contact details are accurate so we can reach you quickly.</p>
								<form onSubmit={handleSubmit}>
									<div className="row mt-5">
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<WhiteUserIcon/>
												</div>
												<input
													type="text"
													className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
													name="name"
													value={formValues.name}
													onChange={(e) => setFormValues(prev => ({ ...prev, name: e.target.value }))}
													placeholder="Your name *"
													aria-label="username"
												/>
											</div>
											{errors.name && <small className={errorTextColor}>{errors.name}</small>}
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4 mt-md-0">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<MailIcon/>
												</div>
												<input
													type="email"
													className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
													name="email"
													value={formValues.email}
													onChange={(e) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
													placeholder="email@domain.com"
													aria-label="email"
												/>
											</div>
											{errors.email && <small className={errorTextColor}>{errors.email}</small>}
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<WhitePhoneIcon/>
												</div>
												<input
													type="tel"
													className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0"
													name="phone"
													value={formValues.phone}
													onChange={(e) => setFormValues(prev => ({ ...prev, phone: e.target.value }))}
													placeholder="Phone"
													aria-label="phone"
												/>
											</div>
											{errors.phone && <small className={errorTextColor}>{errors.phone}</small>}
										</div>
										<div className="col-md-6">
											<div className="input-group d-flex align-items-center mt-4">
												<div className="icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													<HomeIcon/>
												</div>
												<input
													type="text"
													className="form-control ms-0 border rounded-2 rounded-start-0 border-start-0 disabled-field"
													name="subject"
													value={formValues.subject}
													onChange={(e) => setFormValues(prev => ({ ...prev, subject: e.target.value }))}
													placeholder="Subject"
													aria-label="subject"
													disabled
													style={disabledFieldStyles}
												/>
											</div>
											{errors.subject && <small className={errorTextColor}>{errors.subject}</small>}
										</div>
										<div className="col-12">
											<div className="input-group d-flex mt-4">
												<div className="icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
													<EditIcon />
												</div>
												<textarea
													className="form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10"
													name="coverLetter"
													value={formValues.coverLetter}
													onChange={(e) => setFormValues(prev => ({ ...prev, coverLetter: e.target.value }))}
													placeholder="Cover letter"
													aria-label="Cover letter"
												/>
											</div>
										</div>
										<div className="col-12 mb-4 mt-4">
											<label className="text-white mb-2">Upload your CV and Cover Letter*</label>
											<p className="text-white-50 mb-3 fs-sm">Upload your latest CV and a cover letter telling us about your passion for full stack development.</p>
											<div className="d-flex flex-column gap-2">
												<input
													type="file"
													id="cv-upload"
													accept=".pdf,.doc,.docx,.txt"
													className="d-none"
													onChange={handleFileChange}
												/>
												<div>
													<label
														htmlFor="cv-upload"
														className="btn btn-warning rounded-pill px-4 py-2 text-dark mb-0"
														style={{ background: '#FFB800', border: 'none' }}
													>
														Choose file
													</label>
												</div>
												{selectedFile && (
													<div className="text-white-50 fs-sm">
														{selectedFile.name}
													</div>
												)}
												{errors.resume && <small className={errorTextColor}>{errors.resume}</small>}
											</div>
										</div>
										<div className="col-12 mb-4">
											<div className="form-check">
												<input
													type="checkbox"
													className="form-check-input"
													id="communications"
													checked={formValues.consentCommunications}
													onChange={(e) => setFormValues(prev => ({ ...prev, consentCommunications: e.target.checked }))}
												/>
												<label className="form-check-label text-white" htmlFor="communications">
													I agree to receive updates about my application and other communications from Lasya Aitech
												</label>
											</div>
											{errors.consentCommunications && <small className={errorTextColor}>{errors.consentCommunications}</small>}
										</div>
										<div className="col-12 mb-4">
											<div className="form-check">
												<input
													type="checkbox"
													className="form-check-input"
													id="privacy"
													checked={formValues.consentPrivacy}
													onChange={(e) => setFormValues(prev => ({ ...prev, consentPrivacy: e.target.checked }))}
												/>
												<label className="form-check-label text-white" htmlFor="privacy">
													I've received the <a href="/privacy-policy" className="text-warning text-decoration-none">Privacy Policy</a>, and I agree, accept and give my consent to the terms laid out.*
												</label>
											</div>
											{errors.consentPrivacy && <small className={errorTextColor}>{errors.consentPrivacy}</small>}
										</div>
										<div className="col-12 mb-4 d-flex justify-content-center">
											<ReCAPTCHA
												sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
												onChange={(token: string | null) => {
													setCaptchaToken(token)
												}}
											/>
											{errors.captcha && <small className={errorTextColor}>{errors.captcha}</small>}
										</div>
										<div className="col-12 display-flex-center">
											<button
												type="submit"
												className="btn bg-white-keep text-primary hover-up mt-3"
												disabled={isSubmitting || !captchaToken}
											>
												{isSubmitting ? 'Sending...' : applyButtonText}
												<ApplyButtonIcon className="ms-2" />
											</button>
										</div>
									</div>
								</form>
							</div>
							<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
