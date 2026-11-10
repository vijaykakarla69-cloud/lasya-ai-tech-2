"use client";
import React, { useState } from "react";
import { AllServices } from "@/src/services/allServices";
import ReCAPTCHA from "react-google-recaptcha";  
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY, API_BASE_URL } from "@/src/services/api";
import { useOpenPanelService } from '@/src/services/openpanel';

const GetAFreeQuoteForm: React.FC<{ formData: any }> = ({ formData }) => {
  const op = useOpenPanelService();
  
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [projectBrief, setProjectBrief] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const baseUrl = `${API_BASE_URL}/api/lapl/free-quote`;

  const getCurrentQuestion = () => {
    if (!formData?.Questions?.questions) return null;   
    return formData.Questions.questions.find((q: any) => q.stepNumber === step);  
  };

  // Debug: Log the form data structure
  console.log('GetAFreeQuoteForm formData:', formData);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);  
    setStep(2);
  };

  const handleMultiOptionClick = (option: string) => {  
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));  
    } else {
      setSelectedOptions([...selectedOptions, option]); 
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const selectedFile = event.target.files?.[0]; 
    if (selectedFile) { 
      if (selectedFile.size <= 10 * 1024 * 1024) {  
        setFile(selectedFile);  
      } else {
        alert("File size exceeds 10MB!"); 
      }
    }
  };

  const validateStep = (): boolean => {
    setErrors("");
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion?.isRequired) return true;

    switch (currentQuestion.questionType) {
      case "single_select":
        if (!selectedOption) {
          setErrors("Please select an option");
          return false;
        }
        break;
      case "multi_select":
        if (selectedOptions.length === 0) {
          setErrors("Please select at least one option");
          return false;
        }
        break;
      case "budget_select":
        if (!selectedBudget) {
          setErrors("Please select a budget range");
          return false;
        }
        break;
      case "text":
        const value = step === 6 ? name : step === 7 ? email : projectBrief;
        if (!value.trim()) {
          setErrors(`Please enter your ${currentQuestion.title.toLowerCase()}`);
          return false;
        }
        if (step === 7 && !/\S+@\S+\.\S+/.test(email)) {
          setErrors("Please enter a valid email address");
          return false;
        }
        break;
      
      case "captcha":
        if (!captchaToken) {
          setErrors("Please complete the captcha verification");
          return false;
        }
        break;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSkip = () => {
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);

    try {
      const formData = {
        lookingFor: selectedOption || '',
        services: selectedOptions,
        projectBrief: projectBrief || '',
        documentUrl: file ? file.name : null,
        budget: selectedBudget || '',
        name: name || '',
        email: email || '', 
        captchaToken: captchaToken,
      };

     
      const response = await fetch(baseUrl, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }

      const result = await response.json();

      // Identify user if email is provided
      if (email) {
        op.identify({
          profileId: email,
          email: email,
          firstName: name?.split(' ')[0] || undefined,
          lastName: name?.split(' ').slice(1).join(' ') || undefined,
          properties: {
            has_requested_quote: true,
            preferred_budget: selectedBudget || undefined,
            looking_for: selectedOption || undefined,
          },
        });
      }

      // Track successful quote request submission
      op.track('quote_request_submitted', {
        looking_for: selectedOption,
        services: selectedOptions,
        budget: selectedBudget,
        has_project_brief: !!projectBrief,
        has_document: !!file,
        project_brief_length: projectBrief?.length || 0,
        services_count: selectedOptions.length,
        user_email: email,
      });

      setSubmitSuccess(true);
      
      // Reset form
      setStep(1);
      setSelectedOption(null);
      setSelectedOptions([]);
      setProjectBrief('');
      setFile(null);
      setSelectedBudget(null);
      setName('');
      setEmail('');
      setCaptchaToken(null);

    } catch (error) {
      console.error('Error submitting form:', error);
      // Track quote request submission error
      op.track('quote_request_submission_error', {
        error_type: error instanceof Error ? error.message : 'unknown',
        looking_for: selectedOption,
        budget: selectedBudget,
      });
      setErrors(error instanceof Error ? error.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateProgress = () => {
    const totalSteps = 8;
    return Math.round(((step - 1) / totalSteps) * 100);
  };

  return (
    <div data-kte="kt-80766" className="kt-80766 container mt-5 pb-120">  
      <div data-kte="kt-85594" className="kt-85594 row">
        <div className={`${submitSuccess ? 'col-md-12 text-center' : 'col-md-8'}`}>
          {/* Success Message */}
          {submitSuccess && (
            <div data-kte="kt-94356" className="kt-94356 alert alert-success mb-4" role="alert">
              <h4 data-kte="kt-75178" className="kt-75178 alert-heading">Thank you for submitting!</h4>
              <p>We have received your request and will get back to you shortly.</p>
              <hr />
              <p data-kte="kt-50090" className="kt-50090 mb-0">
                Want to submit another request? {" "}
                <button 
                  className="btn btn-link p-0" 
                  onClick={() => {
                    setSubmitSuccess(false);
                    setStep(1);
                  }}
                >
                  Click here
                </button>
              </p>
            </div>
          )}

          {/* Progress Bar */}
          {!submitSuccess && (
            <>
              <div data-kte="kt-56099" className="kt-56099 progress" style={{ height: '4px', backgroundColor: '#E5E7EB' }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${calculateProgress()}%`,
                    backgroundColor: '#111827',
                    transition: 'width 0.3s ease-in-out'
                  }}
                  aria-valuenow={calculateProgress()}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div data-kte="kt-33831" className="kt-33831 text-muted mb-3" style={{ fontSize: '14px' }}>
                {calculateProgress()}% completed
              </div>
            </>
          )}

          {/* Rest of your form content */}
          {/* You might want to hide the form when submission is successful */}
          {!submitSuccess && (
            <>
              {step === 1 && (
                <>
                  <p data-kte="kt-85041" className="kt-85041 mb-4">
                  {formData?.Questions?.formDescription || "Simply let us know the details of your project and we will contact you with a free estimate of your project cost."}
                  </p>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '*' : ''}</h5>
                  <div data-kte="kt-81271" className="kt-81271 mt-3">
                    {getCurrentQuestion()?.options?.map((option: any, index: any  ) => (
                      <button
                        key={option.value}
                        type="button"
                        className="btn btn-outline-secondary text-start mb-2 w-100"
                        onClick={() => handleOptionClick(option.value)}
                      >
                        <strong>{String.fromCharCode(65 + index)}</strong>{" "}
                        {option.label}
                      </button>
                    ))}
                  </div>
                  <small data-kte="kt-29719" className="kt-29719 text-muted mt-2 d-block">{getCurrentQuestion()?.description}</small>
                  {errors && <div data-kte="kt-43438" className="kt-43438 alert alert-danger mt-2">{errors}</div>}
                </>
              )}
              {step === 2 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '' : ''}</h5>
                  <div data-kte="kt-45096" className="kt-45096 mt-3">
                    {getCurrentQuestion()?.options?.map((option: any, index: any) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`btn btn-outline-secondary text-start mb-2 w-100 ${
                          selectedOptions.includes(option.value) ? "active" : ""
                        }`}
                        onClick={() => handleMultiOptionClick(option.value)}
                      >
                        <strong>{String.fromCharCode(65 + index)}</strong> {option.label}
                      </button>
                    ))}
                  </div>
                  <small data-kte="kt-34946" className="kt-34946 text-muted mt-2 d-block">{getCurrentQuestion()?.description}</small>
                  <div data-kte="kt-26468" className="kt-26468 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-43776" className="kt-43776 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" data-kte="kt-86633" className="kt-86633 btn btn-dark me-3" onClick={handleNext}>
                      Enter ↵
                    </button>
                  </div>
                  {errors && <div data-kte="kt-50805" className="kt-50805 alert alert-danger mt-2">{errors}</div>}
                </>
              )}
              {step === 3 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '' : ''}</h5>
                  <p data-kte="kt-54863" className="kt-54863 text-muted">{getCurrentQuestion()?.description}</p>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Type your answer here"
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                  />
                  <small data-kte="kt-62310" className="kt-62310 text-muted mt-2 d-block">Shift ⇧ + Enter ↵ to make a line break.</small>
                  <div data-kte="kt-95095" className="kt-95095 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-96956" className="kt-96956 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" data-kte="kt-78875" className="kt-78875 btn btn-dark me-3" onClick={handleNext}>
                      Enter ↵
                    </button>
                  </div>
                  {errors && <div data-kte="kt-50082" className="kt-50082 alert alert-danger mt-2">{errors}</div>}
                </>
              )}
              {step === 4 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title}</h5>
                  <p data-kte="kt-26418" className="kt-26418 text-muted">{getCurrentQuestion()?.description}</p>
                  
                  <div data-kte="kt-20748" className="kt-20748 upload-container border rounded p-4">
                    <input
                      type="file"
                      id="file-upload"
                      className="d-none"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <div data-kte="kt-49690" className="kt-49690 d-flex align-items-center justify-content-between w-100">
                      <label 
                        htmlFor="file-upload" 
                        className="btn btn-light me-3 mb-0"
                        style={{ cursor: 'pointer' }}
                      >
                        Choose File
                      </label>
                      <span data-kte="kt-10619" className="kt-10619 text-muted">
                        {file ? file.name : 'No file chosen'}
                      </span>
                    </div>
                    <small data-kte="kt-21006" className="kt-21006 text-muted d-block mt-2">
                      Maximum file size: {getCurrentQuestion()?.fileSizeLimitMB}MB
                    </small>
                  </div>

                  <div data-kte="kt-38811" className="kt-38811 d-flex align-items-center mt-4">
                    <button type="button" data-kte="kt-59723" className="kt-59723 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" data-kte="kt-90313" className="kt-90313 btn btn-dark me-3" onClick={handleNext}>
                      Enter ↵
                    </button>
                    <button type="button" data-kte="kt-62308" className="kt-62308 btn btn-link text-dark" onClick={handleSkip}>
                      Skip
                    </button>
                  </div>
                </>
              )}

              {step === 5 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '*' : ''}</h5>
                  <p data-kte="kt-39603" className="kt-39603 text-muted">{getCurrentQuestion()?.description}</p>
                  <div data-kte="kt-57855" className="kt-57855 mt-3">
                    {getCurrentQuestion()?.options?.map((option: any, index: any) => (  
                      <button
                        key={option.value}
                        type="button"
                        className={`btn btn-outline-secondary text-start mb-2 w-100 ${
                          selectedBudget === option.value ? "active" : ""
                        }`}
                        onClick={() => {
                          setSelectedBudget(option.value);
                          setErrors("");
                        }}
                      >
                        <strong>{String.fromCharCode(65 + index)}</strong> {option.label}
                      </button>
                    ))}
                  </div>
                  <div data-kte="kt-11468" className="kt-11468 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-81415" className="kt-81415 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-dark me-3" 
                      onClick={() => {
                        if (!selectedBudget && getCurrentQuestion()?.isRequired) {
                          setErrors("Please select a budget range");
                          return;
                        }
                        handleNext();
                      }}
                    >
                      Enter ↵
                    </button>
                  </div>
                  {errors && <div data-kte="kt-65195" className="kt-65195 alert alert-danger mt-2">{errors}</div>}
                </>
              )}

              {step === 6 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '*' : ''}</h5>
                  <p data-kte="kt-32399" className="kt-32399 text-muted">{getCurrentQuestion()?.description}</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your answer here"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div data-kte="kt-54964" className="kt-54964 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-28040" className="kt-28040 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" data-kte="kt-62398" className="kt-62398 btn btn-dark me-3" onClick={handleNext}>
                      Enter   
                    </button>
                  </div>
                  {errors && <div data-kte="kt-65657" className="kt-65657 alert alert-danger mt-2">{errors}</div>}
                </>
              )}
              {step === 7 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '*' : ''}</h5>
                  <p data-kte="kt-34709" className="kt-34709 text-muted">{getCurrentQuestion()?.description}</p>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Type your answer here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div data-kte="kt-13660" className="kt-13660 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-59338" className="kt-59338 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button type="button" data-kte="kt-72505" className="kt-72505 btn btn-dark me-3" onClick={handleNext}>
                      Enter ↵
                    </button>
                  </div>
                  {errors && <div data-kte="kt-62656" className="kt-62656 alert alert-danger mt-2">{errors}</div>}
                </>
              )}

              {step === 8 && (
                <>
                  <h5>{step} ➝ {getCurrentQuestion()?.title} {getCurrentQuestion()?.isRequired ? '*' : ''}</h5>
                  <p data-kte="kt-64221" className="kt-64221 text-muted">{getCurrentQuestion()?.description}</p>
                  <div data-kte="kt-91376" className="kt-91376 mb-3">
                    <ReCAPTCHA
                      sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                      onChange={(token: string | null) => setCaptchaToken(token)}
                    />
                  </div>
                  <div data-kte="kt-71844" className="kt-71844 d-flex align-items-center mt-3">
                    <button type="button" data-kte="kt-89290" className="kt-89290 btn btn-dark me-3" onClick={handleBack}>
                      Back
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-dark me-3" 
                      onClick={handleSubmit}
                      disabled={isSubmitting || !captchaToken}
                    >
                      {isSubmitting ? 'Saving...' : 'Submit'}
                    </button>
                  </div>
                  {submitSuccess && (
                    <div data-kte="kt-43064" className="kt-43064 alert alert-success mt-2">
                      Form submitted successfully!
                    </div>
                  )}
                  {errors && <div data-kte="kt-61365" className="kt-61365 alert alert-danger mt-2">{errors}</div>}
                </>
              )}
            </>
          )}
        </div>

        {/* Summary Card */}
        {!submitSuccess && (
          <div data-kte="kt-99182" className="kt-99182 col-md-4">
            <div data-kte="kt-32986" className="kt-32986 card">
              <div data-kte="kt-32288" className="kt-32288 card-body">
                <h5 data-kte="kt-91336" className="kt-91336 card-title">Summary</h5>
                <div data-kte="kt-29875" className="kt-29875 summary-content">
                  {selectedOption && (
                    <div data-kte="kt-49814" className="kt-49814 mb-2">
                      <strong>Looking for:</strong> {selectedOption}
                    </div>
                  )}
                  {selectedOptions.length > 0 && (
                    <div data-kte="kt-82384" className="kt-82384 mb-2">
                      <strong>Services:</strong>{" "}
                      {selectedOptions.join(", ")}
                    </div>
                  )}
                  {projectBrief && (
                    <div data-kte="kt-36373" className="kt-36373 mb-2">
                      <strong>Project Brief:</strong> {projectBrief}
                    </div>
                  )}
                  {file && (
                    <div data-kte="kt-88674" className="kt-88674 mb-2">
                      <strong>Uploaded File:</strong> {file.name}
                    </div>
                  )}
                  {selectedBudget && (
                    <div data-kte="kt-14425" className="kt-14425 mb-2">
                      <strong>Budget:</strong>{" "}
                      {getCurrentQuestion()?.options?.find(
                        (option: any) => option.value === selectedBudget
                      )?.label || selectedBudget}
                    </div>
                  )}
                  {name && (
                    <div data-kte="kt-98791" className="kt-98791 mb-2">
                      <strong>Name:</strong> {name}
                    </div>
                  )}
                  {email && (
                    <div data-kte="kt-68106" className="kt-68106 mb-2">
                      <strong>Email:</strong> {email}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetAFreeQuoteForm;  


