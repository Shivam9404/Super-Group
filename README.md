//Supreme Group

Supreme Group is a modern, fully responsive vehicle manufacturing company website built with Next.js, showcasing advanced UI interactions, smooth animations, and an elegant user experience.

Project Setup Instructions
1. Clone the Repository
git clone (https://github.com/Shivam9404/Super-Group.git)
cd supreme-group

2. Install Dependencies
npm install

3. Run the Development Server
npm run dev


Open http://localhost:3000
to view the app in your browser.

4. Build for Production
npm run build
npm start

Deployed live on Vercel: https://vercel.com/shivam-shindes-projects-461c7202/super-group-5mvm

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Component Architecture Overview

SUPREME-GROUP/
│
├── .next/                     # Next.js build output (auto-generated)
├── .vercel/                   # Deployment configurations for Vercel
├── node_modules/              # Installed dependencies
├── public/                    # Public assets (images, icons, etc.)
│
├── src/
│   └── app/
│       ├── components/         # Reusable and page-specific components
│       │   ├── ContactPage.tsx        # Contact section with form validation
│       │   ├── EvolvingPage.tsx       # Carousel and animated section
│       │   ├── Footer.tsx             # Footer with company info and links
│       │   └── PerformancePage.tsx    # Section highlighting vehicle performance
│       │
│       ├── favicon.ico         # Site favicon
│       ├── globals.css         # Global CSS and Tailwind base styles
│       ├── layout.tsx          # Root layout and shared structure
│       └── page.tsx            # Main landing page
│
├── .gitignore                  # Git ignored files
├── eslint.config.mjs           # ESLint configuration for code quality
├── next-env.d.ts               # TypeScript Next.js type definitions
├── next.config.ts              # Next.js configuration file
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration (used by Tailwind CSS)
├── tailwind.config.js          # Tailwind CSS customization and theme config
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Responsive Design Strategy

The design follows a mobile-first approach and adapts smoothly across screen sizes:

Mobile (<576px): Single-column layout, stacked sections, simplified navigation
Desktop (≥1200px): Full-width layouts, large visuals, and multi-column sections

Tailwind CSS utilities like grid, flex, and responsive prefixes (sm:, md:, lg:, xl:) ensure adaptive layouts with consistent spacing and typography.

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Performance Optimization Techniques

To ensure a fast and smooth experience:

Next.js Image Optimization for automatic resizing and lazy loading
Code Splitting to reduce bundle size
Efficient asset loading with compressed images and Next.js caching

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Accessibility Considerations

Accessibility was carefully implemented throughout:
Semantic HTML elements (<main>, <header>, <footer>) for structure
Meaningful alt text for images
Adequate color contrast and focus visibility

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Third-Party Libraries Used

Next.js: Framework for server-side rendering, routing, and optimization
React:	UI library for building reusable components
Tailwind CSS:	Utility-first CSS framework for responsive design
React Hooks (useState, useEffect):	To manage state, effects, and interactivity
Vercel:	For deployment and hosting

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Assumptions & Design Decisions

Adopted Next.js for its performance, SSR capabilities, and SEO benefits
Chose Tailwind CSS for rapid, responsive UI development
Used React Hooks to simplify state management
Created a custom carousel component to improve interactivity
Maintained a consistent visual hierarchy with scalable components

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

🧠 Challenges Faced & Solutions

Implementing a smooth carousel animation: Used useRef for DOM control and optimized CSS transitions with Framer Motion
Responsive layout breaking on mobile view: Refined Tailwind grid breakpoints and adjusted padding/margin dynamically
Handling animation performance:	Reduced unnecessary re-renders and applied transform-based animations
Validating form fields in Contact section: Added form validation logic for required fields and structured error messages

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

Upcoming Features & Improvements

Dark mode support
Multilingual support (EN / HI)
Gallery section for vehicle showcase
Backend integration for Contact Form

*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

🗣️ Additional Remarks

This project represents a blend of modern web development practices and clean design philosophy.
It emphasizes:

Component reusability
Accessibility and responsiveness
Smooth user experience through animations
Scalable codebase suitable for future feature additions
Deployed seamlessly using Vercel, ensuring optimized builds and global CDN delivery.