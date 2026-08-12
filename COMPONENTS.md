# COMPONENTS.md

> Project: STAINUS Official Website
>
> Version: 1.0
> Depends on:
>
> - PROJECT.md
> - DESIGN_SYSTEM.md
> - INFORMATION_ARCHITECTURE.md
> - SITEMAP.md

---

# Purpose

This document defines every reusable component used throughout the STAINUS website.

Every UI element should be built as an independent, reusable React component.

Avoid duplicated UI.

Prefer composition over copy-paste.

---

# Component Philosophy

Every component must be

- Reusable
- Responsive
- Accessible
- Stateless whenever possible
- Easy to maintain
- Easy to extend

---

# Folder Structure

```text
components/

├── layout/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   └── PageHero.tsx
│
├── common/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── SectionTitle.tsx
│   ├── EmptyState.tsx
│   ├── StatCard.tsx
│   ├── FeatureCard.tsx
│   ├── ImageCard.tsx
│   └── Divider.tsx
│
├── home/
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── ChairmanWelcome.tsx
│   ├── ProgramsPreview.tsx
│   ├── CampusLife.tsx
│   ├── LatestNews.tsx
│   └── AdmissionsCTA.tsx
│
├── news/
│   └── NewsCard.tsx
│
├── programs/
│   └── ProgramCard.tsx
│
├── admissions/
│   ├── Timeline.tsx
│   └── FAQ.tsx
│
└── ui/
    ├── Input.tsx
    ├── Textarea.tsx
    ├── Select.tsx
    ├── Spinner.tsx
    └── Modal.tsx
```

---

# Global Rules

Every component must

- Use TypeScript
- Use TailwindCSS
- Accept className
- Be responsive
- Export as default
- Avoid inline styles
- Avoid hardcoded content

---

# Naming Convention

Correct

```
ProgramCard

SectionTitle

NewsCard

StatCard
```

Incorrect

```
program_card

card1

MyComponent

test
```

---

# Layout Components

---

## Container

Purpose

Maintain consistent page width.

Responsibilities

- max width
- horizontal padding
- center alignment

Should be used on every page.

Never manually recreate container spacing.

---

## Section

Purpose

Provide consistent vertical spacing.

Responsibilities

- top padding
- bottom padding

Default

```
py-24
```

---

## PageHero

Purpose

Internal page header.

Used on

- Profile
- Programs
- Admissions
- News
- Contact

Contains

- Title
- Description
- Background
- Breadcrumb (future)

---

## Navbar

Purpose

Primary navigation.

Contains

- Logo
- Menu
- Register CTA

Behavior

Desktop

Horizontal

Mobile

Drawer

Sticky

Yes

Scroll Effect

Background blur

Small shadow

---

## Footer

Contains

Quick Links

Contact

Social Media

Copyright

Never overload footer.

---

# Common Components

---

## Button

Variants

```
Primary

Secondary

Outline

Ghost

Link
```

Sizes

```
Small

Medium

Large
```

States

```
Default

Hover

Focus

Disabled

Loading
```

Must support

- icon left
- icon right

---

## Badge

Purpose

Small status label.

Examples

```
New

Featured

Announcement
```

Avoid colorful badges.

---

## Card

Base reusable card.

All other cards inherit its style.

Should include

- rounded
- border
- subtle shadow

---

## Divider

Simple horizontal separator.

Use instead of unnecessary spacing.

---

## EmptyState

Used when no data exists.

Contains

- Icon
- Title
- Description
- CTA (optional)

---

# Typography Components

---

## SectionTitle

Contains

Small Label (optional)

↓

Heading

↓

Description

Used across all sections.

Maintains consistent hierarchy.

---

# Statistics

---

## StatCard

Contains

Number

↓

Label

↓

Optional Icon

Example

```
500+

Students
```

---

# Program Components

---

## ProgramCard

Contains

Image

↓

Program Name

↓

