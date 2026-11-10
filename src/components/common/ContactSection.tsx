"use client"
import { useEffect, useState } from 'react'
import { AllServices } from '@/src/services/allServices';
import 'react-toastify/dist/ReactToastify.css';
import ToastService from '@/src/services/ToastService';
import { useLoading } from '@/src/services/LoadingService';
import ReCAPTCHA from "react-google-recaptcha";
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "@/src/services/api";
import React from 'react';
import LoadingButton from './LoadingButton';
import { useOpenPanelService } from '@/src/services/openpanel';
import Whatsapp from "@/public/assets/icons/whatsapp.svg"
import UpArrow from "@/public/assets/icons/up-arrow.svg"
import WhiteUserIcon from "@/public/assets/icons/white-user.svg"
import Email from "@/public/assets/icons/email.svg"
import WhitePhone from "@/public/assets/icons/white-phone.svg"
import Home from "@/public/assets/icons/home.svg"
import Edit from "@/public/assets/icons/edit.svg"
import RightArrow from "@/public/assets/icons/right-arrow.svg"
export default function ContactSection({ data }: { data: any }) {	
	const op = useOpenPanelService();
	
	// Extract data from JSON structure
	const contentData = data?.content || {};
	const contactHeroData = data?.contact_hero?.[0] || {};
	
	// Debug: Log the data structure
	console.log('ContactSection data:', data);
	console.log('contentData:', contentData);
	
	const [submitStatus, setSubmitStatus] = useState<string>('');
	const [errors, setErrors] = useState<{[key: string]: string}>({});
	const { showLoading, hideLoading } = useLoading();
	const [captchaToken, setCaptchaToken] = useState<string | null>(null);
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateForm = (formData: any) => {
		const newErrors: {[key: string]: string} = {};
		
		// Name validation
		if (!formData.name?.trim()) {
			newErrors.name = 'Name is required';
		}

		// Email validation
		if (!formData.email?.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		// Phone validation
		if (!formData.phone?.trim()) {
			newErrors.phone = 'Phone number is required';
		} else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
			newErrors.phone = 'Please enter a valid phone number';
		}

		// Subject validation
		if (!formData.subject?.trim()) {
			newErrors.subject = 'Subject is required';
		}

		// Message validation
		if (!formData.message?.trim()) {
			newErrors.message = 'Message is required';
		} else if (formData.message.length < 10) {
			newErrors.message = 'Message must be at least 10 characters long';
		}

		// Add captcha validation
		if (!captchaToken) {
			newErrors.captcha = 'Please complete the captcha verification';
		}

		return newErrors;
	};

	const resetForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.currentTarget.reset();
		setSubmitStatus('');
		setErrors({});
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitStatus('');
		setErrors({});
		setIsSubmitting(true);

		try {
			const formErrors = validateForm({ ...formValues, captchaToken });
			if (Object.keys(formErrors).length > 0) {
				setErrors(formErrors);
				// Track validation errors
				op.track('contact_form_validation_error', {
					errors: Object.keys(formErrors),
					form_type: 'general',
				});
				ToastService.show('Please fill in all required fields correctly', 'error');
				setIsSubmitting(false);
				return;
			}

			await AllServices.submitContactForm({
				...formValues,
				captchaToken,
			});

			// Identify user if email is provided
			if (formValues.email) {
				op.identify({
					profileId: formValues.email,
					email: formValues.email,
					firstName: formValues.name?.split(' ')[0] || undefined,
					lastName: formValues.name?.split(' ').slice(1).join(' ') || undefined,
					properties: {
						has_submitted_contact_form: true,
						phone: formValues.phone || undefined,
					},
				});
			}

			// Track successful submission
			op.track('contact_form_submitted', {
				form_type: 'general',
				subject: formValues.subject,
				has_message: !!formValues.message,
				has_phone: !!formValues.phone,
				user_email: formValues.email,
			});

			ToastService.show('Message sent successfully!', 'success');
			setFormValues({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: ''
			});
			setCaptchaToken(null); // Reset captcha
			setSubmitStatus('');
			setErrors({});
		} catch (error) {
			console.error("Error submitting form:", error);
			// Track form submission error
			op.track('contact_form_submission_error', {
				error_type: error instanceof Error ? error.message : 'unknown',
				form_type: 'general',
			});
			setSubmitStatus('Something went wrong. Please try again later.');
			ToastService.show('Something went wrong. Please try again later.', 'error');
		} finally {
			setIsSubmitting(false);
		}
	};


	return (
		<>
			<section className="section-box bg-white py-5">
				<div className="container d-flex justify-content-center">
					<div className="row" style={{ maxWidth: '1400px', transform: 'translateX(40px)' }}>
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/contact-5/icon-1.svg" alt="1 icon" />
									</div>
								</div>
								<h6>Address</h6>
								<p className="text-500">
									<span className="text-900">Krishe Sapphire, 7th Floor, South Wing, Hitech City Main Road, Madhapur, Hyderabad, Telangana 500081</span><br />
									Serving HITEC City, Madhapur, Jubilee Hills, Kondapur &amp; Gachibowli.
								</p>
							</div>
						</div>
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/contact-5/icon-2.svg" alt="2 icon" />
									</div>
								</div>
								<h6>Call Us</h6>
								<p className="text-500">
									Call us to speak to a member of our team. <br />
									(+91) 8 500 700 657<br />
									
								</p>
							</div>
						</div>
						{/* <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
								<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
									<div className="icon">
										<img src="/assets/imgs/contact-5/icon-3.svg" alt="3 icon" />
									</div>
								</div>
								<h6>Business Department</h6>
								<p className="text-500">
									Contact the sales department about cooperation projects <br />
									(+91) 8 500 700 657
								</p>
							</div>
						</div> */}
						<div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
							<a 
								href="https://wa.me/918500700657?text=Hello%20LasyaAitech%20Team!%20%F0%9F%91%8B%20I%E2%80%99m%20interested%20in%20your%20software%20development%20services.%20Could%20you%20please%20provide%20more%20details%3F"
								target="_blank"
								rel="noopener noreferrer"
								className="text-decoration-none"
							>
								<div className="feature-item mb-5 mb-lg-0 pe-5 hover-up">
									<div className="bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
										<div className="icon">
											 <Whatsapp />
										</div>
									</div>
									<h6>Whatsapp</h6>
									<p className="text-500">
										Chat with us on Whatsapp to get started. <br />
										<span className="text-primary fw-bold hover-up d-inline-flex align-items-center mt-2" style={{cursor: 'pointer', textDecoration: 'underline'}}>
											Click here
											<UpArrow />
										</span>
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section data-kte="kt-94141" className="kt-94141 section-contact-1 position-relative section-padding">
				<div data-kte="kt-75661" className="kt-75661 container position-relative z-1">
					<div data-kte="kt-19136" className="kt-19136 row">
						<div data-kte="kt-72857" className="kt-72857 col-lg-6">
							<div data-kte="kt-55012" className="kt-55012 d-flex align-items-center justify-content-center bg-primary-soft-keep border border-2 border-white-keep d-inline-flex rounded-pill px-4 py-2">
								<img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
								<span data-kte="kt-30434" className="kt-30434 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">
									{contentData?.button?.[0]?.label}
								</span>
							</div>

							<h5 data-kte="kt-23176" className="kt-23176 ds-5 mt-3 mb-3 text-white">{contentData?.title}</h5>
							<span data-kte="kt-19257" className="kt-19257 fs-5 fw-medium text-white">{contentData?.subtitle}</span>
							
							<div className="row">
								{contentData?.form_points?.map((point: any, index: any) => (
									<div key={point.id} data-kte="kt-57277" className="kt-57277 d-flex pt-6 pb-3 align-items-center">
										<div data-kte="kt-61004" className="kt-61004 bg-white-keep icon-flip position-relative icon-shape icon-xxl rounded-3">
											<div data-kte="kt-72752" className="kt-72752 icon">
												<img src={`/assets/imgs/contact-1/icon-${index + 1}.svg`} alt="Lasya AI Tech" />
											</div>
										</div>
										<div data-kte="kt-88308" className="kt-88308 ps-5">
											<h6 data-kte="kt-94272" className="kt-94272 text-white">{point.title}</h6>
											<p data-kte="kt-71540" className="kt-71540 text-white mb-0">{point.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div data-kte="kt-38063" className="kt-38063 col-lg-6 ps-lg-0 pt-5 pt-lg-0">
							<div data-kte="kt-48755" className="kt-48755 position-relative">
								<div data-kte="kt-23161" className="kt-23161 position-relative z-2 p-3 p-md-5 p-lg-8 rounded-3 bg-primary">
									<h3 data-kte="kt-44334" className="kt-44334 text-white">{contentData?.contact_title}</h3>
									<p data-kte="kt-36735" className="kt-36735 text-white">{contentData?.contact_subtitle}</p>
									<form onSubmit={handleSubmit}>
										<div data-kte="kt-73926" className="kt-73926 row mt-5">
											<div data-kte="kt-69629" className="kt-69629 col-md-6">
												<div data-kte="kt-95165" className="kt-95165 input-group d-flex align-items-center">
													<div data-kte="kt-21272" className="kt-21272 icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
														<WhiteUserIcon />
													</div>
													<input 
														type="text" 
														className={`form-control ms-0 border rounded-2 rounded-start-0 border-start-0 ${errors.name ? 'is-invalid' : ''}`} 
														name="name" 
														value={formValues.name}
														onChange={(e) => setFormValues(prev => ({ ...prev, name: e.target.value }))}
														placeholder={contentData?.name_placeholder} 
														aria-label="username" 
													/>
													{errors.name && <div data-kte="kt-58714" className="kt-58714 invalid-feedback">{errors.name}</div>}
												</div>
											</div>
											<div data-kte="kt-52805" className="kt-52805 col-md-6">
												<div data-kte="kt-79805" className="kt-79805 input-group d-flex align-items-center mt-4 mt-md-0">
													<div data-kte="kt-90127" className="kt-90127 icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
													  <Email />
													</div>
													<input 
														type="text" 
														className={`form-control ms-0 border rounded-2 rounded-start-0 border-start-0 ${errors.email ? 'is-invalid' : ''}`} 
														name="email" 
														value={formValues.email}
														onChange={(e) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
														placeholder={contentData?.info_placeholder} 
														aria-label="email" 
													/>
													{errors.email && <div data-kte="kt-40733" className="kt-40733 invalid-feedback">{errors.email}</div>}
												</div>
											</div>
											<div data-kte="kt-73798" className="kt-73798 col-md-6">
												<div data-kte="kt-41957" className="kt-41957 input-group d-flex align-items-center mt-4">
													<div data-kte="kt-44734" className="kt-44734 icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
														<WhitePhone />
													</div>
													<input 
														type="text" 
														className={`form-control ms-0 border rounded-2 rounded-start-0 border-start-0 ${errors.phone ? 'is-invalid' : ''}`} 
														name="phone" 
														value={formValues.phone}
														onChange={(e) => setFormValues(prev => ({ ...prev, phone: e.target.value }))}
														placeholder={contentData?.phone_placeholder} 
														aria-label="phone" 
													/>
													{errors.phone && <div data-kte="kt-99777" className="kt-99777 invalid-feedback">{errors.phone}</div>}
												</div>
											</div>
											<div data-kte="kt-51375" className="kt-51375 col-md-6">
												<div data-kte="kt-30621" className="kt-30621 input-group d-flex align-items-center mt-4">
													<div data-kte="kt-78805" className="kt-78805 icon-input border border-end-0 rounded-2 rounded-end-0 ps-3">
														<Home />
													</div>
													<input 
														type="text" 
														className={`form-control ms-0 border rounded-2 rounded-start-0 border-start-0 ${errors.subject ? 'is-invalid' : ''}`} 
														name="subject" 
														value={formValues.subject}
														onChange={(e) => setFormValues(prev => ({ ...prev, subject: e.target.value }))}
														placeholder={contentData?.subject_placeholder} 
														aria-label="subject" 
													/>
													{errors.subject && <div data-kte="kt-31784" className="kt-31784 invalid-feedback">{errors.subject}</div>}
												</div>
											</div>
											<div data-kte="kt-36133" className="kt-36133 col-12">
												<div data-kte="kt-20604" className="kt-20604 input-group d-flex mt-4">
													<div data-kte="kt-81382" className="kt-81382 icon-input pt-2 ps-3 align-items-start border border-end-0 rounded-1 rounded-end-0">
													<Edit />
													</div>
													<textarea 
														className={`form-control border border-start-0 ms-0 rounded-start-0 rounded-1 pb-10 ${errors.message ? 'is-invalid' : ''}`} 
														name="message" 
														value={formValues.message}
														onChange={(e) => setFormValues(prev => ({ ...prev, message: e.target.value }))}
														placeholder={contentData?.describe_placeholder} 
														aria-label="With textarea" 
													/>
													{errors.message && <div data-kte="kt-24966" className="kt-24966 invalid-feedback">{errors.message}</div>}
												</div>
											</div>
											<div data-kte="kt-33098" className="kt-33098 col-12 mt-4 display-flex-center">
												<ReCAPTCHA
													sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
													onChange={(token: string | null) => {
														setCaptchaToken(token);
														console.log(token);
													}}
												/>
												{errors.captcha && (
													<div data-kte="kt-14882" className="kt-14882 invalid-feedback d-block">{errors.captcha}</div>
												)}
											</div>
											<div data-kte="kt-62743" className="kt-62743 col-12 display-flex-center">
												<LoadingButton
													type="submit"
													className="btn bg-white-keep text-primary hover-up mt-3"
													loading={isSubmitting}
													disabled={!captchaToken || isSubmitting}
												>
													{contentData?.send_message_button?.[0]?.label}
													<RightArrow className="ms-2" />
												</LoadingButton>
												{submitStatus && (
													<div data-kte="kt-81464" className="kt-81464 text-center mt-3" style={{ color: submitStatus.includes('success') ? '#28a745' : '#dc3545' }}>
														{submitStatus}
													</div>
												)}
											</div>
										</div>
									</form>
								</div>
								<div data-kte="kt-52313" className="kt-52313 z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section-box bg-white">
				<div className="container-fluid p-0 m-0">
					<div className="contact-map w-100">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3596513215493!2d78.3849241767886!3d17.442491983454218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915efe35c8d9%3A0xe73625a226ee0c02!2sKrishe%20Sapphire!5e0!3m2!1sen!2sin!4v1765257123304!5m2!1sen!2sin" 
							style={{ 
								border: 0, 
								width: '100vw',
								height: '600px',
								display: 'block',
								margin: 0,
								padding: 0
							}} 
							allowFullScreen 
							loading="lazy" 
						/>
					</div>
				</div>
			</section>
		</>
	)
}
