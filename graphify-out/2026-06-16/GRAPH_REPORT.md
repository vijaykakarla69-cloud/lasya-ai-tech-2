# Graph Report - lasyaaitech.com  (2026-06-16)

## Corpus Check
- 295 files · ~3,985,443 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1876 nodes · 2118 edges · 130 communities (113 shown, 17 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `00808376`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Supporting Data Module|Supporting Data Module]]
- [[_COMMUNITY_Data Module 8|Data Module 8]]
- [[_COMMUNITY_Data Module 9|Data Module 9]]
- [[_COMMUNITY_Lib Module|Lib Module]]
- [[_COMMUNITY_Case Study Dashdev Module|Case Study Dashdev Module]]
- [[_COMMUNITY_Careers Module|Careers Module]]
- [[_COMMUNITY_Data Module 13|Data Module 13]]
- [[_COMMUNITY_Landing Page 1 Module|Landing Page 1 Module]]
- [[_COMMUNITY_Landing Page 5 Module|Landing Page 5 Module]]
- [[_COMMUNITY_Services Module 2|Services Module 2]]
- [[_COMMUNITY_Data Module 6|Data Module 6]]
- [[_COMMUNITY_Landing Page 4 Module|Landing Page 4 Module]]
- [[_COMMUNITY_Landing Page 2 Module|Landing Page 2 Module]]
- [[_COMMUNITY_Landing Page 3 Module|Landing Page 3 Module]]
- [[_COMMUNITY_Data Module 3|Data Module 3]]
- [[_COMMUNITY_Data Module 2|Data Module 2]]
- [[_COMMUNITY_Ai Free Quote Module|Ai Free Quote Module]]
- [[_COMMUNITY_Services Module 3|Services Module 3]]
- [[_COMMUNITY_Services Dashdev Module|Services Dashdev Module]]
- [[_COMMUNITY_About Module|About Module]]
- [[_COMMUNITY_Technologies Module|Technologies Module]]
- [[_COMMUNITY_Services Module|Services Module]]
- [[_COMMUNITY_Data Module 5|Data Module 5]]
- [[_COMMUNITY_Industry Pages Module|Industry Pages Module]]
- [[_COMMUNITY_Data Module 12|Data Module 12]]
- [[_COMMUNITY_Home Module|Home Module]]
- [[_COMMUNITY_Common Module 2|Common Module 2]]
- [[_COMMUNITY_Data Module 7|Data Module 7]]
- [[_COMMUNITY_Blog Details Module 3|Blog Details Module 3]]
- [[_COMMUNITY_Data Module 15|Data Module 15]]
- [[_COMMUNITY_Data Module|Data Module]]
- [[_COMMUNITY_Casestudies Module|Casestudies Module]]
- [[_COMMUNITY_Data Module 4|Data Module 4]]
- [[_COMMUNITY_Technologies Module 2|Technologies Module 2]]
- [[_COMMUNITY_Supporting Data Module 2|Supporting Data Module 2]]
- [[_COMMUNITY_Data Module 16|Data Module 16]]
- [[_COMMUNITY_Services Module 4|Services Module 4]]
- [[_COMMUNITY_Config Module|Config Module]]
- [[_COMMUNITY_Get A Free Quote Module|Get A Free Quote Module]]
- [[_COMMUNITY_Api Module|Api Module]]
- [[_COMMUNITY_Blog Module|Blog Module]]
- [[_COMMUNITY_Common Module|Common Module]]
- [[_COMMUNITY_Layout Module|Layout Module]]
- [[_COMMUNITY_Api Module 2|Api Module 2]]
- [[_COMMUNITY_Elements Module|Elements Module]]
- [[_COMMUNITY_Data Module 10|Data Module 10]]
- [[_COMMUNITY_Instrumentation Module|Instrumentation Module]]
- [[_COMMUNITY_Services Module 5|Services Module 5]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 88|Community 88]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 91|Community 91]]
- [[_COMMUNITY_Community 92|Community 92]]
- [[_COMMUNITY_Community 93|Community 93]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 96|Community 96]]
- [[_COMMUNITY_Community 97|Community 97]]
- [[_COMMUNITY_Community 98|Community 98]]
- [[_COMMUNITY_Community 99|Community 99]]
- [[_COMMUNITY_Community 100|Community 100]]
- [[_COMMUNITY_Community 101|Community 101]]
- [[_COMMUNITY_Community 102|Community 102]]
- [[_COMMUNITY_Community 103|Community 103]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Community 106|Community 106]]
- [[_COMMUNITY_Community 107|Community 107]]
- [[_COMMUNITY_Community 114|Community 114]]
- [[_COMMUNITY_Community 115|Community 115]]
- [[_COMMUNITY_Community 116|Community 116]]
- [[_COMMUNITY_Community 118|Community 118]]
- [[_COMMUNITY_Community 119|Community 119]]
- [[_COMMUNITY_Community 120|Community 120]]
- [[_COMMUNITY_Community 121|Community 121]]
- [[_COMMUNITY_Community 122|Community 122]]
- [[_COMMUNITY_Community 123|Community 123]]
- [[_COMMUNITY_Community 124|Community 124]]
- [[_COMMUNITY_Community 125|Community 125]]
- [[_COMMUNITY_Community 126|Community 126]]
- [[_COMMUNITY_Community 127|Community 127]]
- [[_COMMUNITY_Community 128|Community 128]]
- [[_COMMUNITY_Community 129|Community 129]]
- [[_COMMUNITY_Community 130|Community 130]]

