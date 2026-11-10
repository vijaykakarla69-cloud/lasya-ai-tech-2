import { API_BASE_URL } from "@/src/services/api";
import { useState } from "react";
import ToastService from "@/src/services/ToastService";
import ReCAPTCHA from "react-google-recaptcha";
import { NEXT_PUBLIC_RECAPTCHA_SITE_KEY } from "@/src/services/api";
import React from "react";
import { useOpenPanelService } from '@/src/services/openpanel';

interface NewsletterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const baseUrl = `${API_BASE_URL}/api/lapl/subscribe-newsletter`;

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
    const op = useOpenPanelService();
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!captchaToken) {
            newErrors.captcha = 'Please complete the captcha verification';
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        
        try {
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
                setIsSubmitting(false);
                return;
            }

            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email,
                    captchaToken,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to subscribe');
            }

            // Identify user if email is provided
            if (email) {
                op.identify({
                    profileId: email,
                    email: email,
                    properties: {
                        has_subscribed_newsletter: true,
                    },
                });
            }

            // Track newsletter subscription
            op.track('newsletter_subscribed', {
                email: email,
                source: 'modal',
            });

            ToastService.show('Successfully subscribed to newsletter!', 'success');
            setEmail("");
            setCaptchaToken(null);
            setTimeout(() => {
                onClose();
            }, 2000);

        } catch (err) {
            // Track newsletter subscription error
            op.track('newsletter_subscription_error', {
                error_type: err instanceof Error ? err.message : 'unknown',
            });
            ToastService.show('Failed to subscribe. Please try again later.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = () => {
        return email.trim() !== '' && 
               /\S+@\S+\.\S+/.test(email) && 
               captchaToken !== null;
    };

    if (!isOpen) return null;

    return (
        <div data-kte="kt-41789" className="kt-41789 modal-overlay">
            <div data-kte="kt-70983" className="kt-70983 modal-content">
                <button data-kte="kt-56321" className="kt-56321 close-button" onClick={onClose}>×</button>
                <h3 data-kte="kt-93724" className="kt-93724 mb-4">Subscribe to Our Newsletter</h3>
                <p data-kte="kt-44821" className="kt-44821 text-secondary mb-4">Stay updated with our latest news and updates!</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                        disabled={isSubmitting}
                    />
                    {errors.email && (
                        <div data-kte="kt-54441" className="kt-54441 invalid-feedback d-block mb-2">{errors.email}</div>
                    )}
                    
                    <div data-kte="kt-28321" className="kt-28321 mb-3 display-flex-center">
                        <ReCAPTCHA
                            sitekey={NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                            onChange={(token: string | null) => setCaptchaToken(token)}
                        />
                        {errors.captcha && (
                            <div data-kte="kt-21105" className="kt-21105 invalid-feedback d-block">{errors.captcha}</div>
                        )}
                    </div>

                    <button 
                        type="submit" 
                        className={`submit-button ${!isFormValid() ? 'disabled' : ''}`}
                        disabled={isSubmitting || !isFormValid()}
                    >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>
            </div>

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }

                .modal-content {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    width: 90%;
                    max-width: 500px;
                    position: relative;
                }

                .close-button {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    border: none;
                    background: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                }

                .form-input {
                    width: 100%;
                    padding: 0.75rem;
                    margin-bottom: 1rem;
                    border: 1px solid #ddd;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    color: #000;
                }

                .submit-button {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #008a89;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .submit-button:disabled,
                .submit-button.disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                    opacity: 0.7;
                }

                .submit-button:not(:disabled):hover {
                    background-color: #5235d0;
                }

                .form-input::placeholder {
                    color: #000;
                    opacity: 1; /* Firefox */
                }

                /* For Internet Explorer */
                .form-input:-ms-input-placeholder {
                    color: #000;
                }

                /* For Microsoft Edge */
                .form-input::-ms-input-placeholder {
                    color: #000;
                }

                .invalid-feedback {
                    color: #dc3545;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                }

                .is-invalid {
                    border-color: #dc3545;
                }
            `}</style>
        </div>
    );
} 