Short Description

↓

Learn More Button

Hover

Slight elevation

Entire card clickable.

---

# News Components

---

## NewsCard

Contains

Image

↓

Category

↓

Date

↓

Title

↓

Description

↓

Read More

Support

Featured variant

Standard variant

Compact variant

---

# FeatureCard

Used for

- Facilities
- Benefits
- Values

Contains

Icon

↓

Title

↓

Description

---

# ImageCard

Purpose

Campus gallery.

Contains

Image

↓

Caption

Hover

Zoom image slightly.

---

# Homepage Components

---

## Hero

Purpose

First impression.

Contains

Headline

↓

Description

↓

Primary CTA

↓

Secondary CTA

↓

Hero Image

Height

Approximately 90vh.

---

## Stats

Grid of statistics.

Desktop

4 columns

Tablet

2 columns

Mobile

2 columns

---

## ChairmanWelcome

Contains

Photo

↓

Message

↓

Read More

Desktop

Two columns.

Mobile

Single column.

---

## ProgramsPreview

Displays

Three featured study programs.

Contains

Section Title

↓

Program Cards

↓

View All Button

---

## CampusLife

Grid of images.

Purpose

Show real campus activities.

Avoid sliders.

Prefer static responsive grid.

---

## LatestNews

Displays

Three newest articles.

Each article uses

NewsCard

---

## AdmissionsCTA

Final conversion section.

Contains

Headline

↓

Description

↓

Register Button

↓

Contact Button

---

# Admissions Components

---

## Timeline

Purpose

Display admission process.

Desktop

Vertical timeline.

Mobile

Stacked cards.

---

## FAQ

Accordion component.

One item open at a time.

Keyboard accessible.

---

# Form Components

---

## Input

Support

- Label
- Placeholder
- Error
- Disabled
- Required

---

## Textarea

Same style as Input.

---

## Select

Native or accessible custom select.

Avoid unnecessary complexity.

---

## Spinner

Used during loading.

Simple.

Small.

No fancy animation.

---

## Modal

Future use.

Should support

- Escape key
- Overlay click
- Focus trap

---

# Responsive Behavior

Every component must support

```
Mobile

↓

Tablet

↓

Desktop
```

Never build desktop-only components.

---

# Loading States

Every async component should support loading.

Examples

- Skeleton
- Spinner

Never leave blank space.

---

# Error States

Every dynamic component should support

- Empty
- Error
- Loading

---

# Accessibility Rules

Every interactive component must

- be keyboard accessible
- have visible focus
- include ARIA labels where needed
- have proper semantic HTML

---

# Reusability Rules

Never duplicate

- Buttons
- Cards
- Inputs
- Titles
- Layout wrappers

Create once.

Reuse everywhere.

---

# Component Communication

Parent components

Manage data.

Child components

Render UI.

Avoid business logic inside UI components.

---

# Props Guidelines

Props should be

Explicit

Typed

Minimal

Avoid passing unnecessary props.

---

# Performance Rules

Prefer

Server Components

Only use Client Components when required.

Examples

Client Components

- Mobile Menu
- Accordion
- Modal
- Carousel (future)

Everything else should remain Server Components whenever possible.

---

# Animation Rules

Hover

```
scale(1.02)

transition 200ms
```

Cards

Subtle elevation only.

Buttons

Color transition.

No bounce.

No rotation.

No excessive motion.

---

# Component Checklist

Before creating a new component ask

- Can an existing component be reused?
- Does it follow the design system?
- Is it responsive?
- Is it accessible?
- Is it typed?
- Is it reusable?
- Is it easy to maintain?

If any answer is "No", redesign the component.

---

# Acceptance Criteria

The component library is complete when

- Every repeated UI element exists only once.
- Every page is composed from reusable components.
- No duplicated layouts exist.
- Every component follows the design system.
- Every component is responsive.
- Every component is accessible.
- Every component is production-ready.