## God Nodes (most connected - your core abstractions)
1. `AllServices` - 51 edges
2. `risk_image` - 20 edges
3. `OpenPanel Analytics Implementation Guide` - 19 edges
4. `useLoading` - 17 edges
5. `scripts` - 16 edges
6. `compilerOptions` - 16 edges
7. `Terms and Conditions` - 16 edges
8. `content` - 14 edges
9. `Privacy Policy` - 12 edges
10. `PageData` - 11 edges

## Surprising Connections (you probably didn't know these)
- `AboutSection()` --calls--> `useLoading`  [INFERRED]
  src/components/about/page.tsx → src/services/LoadingService.ts
- `Preloader()` --calls--> `useLoading`  [EXTRACTED]
  src/app/loading.tsx → src/services/LoadingService.ts
- `ApiResponse` --references--> `PageData`  [EXTRACTED]
  src/app/lp5/[slug]/page.tsx → src/app/lp5/[slug]/Landing5Client.tsx
- `GetAFreeQuoteForm()` --calls--> `useOpenPanelService()`  [EXTRACTED]
  src/components/ai-free-quote/AifreeQuote.tsx → src/services/openpanel.ts
- `CareerApplicationForm()` --calls--> `useOpenPanelService()`  [EXTRACTED]
  src/components/careers/CareerApplicationForm.tsx → src/services/openpanel.ts

## Import Cycles
- 1-file cycle: `src/app/careers/page.tsx -> src/app/careers/page.tsx`

## Communities (130 total, 17 thin omitted)

### Community 0 - "Supporting Data Module"
Cohesion: 0.05
Nodes (18): COMPANY_SOCIAL_FOLLOW_PLATFORMS, DEFAULT_PLATFORMS, SIZE_CONFIG, SocialPlatform, SocialShareData, SocialShareProps, version, ApiService (+10 more)

### Community 1 - "Data Module 8"
Cohesion: 0.05
Nodes (45): button, description, id, subtitle, title, id, title, id (+37 more)

### Community 2 - "Data Module 9"
Cohesion: 0.05
Nodes (42): small, thumbnail, risk_image, alternativeText, caption, createdAt, documentId, ext (+34 more)

### Community 3 - "Lib Module"
Cohesion: 0.06
Nodes (26): GTMPageViewContent(), OpenPanelWrapperProps, isInRolloutBucket(), metadata, RootLayout(), ToastContainer(), CookieConsent(), CookieConsentProps (+18 more)

