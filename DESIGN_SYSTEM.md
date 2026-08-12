# DESIGN_SYSTEM.md

> Project: STAINUS Official Website
>
> Version: 1.0
> Depends on: PROJECT.md

---

# Purpose

This document defines the visual language of the STAINUS website.

Every page, component, section, and interaction **must follow this design system**.

Do not introduce new styles unless they are added here.

---

# Design Principles

The interface should feel:

- Modern
- Clean
- Professional
- Calm
- Academic
- Premium
- Spacious
- Timeless

---

## Design Keywords

Use these keywords when making design decisions.

- Minimal
- Elegant
- Soft
- Structured
- Readable
- Consistent
- Trustworthy
- Islamic (subtle)
- Mobile First

---

# Design Inspirations

Primary Inspirations

- Stanford University
- MIT
- Stripe
- Apple
- Linear
- Vercel

Secondary Inspirations

- Tailwind UI
- shadcn/ui
- Radix UI

Do NOT imitate traditional government websites.

---

# Color System

## Primary

Used for:

- CTA
- Links
- Active Navigation
- Buttons

```css
#0F766E
```

---

## Primary Hover

```css
#115E59
```

---

## Secondary

Used for:

- Footer
- Dark Sections

```css
#14532D
```

---

## Accent

Used sparingly.

Examples

- Statistics
- Important Numbers
- Highlights

```css
#F59E0B
```

---

## Background

Main Background

```css
#FFFFFF
```

Secondary Background

```css
#FAFAFA
```

Soft Background

```css
#F3F4F6
```

---

## Text

Heading

```css
#111827
```

Body

```css
#374151
```

Muted

```css
#6B7280
```

Border

```css
#E5E7EB
```

---

# Color Usage Rules

Primary color should occupy roughly

10%

Neutral colors

90%

Avoid colorful interfaces.

---

# Typography

## Heading Font

Plus Jakarta Sans

Weights

- 600
- 700
- 800

---

## Body Font

Inter

Weights

- 400
- 500
- 600

---

# Heading Scale

Hero

```text
60px Desktop
44px Tablet
34px Mobile
```

---

H1

```text
48px
```

---

H2

```text
36px
```

---

H3

```text
28px
```

---

H4

```text
22px
```

---

Body

```text
16px
```

---

Small

```text
14px
```

---

Caption

```text
12px
```

---

# Line Height

Heading

110%

Paragraph

170%

---

# Letter Spacing

Headings

Slightly Tight

Paragraph

Normal

Buttons

Normal

---

# Layout

Maximum Width

```text
1280px
```

Container

```css
mx-auto
px-6

lg:px-8

xl:px-10
```

---

# Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

---

# Vertical Rhythm

Section Padding

Desktop

```text
120px
```

Tablet

```text
96px
```

Mobile

```text
72px
```

---

Gap Between Components

Small

```text
16px
```

Medium

```text
24px
```

Large

```text
40px
```

Extra Large

```text
64px
```

---

# Border Radius

Small

```text
12px
```

Medium

```text
16px
```

Large

```text
24px
```

Cards should generally use

```text
rounded-2xl
```

---

# Shadows

Only subtle shadows.

Small

```css
shadow-sm
```

Medium

```css
shadow-md
```

Avoid heavy shadows.

---

# Borders

Prefer borders over shadows whenever possible.

Border Color

```css
#E5E7EB
```

---

# Cards

Cards should be

- White
- Rounded
- Spacious
- Soft shadow
- Border

Never use colorful cards.

---

# Icons

Library

Lucide React

Style

Outline

Stroke

2px

Avoid filled icons.

---

# Images

Photography should dominate the interface.

Preferred

- Real campus photos
- Students
- Lecturers
- Academic activities
- Islamic atmosphere

Avoid

- Stock photos with fake smiles
- Cartoon illustrations
- Clipart

---

# Buttons

Primary

Filled

Primary Color

Rounded Full

Height

48px

---

Secondary

Outlined

Primary Border

White Background

---

Ghost

No border

Transparent

Used inside navbar.

---

# Inputs

Height

48px

Border

Gray 200

Focus

Primary Color

Rounded

Large

---

# Navigation

Height

80px

Sticky

Enabled

Background

White with blur

Shadow

Small on scroll

---

# Footer

Background

Secondary Color

Text

White

Links

White 80%

Hover

Primary

---

# Section Pattern

Each section follows

Section Label (Optional)

↓

Heading

↓

Description

↓

Content

↓

CTA (Optional)

---

# Whitespace Rules

Whitespace is a design element.

Never compress layouts.

Prefer generous spacing over fitting more content.

---

# Animation Principles

Animations should feel

- smooth
- subtle
- purposeful

Avoid flashy effects.

---

Allowed Animations

- Fade In
- Fade Up
- Scale
- Slide
- Opacity
- Hover Elevation

---

Forbidden Animations

- Bounce
- Flash
- Shake
- Spin
- Infinite Motion
- Particle Effects

---

# Motion Timing

Fast

150ms

Normal

250ms

Slow

400ms

Use ease-out.

---

# Responsive Rules

Desktop First Preview

↓

Tablet Optimization

↓

Mobile Perfection

Every page must look intentional on mobile.

Never hide important information.

---

# Component Consistency

Every reusable component must use

- same spacing
- same radius
- same typography
- same colors
- same hover effects

No exceptions.

---

# Accessibility

Minimum Contrast

WCAG AA

Interactive targets

Minimum

44px

Forms

Proper labels

Images

Meaningful alt text

Keyboard Navigation

Required

---

# Visual Hierarchy

The order of attention should be

1. Hero Title
2. Primary CTA
3. Featured Image
4. Section Titles
5. Cards
6. Supporting Text
7. Footer

---

# UI Density

Target Density

Comfortable

Not Compact

Not Spacious for the sake of emptiness

Aim for premium readability.

---

# Design Checklist

Every new page must satisfy

- Uses approved colors
- Uses approved typography
- Uses approved spacing
- Uses approved buttons
- Uses approved cards
- Responsive
- Accessible
- Consistent
- Minimal
- Professional
- Readable

If any answer is "No", redesign before implementation.

---

# Non-Negotiable Rules

Never

- introduce random colors
- use multiple gradients
- mix border radius styles
- use inconsistent spacing
- overuse shadows
- overuse icons
- use decorative elements without purpose
- create crowded layouts
- prioritize aesthetics over usability

---

# Acceptance Criteria

The completed UI should immediately communicate:

- Trust
- Professionalism
- Academic Excellence
- Modern Technology
- Islamic Values (subtle)
- Simplicity
- Quality

Every page should look like it belongs to the same design system.