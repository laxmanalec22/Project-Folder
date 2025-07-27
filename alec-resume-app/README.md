# Alec Freese - Interactive Resume

A modern, interactive resume built with React, Tailwind CSS, and Framer Motion. This project demonstrates AI-first development using Replit and Claude Code.

## 🚀 Features

- **Animated Hero Section** with typing effect and stats
- **Interactive Project Cards** with hover states and expandable details
- **Skills Visualization** with project filtering
- **Timeline Experience** section with hover effects
- **Smooth Navigation** with scroll-to-top functionality
- **Mobile Responsive** design
- **Accessibility** features (keyboard navigation, proper contrast)

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Inter Font** - Typography

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with typing animation
│   ├── Navigation.jsx    # Fixed navigation and scroll-to-top
│   ├── Projects.jsx      # Projects grid container
│   ├── ProjectCard.jsx   # Individual project cards
│   ├── Skills.jsx        # Skills with filtering
│   ├── Experience.jsx    # Timeline experience section
│   └── Footer.jsx        # Footer with contact info
├── data/
│   └── resume.js         # All resume data and content
├── App.jsx               # Main app component
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Key Interactions

1. **Hero Stats** - Animated counters on load
2. **Project Cards** - Hover for tech stack, click to expand case study
3. **Skills Filter** - Click skills to see related projects
4. **Experience Timeline** - Hover to highlight achievements
5. **Smooth Navigation** - Fixed nav appears on scroll

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Mobile Responsive

The design is mobile-first with breakpoints at:
- `768px` (tablet)
- `1024px` (desktop)

All interactions work seamlessly across devices.

## ♿ Accessibility

- Proper semantic HTML structure
- Keyboard navigation support
- WCAG contrast ratios
- Screen reader friendly
- Focus indicators

## 🎯 Performance

- Lazy loading animations
- Optimized images
- Minimal bundle size (~105kb gzipped)
- Smooth 60fps animations

## 🚀 Deployment

### Replit Deployment
1. Import project to Replit
2. Install dependencies: `npm install`
3. Configure run command: `npm run dev`
4. Deploy using Replit's hosting

### Manual Deployment
1. Build: `npm run build`
2. Deploy `dist/` folder to any static hosting service
3. Configure routing for SPA (optional)

## 📄 Resume Data

All content is centralized in `src/data/resume.js` for easy updates:
- Personal information
- Project details with case studies
- Skills and tools
- Experience and achievements
- Education

## 🤖 Built With AI

This entire project was built in 2 days using:
- **Replit** for rapid prototyping
- **Claude Code** for AI-assisted development
- **AI-first approach** to development

## 📞 Contact

**Alec Freese**  
Email: afreesedesign@gmail.com  
Phone: 704-775-5983  
LinkedIn: [linkedin.com/in/alec-freese](https://linkedin.com/in/alec-freese)  
Website: [alecfreese.com](https://alecfreese.com)

---

*Built with 🤖 AI + ❤️ Design*