### Community 5 - "Careers Module"
Cohesion: 0.09
Nodes (12): CareerTracksProps, job_roles, data, meta, pagination, page, pageCount, pageSize (+4 more)

### Community 6 - "Data Module 13"
Cohesion: 0.17
Nodes (12): data, createdAt, documentId, featured_projects, home_blog, id, partner, proffesional (+4 more)

### Community 7 - "Landing Page 1 Module"
Cohesion: 0.07
Nodes (20): Blog1Data, Blog1Props, BlogCard, Features1Props, Features2Props, Features3Data, Features3Props, Hero1Props (+12 more)

### Community 8 - "Landing Page 5 Module"
Cohesion: 0.08
Nodes (15): Cta7Props, Cta8Props, Cta9Props, Faqs3Props, Features10Props, Hero5Props, LogoCloud5Props, Project1Props (+7 more)

### Community 10 - "Data Module 6"
Cohesion: 0.06
Nodes (33): data, createdAt, documentId, flexible_models, id, performance, publishedAt, seo (+25 more)

### Community 11 - "Landing Page 4 Module"
Cohesion: 0.05
Nodes (12): Blog4Props, Cta4Props, Cta5Props, Cta6Props, Features8Props, Hero4Props, HowItWork2Props, LogoCloud4Props (+4 more)

### Community 12 - "Landing Page 2 Module"
Cohesion: 0.09
Nodes (9): Blog2Props, Faqs1Props, Features4Props, Features5Props, Hero2Props, HowItWork1Props, Static1Props, LandingPage2ClientProps (+1 more)

### Community 13 - "Landing Page 3 Module"
Cohesion: 0.07
Nodes (13): Blog3Props, Cta2Props, Faqs2Props, Features6Props, LogoCloud3Props, Services2Props, Static2Props, LandingPage3ClientProps (+5 more)

### Community 14 - "Data Module 3"
Cohesion: 0.08
Nodes (26): Contact(), generateMetadata(), getContactPageData(), button, contact_subtitle, contact_title, describe_placeholder, form_points (+18 more)

### Community 15 - "Data Module 2"
Cohesion: 0.10
Nodes (18): data, createdAt, documentId, hero_section, id, lapl_job_categories, publishedAt, updatedAt (+10 more)

### Community 17 - "Ai Free Quote Module"
Cohesion: 0.09
Nodes (10): AboutClientProps, AboutSection(), AiFreeQuoteClientProps, Preloader(), CaseStudyContent(), PageCaseStudy50(), ContactSection(), SkeletonLoading() (+2 more)

### Community 18 - "Services Module 3"
Cohesion: 0.12
Nodes (16): GetAFreeQuoteForm(), CareerApplicationForm(), CareerApplicationFormProps, disabledFieldStyles, NewsletterModal(), NewsletterModalProps, GetAFreeQuoteForm(), WebDevelopmentResponse (+8 more)

### Community 20 - "About Module"
Cohesion: 0.22
Nodes (9): data, case_study_hero, createdAt, documentId, hero_section, id, publishedAt, seo (+1 more)

### Community 21 - "Technologies Module"
Cohesion: 0.07
Nodes (3): BackToTopProps, LayoutProps, TechnologyDetailClientProps

### Community 23 - "Data Module 5"
Cohesion: 0.13
Nodes (15): data, createdAt, description, documentId, id, lapl_industries, publishedAt, seo (+7 more)

### Community 25 - "Data Module 12"
Cohesion: 0.12
Nodes (15): id, link, text, data, button, createdAt, documentId, faq (+7 more)

### Community 26 - "Home Module"
Cohesion: 0.15
Nodes (3): getData(), Home(), meta

### Community 27 - "Common Module 2"
Cohesion: 0.18
Nodes (7): CustomSocialShare(), MinimalSocialShare(), DEFAULT_PLATFORMS, SOCIAL_PLATFORM_TEMPLATES, SocialPlatform, SocialShareData, useSocialShare()

### Community 28 - "Data Module 7"
Cohesion: 0.16
Nodes (11): data, meta, pagination, page, pageCount, pageSize, total, getTechnologyDetailData() (+3 more)

