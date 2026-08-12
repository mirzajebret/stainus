# INFORMATION_ARCHITECTURE.md

> Project: STAINUS Official Website
>
> Version: 1.0
> Depends on:
>
> - PROJECT.md
> - DESIGN_SYSTEM.md

---

# Purpose

This document defines how information is organized across the STAINUS website.

It answers:

- What information exists?
- Where should users find it?
- How should users navigate between pages?
- Which information has the highest priority?

A good information architecture should reduce cognitive load and help users accomplish their goals with minimal effort.

---

# Information Architecture Principles

The website should be:

- Easy to understand
- Easy to navigate
- Predictable
- Consistent
- Search-friendly
- Mobile-friendly

Every page should have one primary purpose.

---

# Primary User Goals

## Prospective Students

Goals

- Learn about STAINUS
- Explore study programs
- View tuition/admission information
- Register for PMB
- Contact admissions

Priority

★★★★★

---

## Parents

Goals

- Verify institutional credibility
- View accreditation
- Learn campus profile
- Understand available programs
- Find contact information

Priority

★★★★☆

---

## Current Students

Goals

- Read announcements
- Access important links
- Read campus news
- Contact campus

Priority

★★★☆☆

---

## Lecturers

Goals

- Read campus updates
- Access institutional information

Priority

★★☆☆☆

---

## Alumni

Goals

- Stay connected
- Read news
- Contact campus

Priority

★★☆☆☆

---

## Public

Goals

- Learn about STAINUS
- Verify institution
- Contact campus

Priority

★★☆☆☆

---

# Website Structure

```
STAINUS

├── Home
├── Profile
├── Study Programs
├── Admissions (PMB)
├── News
└── Contact
```

Only six primary pages are included in Version 1.

Avoid unnecessary navigation items.

---

# Navigation Hierarchy

Primary Navigation

```
Home

Profile

Programs

Admissions

News

Contact

[Register]
```

The navigation should remain visible on desktop and mobile.

---

# Navigation Philosophy

Navigation should answer:

Where am I?

Where can I go?

How do I return?

Users should never feel lost.

---

# Homepage

Purpose

Introduce STAINUS in under two minutes.

Homepage should summarize every major section.

Homepage is NOT a dumping ground for information.

---

Contains

- Hero
- Statistics
- Chairman Welcome
- Programs Preview
- Campus Life
- Latest News
- CTA
- Footer

---

# Profile Page

Purpose

Build trust.

Contents

- History
- Vision
- Mission
- Core Values
- Chairman Message
- Organization Structure
- Accreditation
- Campus Facilities

CTA

Admissions

---

# Programs Page

Purpose

Help prospective students compare available study programs.

Contents

- Introduction
- Programs List
- Career Opportunities
- Learning Outcomes
- CTA

Avoid overwhelming users with curriculum details.

---

# Admissions Page

Purpose

Convert visitors into applicants.

Contents

- Admission Overview
- Requirements
- Registration Flow
- Tuition Information
- Important Dates
- Frequently Asked Questions
- CTA

This page is conversion-focused.

---

# News Page

Purpose

Demonstrate campus activity.

Contents

- Featured News
- Latest News
- Categories (future)
- Search (future)
- Pagination

Each news article should include:

- Featured Image
- Publish Date
- Author
- Reading Time
- Related Articles

---

# Contact Page

Purpose

Reduce communication friction.

Contents

- Address
- Google Maps
- Phone
- WhatsApp
- Email
- Contact Form
- Office Hours
- Social Media

Users should never struggle to find contact information.

---

# Homepage Information Priority

Order

```
Hero

↓

Trust Indicators

↓

Programs

↓

Campus Activities

↓

News

↓

Admissions

↓

Contact
```

---

# Trust Indicators

Immediately establish credibility.

Possible indicators

- Accreditation
- Years of Operation
- Number of Students
- Number of Lecturers
- Graduate Count
- Industry Partners

Avoid exaggerated marketing claims.

---

# Content Hierarchy

Every page follows

```
Heading

↓

Description

↓

Primary Content

↓

Supporting Content

↓

CTA
```

Never mix unrelated information.

---

# User Journey

## Journey A

Prospective Student

```
Homepage

↓

Programs

↓

Admissions

↓

Contact

↓

Registration
```

---

## Journey B

Parent

```
Homepage

↓

Profile

↓

Programs

↓

Admissions

↓

Contact
```

---

## Journey C

General Visitor

```
Homepage

↓

News

↓

Profile

↓

Contact
```

---

# Internal Linking Strategy

Every page should naturally connect to another page.

Example

Homepage

↓

Programs

↓

Admissions

↓

Contact

Avoid dead ends.

---

# CTA Hierarchy

Primary CTA

Register Now

Secondary CTA

Learn More

Tertiary CTA

Contact Us

Never display multiple competing primary CTAs.

---

# Content Grouping

Group related information together.

Example

Good

```
Admissions

Requirements

Timeline

Tuition

FAQ
```

Bad

```
Admissions

History

News

Facilities

Requirements
```

---

# Card Hierarchy

Cards should represent only one concept.

Examples

Program Card

One study program.

News Card

One article.

Statistic Card

One metric.

Avoid combining multiple concepts into one card.

---

# Breadcrumbs

Version 1

Optional

Version 2

Recommended

Structure

```
Home

>

Programs

>

Islamic Education
```

---

# URL Structure

Clean URLs only.

Good

```
/

/profile

/programs

/admissions

/news

/contact
```

Future

```
/news/title

/programs/pai

/programs/hki
```

Avoid long URLs.

---

# Search Strategy

Version 1

No global search.

Future

Global search across

- News
- Programs
- Downloads

---

# Content Ownership

Profile

University Administration

Programs

Academic Office

Admissions

Admissions Team

News

Public Relations

Contact

Administration

This separation supports future CMS integration.

---

# Future Information Architecture

Version 2

```
Home

Profile

Programs

Admissions

Research

Community Service

News

Gallery

Downloads

Contact
```

Version 3

```
Student Portal

Academic Calendar

Journal

Career Center

Library

Alumni

International Office
```

Current architecture should support this expansion without restructuring.

---

# Information Density

Each page should answer one major question.

Homepage

Who are we?

Profile

Who is STAINUS?

Programs

What can I study?

Admissions

How do I enroll?

News

What is happening?

Contact

How can I reach STAINUS?

Do not answer multiple unrelated questions on one page.

---

# IA Checklist

Every page must have

- One clear purpose
- One primary CTA
- Logical content flow
- Internal navigation
- Mobile usability
- Semantic structure
- SEO-friendly hierarchy

---

# Acceptance Criteria

A first-time visitor should be able to:

- Understand what STAINUS is within 30 seconds.
- Find any major information within three clicks.
- Reach the admissions page from any page.
- Contact the university without confusion.

The information architecture should feel intuitive, predictable, and scalable for future growth.