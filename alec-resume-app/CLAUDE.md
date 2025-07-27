# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture Overview

This is an interactive resume built with React, Tailwind CSS, and Framer Motion. The application follows a component-based architecture with centralized data management.

### Key Architecture Patterns

**Data-Driven Components**: All resume content is centralized in `src/data/resume.js` and passed down through props. This single source of truth contains personal info, projects, experience, skills, and education data.

**Animation-First Design**: Every component uses Framer Motion for smooth interactions. The design philosophy emphasizes transitions under 300ms with smooth easing curves. Key animation patterns:
- `whileInView` for scroll-triggered animations
- `AnimatePresence` for conditional rendering
- Layout animations for expandable content
- Hover states with `whileHover` and `onHoverStart/End`

**Interactive State Management**: Components manage local interaction state (hover, expanded, filtered) rather than global state. Key interaction patterns:
- Project cards expand on click to show case studies
- Skills filter projects when clicked
- Navigation appears on scroll with active section tracking
- Experience timeline highlights on hover

### Component Structure

**Layout Components**: `App.jsx` orchestrates the single-page layout with Navigation, Hero, Projects, Skills, Experience, and Footer sections.

**Interactive Components**: 
- `ProjectCard.jsx`: Three-state cards (default, hover, expanded) with tech badges and case study details
- `Skills.jsx`: Clickable skill categories that filter and display related projects
- `Navigation.jsx`: Fixed nav with scroll detection and smooth section jumping

### Styling System

**Tailwind Configuration**: Custom color palette with `primary` (blue) and `accent` (purple) colors. Custom animations for typing effects, fade-ins, and slide-ups defined in `tailwind.config.js`.

**Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop). All interactions work across devices.

## Content Updates

To update resume content, modify `src/data/resume.js`. The data structure includes:
- `personal`: Contact info and summary
- `projects`: Array with expandable case study details
- `experience`: Timeline with achievements arrays
- `skills`: Categorized tools with project filtering
- `stats`: Hero section metrics

## Build Configuration

Uses Vite with React and PostCSS for Tailwind processing. The `@tailwindcss/postcss` plugin is required for proper Tailwind compilation. Font loading uses Google Fonts (Inter) imported in CSS.

## Performance Considerations

Bundle size is optimized at ~105kb gzipped. Framer Motion animations are configured for 60fps performance. Images should be optimized and animations use `transform` properties for hardware acceleration.