### Community 30 - "Data Module 15"
Cohesion: 0.15
Nodes (12): data, createdAt, description, documentId, id, publishedAt, seo, subtitle (+4 more)

### Community 31 - "Data Module"
Cohesion: 0.25
Nodes (7): data, meta, pagination, page, pageCount, pageSize, total

### Community 32 - "Casestudies Module"
Cohesion: 0.10
Nodes (5): CaseStudiesClientProps, GetAFreeQuoteClientProps, IndustriesClientProps, CommonService, ServiceDetailClientProps

### Community 33 - "Data Module 4"
Cohesion: 0.25
Nodes (7): data, meta, pagination, page, pageCount, pageSize, total

### Community 34 - "Technologies Module 2"
Cohesion: 0.24
Nodes (7): Technologies(), generateMetadata(), getTechnologiesPageData(), PageData, SeoData, TechnologiesClientProps, Technology

### Community 35 - "Supporting Data Module 2"
Cohesion: 0.20
Nodes (9): blogPageHeroSectionData, caseDetailsPageHeroSectionData, casestudiesPageHeroSectionData, contactCtaFaqData, hireJsDevelopersPageHeroSectionData, serviceDeveloperPageHeroSectionData, servicesPageHeroSectionData, wallOfLovePageHeroSectionData (+1 more)

### Community 36 - "Data Module 16"
Cohesion: 0.25
Nodes (7): data, meta, pagination, page, pageCount, pageSize, total

### Community 37 - "Services Module 4"
Cohesion: 0.00
Nodes (500): 123, alarm, alarm-fill, align-bottom, align-center, align-end, align-middle, align-start (+492 more)

### Community 38 - "Config Module"
Cohesion: 0.50
Nodes (4): getPageConfig(), OPENPANEL_PAGES, OpenPanelPageConfig, shouldTrackRoute()

### Community 39 - "Get A Free Quote Module"
Cohesion: 0.08
Nodes (24): dependencies, aos, axios, @fortawesome/fontawesome-svg-core, @fortawesome/free-solid-svg-icons, @fortawesome/react-fontawesome, isotope-layout, next (+16 more)

### Community 45 - "Elements Module"
Cohesion: 0.10
Nodes (21): devDependencies, autoprefixer, @babel/generator, @babel/parser, @babel/traverse, @babel/types, cross-env, eslint (+13 more)

### Community 76 - "Community 76"
Cohesion: 0.10
Nodes (20): 1. Environment Variables, 2. Route Configuration, 3. Automatic Page Tracking, Cross-Origin Issues, Differences from Mobile App, Events not appearing in OpenPanel, File Structure, How It Works (+12 more)

### Community 77 - "Community 77"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 78 - "Community 78"
Cohesion: 0.29
Nodes (7): stats, description, id, image, image2, stats, title

### Community 79 - "Community 79"
Cohesion: 0.12
Nodes (16): Available Platforms, Basic Usage, Blog Post Sharing, Components, Custom Platforms, Hooks, Integration with Analytics, Job Sharing (Careers Page) (+8 more)

### Community 80 - "Community 80"
Cohesion: 0.12
Nodes (16): 10. Limitation of Liability, 11. Indemnification, 12. Termination, 13. Changes to These Terms, 14. Governing Law, 15. Contact Us, 1. Agreement to Terms, 2. The Service (+8 more)

### Community 81 - "Community 81"
Cohesion: 0.12
Nodes (16): scripts, build, build_krivatech, build_lasyaaitech, build_start, dev, export, format (+8 more)

### Community 82 - "Community 82"
Cohesion: 0.12
Nodes (15): 10. Changes to This Policy, 11. Contact Us, 1. Overview, 2. Information We Collect, 3. Information We Do NOT Collect, 4. Device Permissions, 5. Third-Party Services, 6. Children's Privacy (+7 more)

