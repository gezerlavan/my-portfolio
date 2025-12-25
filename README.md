# My Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing projects, experience, and contact information. Features a sleek dark/light theme toggle and smooth scrolling navigation.

## Features

- **Responsive Design** - Mobile-first approach with hamburger menu for smaller screens
- **Dark/Light Theme** - Dynamic theme switching with persistent preferences
- **Smooth Animations** - On-screen animations for enhanced user experience
- **Modern UI** - Built with SCSS for maintainable styling
- **Fast Performance** - Powered by Vite for instant HMR and optimized builds

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: SCSS with modular architecture
- **Custom Hooks**: `useClickOutside`, `useEventListener`, `useOnScreen`

## Project Structure

```
src/
├── cmps/                 # React components
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── layout/           # Layout components
├── assets/
│   ├── img/              # Images
│   └── styles/           # SCSS stylesheets
│       ├── basics/       # Base styles and utilities
│       ├── cmps/         # Component styles
│       └── setup/        # Variables, mixins, typography
├── customHooks/          # Reusable React hooks
└── services/             # Utility services
```

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Features Breakdown

- **Hero Section** - Eye-catching landing section with call-to-action
- **About** - Personal introduction and professional summary
- **Experience** - Timeline of work experience and achievements
- **Projects** - Portfolio of completed projects with descriptions
- **Contact** - Contact form and social media links
- **Navigation** - Responsive header with mobile menu support

## Custom Hooks

- `useClickOutside` - Close menus when clicking outside
- `useEventListener` - Manage event listeners with cleanup
- `useOnScreen` - Trigger animations when elements enter viewport

## Performance

Built with Vite for lightning-fast development and production builds with optimized code splitting.

## License

© 2024. All rights reserved.
