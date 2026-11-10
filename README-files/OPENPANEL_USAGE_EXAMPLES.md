# OpenPanel Usage Examples

This document provides practical examples of how to use OpenPanel tracking in your components.

## Example 1: Tracking Contact Form Submission

Add event tracking to your contact form:

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';
// ... other imports

export default function ContactSection({ data }: { data: any }) {
  const op = useOpenPanel();
  // ... existing state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ... existing validation

    try {
      await AllServices.submitContactForm({
        ...formValues,
        captchaToken,
      });

      // Track successful submission
      await op.track('contact_form_submitted', {
        form_type: 'general',
        subject: formValues.subject,
        has_message: !!formValues.message,
      });

      ToastService.show('Message sent successfully!', 'success');
      // ... rest of success handling
    } catch (error) {
      // Track form errors
      await op.track('contact_form_error', {
        error_type: error instanceof Error ? error.message : 'unknown',
        form_type: 'general',
      });
      // ... error handling
    }
  };

  // ... rest of component
}
```

## Example 2: Tracking Career Application

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function CareerApplicationForm({ jobData, ...props }) {
  const op = useOpenPanel();
  // ... existing state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ... validation

    try {
      await AllServices.submitCareerApplication(formData);

      // Track career application
      await op.track('career_application_submitted', {
        job_title: jobData?.title,
        job_type: jobData?.type,
        job_location: jobData?.location,
        job_experience: jobData?.experience,
        has_cover_letter: !!formValues.coverLetter,
        has_resume: !!formValues.resume,
      });

      ToastService.show('Career application submitted successfully!', 'success');
      // ... rest of success handling
    } catch (error) {
      await op.track('career_application_error', {
        error_type: error instanceof Error ? error.message : 'unknown',
        job_title: jobData?.title,
      });
      // ... error handling
    }
  };

  // ... rest of component
}
```

## Example 3: Tracking Quote Request Form

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

const GetAFreeQuoteForm: React.FC<{ formData: any }> = ({ formData }) => {
  const op = useOpenPanel();
  // ... existing state

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setIsSubmitting(true);

    try {
      // ... submit form

      // Track quote request
      await op.track('quote_request_submitted', {
        looking_for: selectedOption,
        services: selectedOptions,
        budget: selectedBudget,
        has_project_brief: !!projectBrief,
        has_document: !!file,
      });

      setSubmitSuccess(true);
      // ... rest of success handling
    } catch (error) {
      await op.track('quote_request_error', {
        error_type: error instanceof Error ? error.message : 'unknown',
      });
      // ... error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of component
};
```

## Example 4: Tracking Button Clicks

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function CtaButton() {
  const op = useOpenPanel();

  const handleClick = async () => {
    await op.track('cta_button_clicked', {
      button_text: 'Get Started',
      button_location: 'hero_section',
      page: 'home',
    });
    
    // Navigate or perform action
  };

  return <button onClick={handleClick}>Get Started</button>;
}
```

## Example 5: Tracking Newsletter Subscription

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function NewsletterModal({ isOpen, onClose }) {
  const op = useOpenPanel();
  // ... existing state

  const handleSubscribe = async (email: string) => {
    try {
      // ... submit newsletter subscription

      await op.track('newsletter_subscribed', {
        email_domain: email.split('@')[1], // Track domain only for privacy
        source: 'modal',
      });

      // Optionally identify the user
      await op.identify(email, {
        email: email,
        properties: {
          newsletter_subscribed: true,
          subscription_date: new Date().toISOString(),
        },
      });
    } catch (error) {
      await op.track('newsletter_subscription_error', {
        error_type: error instanceof Error ? error.message : 'unknown',
      });
    }
  };

  // ... rest of component
}
```

## Example 6: Tracking User Identification

If you have user authentication or want to identify users who submit forms:

```typescript
'use client';
import { useOpenPanel } from '@/src/hooks/useOpenPanel';

export default function UserProfile({ user }) {
  const op = useOpenPanel();

  useEffect(() => {
    if (user?.email) {
      // Identify the user when they log in or visit with known identity
      op.identify(user.email, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        properties: {
          user_type: user.role,
          account_created: user.createdAt,
        },
      });
    }
  }, [user]);

  // ... rest of component
}
```

## Best Practices

1. **Track Important User Actions**: Focus on actions that indicate engagement or conversion
2. **Include Context**: Add properties that provide context (page, section, user type, etc.)
3. **Don't Track PII**: Avoid tracking personally identifiable information unless necessary (and if you do, use identify() instead)
4. **Error Tracking**: Track errors to understand where users are having issues
5. **Consistent Naming**: Use consistent event naming (snake_case) and property names

## Event Naming Conventions

- Use snake_case for event names: `contact_form_submitted`, `button_clicked`
- Use descriptive names: `newsletter_subscribed` not `ns`
- Include action and object: `form_submitted`, `button_clicked`, `video_watched`
- Be consistent: if you use `_submitted` for forms, use it for all forms

## Property Naming Conventions

- Use snake_case for property keys: `form_type`, `button_location`
- Be descriptive but concise: `job_title` not `jt` or `title_of_job_user_is_applying_for`
- Include relevant context: `page`, `section`, `user_type`