### Community 83 - "Community 83"
Cohesion: 0.14
Nodes (13): 1. Automatic Page View Tracking, 2. Form Tracking Events, 3. Secure API Route, ✅ Career Application Form (`CareerApplicationForm.tsx`), ✅ Completed Implementation, ✅ Contact Form (`ContactSection.tsx`), 📋 Event Tracking Summary, 📁 File Organization (+5 more)

### Community 84 - "Community 84"
Cohesion: 0.17
Nodes (11): description, dockerfile, environment, NODE_ENV, healthcheck, interval, path, retries (+3 more)

### Community 85 - "Community 85"
Cohesion: 0.18
Nodes (10): 1. Environment Variables Setup, 2. Verify Environment Variables Are Loaded, 3. Test the API Route, 4. Check Browser Network Tab, 5. If Still Getting 404, 6. Alternative: Manual Route Handler, Issue: 404 on /api/openpanel and 401 Unauthorized, OpenPanel Environment Variables Setup (+2 more)

### Community 86 - "Community 86"
Cohesion: 0.18
Nodes (10): Benefits, Enable/Disable OpenPanel, Files Updated, How It Works, Migration Notes, OpenPanel Service Guide, Overview, Usage in Components (+2 more)

### Community 87 - "Community 87"
Cohesion: 0.18
Nodes (10): Best Practices, Event Naming Conventions, Example 1: Tracking Contact Form Submission, Example 2: Tracking Career Application, Example 3: Tracking Quote Request Form, Example 4: Tracking Button Clicks, Example 5: Tracking Newsletter Subscription, Example 6: Tracking User Identification (+2 more)

### Community 88 - "Community 88"
Cohesion: 0.47
Nodes (4): CaseStudies(), generateMetadata(), getCaseStudiesPageData(), meta

### Community 89 - "Community 89"
Cohesion: 0.24
Nodes (8): fs, generateRandomId(), main(), { parse }, path, processClassNameLine(), processDirectory(), t

### Community 90 - "Community 90"
Cohesion: 0.47
Nodes (4): AiFreeQuote(), generateMetadata(), getQuotePageData(), SeoService

### Community 91 - "Community 91"
Cohesion: 0.40
Nodes (5): button, description, id, title, brands

### Community 92 - "Community 92"
Cohesion: 0.25
Nodes (7): Automatic Tracking, Mobile App Compatibility, OpenPanel Analytics Implementation Guide, Overview, Page View Tracking, Support & Resources, Table of Contents

### Community 93 - "Community 93"
Cohesion: 0.40
Nodes (5): id, label, url, variant, button

### Community 94 - "Community 94"
Cohesion: 0.40
Nodes (5): id, lapl_services, text, title, case_study

### Community 95 - "Community 95"
Cohesion: 0.40
Nodes (5): hero, button, description, id, title

### Community 96 - "Community 96"
Cohesion: 0.60
Nodes (3): CaseStudyDetail(), getCaseStudyData(), generateMetadata()

### Community 97 - "Community 97"
Cohesion: 0.29
Nodes (6): 1. Environment Variables Required, 2. How It Works, 3. Debugging Steps, 4. Common Issues, Current Setup, OpenPanel Debugging Guide

### Community 98 - "Community 98"
Cohesion: 0.29
Nodes (6): Contact, Frequently Asked Questions, Getting Started, How-To Guides, Troubleshooting, VoxNote Support

### Community 99 - "Community 99"
Cohesion: 0.60
Nodes (3): getIndustryData(), IndustryDetail(), generateMetadata()

### Community 100 - "Community 100"
Cohesion: 0.60
Nodes (3): LandingPage2(), generateMetadata(), getLandingPageData()

### Community 101 - "Community 101"
Cohesion: 0.33
Nodes (5): Create `.env.local` file, Environment Variables Setup for OpenPanel, Production Deployment, Quick Setup Steps, Values Explanation

### Community 102 - "Community 102"
Cohesion: 0.33
Nodes (6): 1. Event Naming, 2. Properties, 3. User Identification, 4. Error Tracking, 5. Performance, Best Practices

