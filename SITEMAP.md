# SITEMAP.md

> Project: STAINUS Official Website
>
> Version: 1.0
> Depends on:
>
> - PROJECT.md
> - DESIGN_SYSTEM.md
> - INFORMATION_ARCHITECTURE.md

---

# Purpose

This document defines the complete sitemap of the STAINUS website.

The sitemap determines:

- Website structure
- Navigation hierarchy
- Parent-child relationships
- URL structure
- Future scalability

Every page created by the AI must exist in this sitemap.

Do not create additional pages unless requested.

---

# Sitemap Overview

```
Home
│
├── Profile
├── Programs
├── Admissions
├── News
└── Contact
```

Version 1 intentionally keeps the navigation minimal.

The goal is clarity over quantity.

---

# Global Navigation

Desktop Navigation

```
Logo

Home

Profile

Programs

Admissions

News

Contact

-------------------

Register Now (Primary CTA)
```

---

Mobile Navigation

```
☰

Home

Profile

Programs

Admissions

News

Contact

Register Now
```

Use a slide-over (drawer) menu.

Do not use a full-screen menu.

---

# Website Map

```
/

├── /profile
├── /programs
├── /admissions
├── /news
└── /contact
```

Future pages can be added without changing navigation.

---

# Homepage

URL

```
/
```

Purpose

Landing page.

Primary destination for first-time visitors.

---

Sections

```
Navbar

↓

Hero

↓

Statistics

↓

Chairman Welcome

↓

Study Programs

↓

Campus Life

↓

Latest News

↓

Admissions CTA

↓

Footer
```

---

Primary CTA

Register Now

Secondary CTA

Learn More

---

# Profile

URL

```
/profile
```

Purpose

Build institutional trust.

---

Sections

```
Hero Banner

↓

History

↓

Vision

↓

Mission

↓

Core Values

↓

Chairman's Welcome

↓

Organization Structure

↓

Accreditation

↓

Campus Facilities

↓

CTA

↓

Footer
```

---

Future Expansion

```
History Detail

Leadership

Strategic Plan

Campus Tour
```

---

# Programs

URL

```
/programs
```

Purpose

Display all available study programs.

---

Sections

```
Hero Banner

↓

Introduction

↓

Programs Grid

↓

Learning Outcomes

↓

Career Opportunities

↓

Why Choose STAINUS

↓

CTA

↓

Footer
```

---

Each Program Card contains

- Image
- Name
- Short Description
- Learn More Button

---

Future Expansion

```
/programs/pai

/programs/hki

/programs/mpi
```

Each program will eventually have its own detail page.

---

# Admissions

URL

```
/admissions
```

Purpose

Convert visitors into applicants.

---

Sections

```
Hero Banner

↓

Admission Overview

↓

Requirements

↓

Admission Flow

↓

Tuition Information

↓

Scholarships

↓

Important Dates

↓

Frequently Asked Questions

↓

Register CTA

↓

Footer
```

---

Primary CTA

Register Now

---

Future Expansion

```
Online Registration

Payment

Document Upload

Admission Status
```

---

# News

URL

```
/news
```

Purpose

Publish institutional news.

---

Sections

```
Hero Banner

↓

Featured News

↓

Latest News

↓

Pagination

↓

Footer
```

---

Each News Card

- Featured Image
- Category
- Date
- Title
- Short Description
- Read More

---

Future Expansion

```
/news/article-slug
```

---

Future Features

- Categories
- Search
- Author
- Tags
- Reading Time

---

# Contact

URL

```
/contact
```

Purpose

Allow visitors to easily reach STAINUS.

---

Sections

```
Hero Banner

↓

Contact Information

↓

Google Maps

↓

Contact Form

↓

Office Hours

↓

Social Media

↓

Footer
```

---

Contact Card

Contains

- Address
- Phone
- WhatsApp
- Email

---

# Footer Navigation

Footer should contain

```
Quick Links

Profile

Programs

Admissions

News

Contact
```

---

Information

```
Address

Phone

Email

WhatsApp
```

---

Social

```
Instagram

Facebook

YouTube
```

---

Legal

```
Copyright

Privacy Policy (Future)

Terms (Future)
```

---

# CTA Placement

Homepage

Register Now

---

Profile

Explore Programs

---

Programs

Register Now

---

Admissions

Register Now

---

News

Admissions

---

Contact

Contact Admissions

---

# Navigation Rules

Navigation should always remain consistent.

Do not change menu order.

Correct

```
Home

Profile

Programs

Admissions

News

Contact
```

Incorrect

```
Programs

Home

News

Admissions

Contact

Profile
```

---

# URL Naming Convention

Use

Lowercase

Hyphenated

Readable

Examples

Good

```
/admissions

/news

/programs

/contact
```

Future

```
/news/student-achievement-2026

/programs/pendidikan-agama-islam
```

Bad

```
/Page1

/news123

/PROFIL

/data_page
```

---

# Page Template Standard

Every page should follow the same structure.

```
Navbar

↓

Hero Section

↓

Page Content

↓

CTA Section

↓

Footer
```

Consistency is mandatory.

---

# Hero Standard

Every internal page uses

- Small Hero
- Breadcrumb (future)
- Page Title
- Short Description

Example

```
Programs

Discover our academic programs designed to prepare students for the future.
```

---

# Empty States

Future features such as News Search must include empty states.

Example

```
No articles found.

Try another keyword.
```

Never leave empty space without explanation.

---

# Error Pages

Version 1

Required

```
404

500
```

404 should include

- Illustration
- Friendly Message
- Back to Home Button

---

# Future Sitemap Expansion

```
Home

Profile

Programs

Admissions

Research

Community Service

News

Gallery

Events

Downloads

Career

Journal

International Office

Library

Student Portal

Contact
```

Current architecture must not prevent this expansion.

---

# SEO Sitemap Structure

Priority

```
/

/profile

/programs

/admissions

/news

/contact
```

News Articles

Lower Priority

Future program detail pages

Medium Priority

---

# Click Depth

Maximum click depth

```
3
```

Example

```
Home

↓

Programs

↓

Program Detail
```

Avoid deeper navigation.

---

# Accessibility Navigation Rules

Navigation must support

- Keyboard navigation
- Screen readers
- Visible focus state
- ARIA labels where appropriate

---

# Sitemap Checklist

Every page must have

- Unique URL
- Unique title
- Hero section
- Primary CTA
- Footer
- Mobile responsiveness
- SEO metadata
- Semantic HTML

---

# Acceptance Criteria

The sitemap is considered complete when

- Every page has one clear purpose.
- Navigation remains simple and predictable.
- Users can reach any important page within three clicks.
- Future expansion can be added without restructuring the project.
- Every page follows the same navigation and layout conventions.