### Community 103 - "Community 103"
Cohesion: 0.33
Nodes (6): Adding New Event Tracking, Step 1: Import the Hook, Step 2: Initialize in Component, Step 3: Track Events, Step 4: Identify Users (if applicable), Step 5: Test

### Community 104 - "Community 104"
Cohesion: 0.33
Nodes (6): Available Events, Custom Events (Manual), Detail Page Events, Form Events, Listing Page Events, Page View Events (Automatic)

### Community 105 - "Community 105"
Cohesion: 0.60
Nodes (3): LandingPage4(), generateMetadata(), getLandingPageData()

### Community 106 - "Community 106"
Cohesion: 0.33
Nodes (5): Company, Contact Us, Frequently Asked Questions, Get in Touch, What can we help with?

### Community 107 - "Community 107"
Cohesion: 0.83
Nodes (3): generateMetadata(), GetAFreeQuote(), getQuotePageData()

### Community 114 - "Community 114"
Cohesion: 0.40
Nodes (5): Add Event Tracking, Add Page View Tracking, Add User Identification, Check if Working, Quick Reference

### Community 115 - "Community 115"
Cohesion: 0.40
Nodes (5): Code Examples, Example 1: Track Form Submission, Example 2: Track Button Clicks, Example 3: Track Page-Specific Interactions, Example 4: Track Link Clicks

### Community 116 - "Community 116"
Cohesion: 0.40
Nodes (5): Events Not Appearing in OpenPanel, Events Not Sending, Page Views Not Tracking, Troubleshooting, User Identification Not Working

### Community 118 - "Community 118"
Cohesion: 0.40
Nodes (4): *, main, git, deploymentEnabled

### Community 119 - "Community 119"
Cohesion: 0.50
Nodes (3): env, env_develoment, env_production

### Community 120 - "Community 120"
Cohesion: 0.50
Nodes (3): name, private, version

### Community 121 - "Community 121"
Cohesion: 0.50
Nodes (4): API Reference, Methods, OpenPanelService, useOpenPanel Hook

### Community 122 - "Community 122"
Cohesion: 0.50
Nodes (4): Dynamic Route Tracking, How It Works, Page View Tracking (Automatic), Route Configuration (Single Source of Truth)

### Community 123 - "Community 123"
Cohesion: 0.50
Nodes (4): How to Identify, Identify Function Signature, User Identification, When to Identify Users

### Community 126 - "Community 126"
Cohesion: 0.67
Nodes (3): 1. Environment Variables, 2. Verify Configuration, Setup & Configuration

### Community 127 - "Community 127"
Cohesion: 0.67
Nodes (3): Architecture, File Structure, How Data Flows

### Community 128 - "Community 128"
Cohesion: 0.67
Nodes (3): Current Implementation, Integration Points, Where to Add Tracking

### Community 129 - "Community 129"
Cohesion: 0.67
Nodes (3): Event Tracking, Track Function Signature, Using the Hook

## Knowledge Gaps
- **1108 isolated node(s):** `name`, `description`, `dockerfile`, `port`, `NODE_ENV` (+1103 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `data` connect `Data Module 13` to `Community 78`, `Home Module`, `Community 91`, `Community 94`, `Community 95`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `AllServices` connect `Services Module 2` to `Casestudies Module`, `Community 100`, `Landing Page 1 Module`, `Landing Page 5 Module`, `Community 105`, `Landing Page 3 Module`, `Ai Free Quote Module`, `Services Module 3`, `Services Module`, `Blog Details Module 3`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **What connects `name`, `description`, `dockerfile` to the rest of the system?**
  _1108 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Supporting Data Module` be split into smaller, more focused modules?**
  _Cohesion score 0.053877551020408164 - nodes in this community are weakly interconnected._
- **Should `Data Module 8` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `Data Module 9` be split into smaller, more focused modules?**
  _Cohesion score 0.047619047619047616 - nodes in this community are weakly interconnected._
- **Should `Lib Module` be split into smaller, more focused modules?**
  _Cohesion score 0.05975609756097561 - nodes in this community are weakly interconnected._