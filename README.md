# Design System - Office Workspace

A comprehensive design system foundation for modern web applications using Tailwind CSS and core web technologies.

## 🎨 Overview

This design system provides a robust, scalable foundation for building consistent user interfaces. It includes design tokens, component patterns, and utilities that ensure maintainable and accessible web applications.

## 📁 File Structure

```
office-workspace-website/
├── design-tokens.css      # CSS custom properties and design tokens
├── tailwind.config.js     # Tailwind CSS configuration with custom theme
├── design-system.js       # JavaScript utilities for theme management
├── index.html            # Design system documentation and examples
└── README.md             # This documentation file
```

## 🎯 Key Features

- **Design Tokens**: Comprehensive CSS custom properties for colors, typography, spacing, and more
- **Tailwind Integration**: Extended Tailwind CSS configuration with custom utilities
- **Theme Management**: Dynamic theme switching with JavaScript utilities
- **Accessibility**: Built-in accessibility features and ARIA support
- **Responsive Design**: Mobile-first responsive utilities and breakpoints
- **Component Library**: Pre-built component patterns and styles
- **Performance Optimized**: Minimal overhead and efficient CSS

## 🚀 Quick Start

### 1. Include Design Tokens

Add the design tokens CSS file to your HTML:

```html
<link rel="stylesheet" href="design-tokens.css">
```

### 2. Configure Tailwind CSS

Use the provided Tailwind configuration:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="tailwind.config.js"></script>
```

### 3. Include JavaScript Utilities

Add the design system JavaScript for theme management:

```html
<script src="design-system.js"></script>
```

## 🎨 Design Tokens

### Colors

The design system uses a semantic color palette based on your brand colors:

```css
/* Primary Brand Colors */
--color-orange-red: #FF4200;
--color-gainsboro: #E3E4E7;
--color-eerie-black: #222121;
--color-blue-violet: #8435F2;

/* Semantic Colors */
--color-primary: var(--color-orange-red);
--color-secondary: var(--color-blue-violet);
--color-neutral: var(--color-gainsboro);
--color-text: var(--color-eerie-black);
```

### Typography

Consistent typography scale with Inter font family:

```css
/* Font Sizes */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
--font-size-6xl: 3.75rem;   /* 60px */
```

### Spacing

Consistent spacing scale for layouts and components:

```css
--spacing-0: 0;
--spacing-1: 0.25rem;     /* 4px */
--spacing-2: 0.5rem;      /* 8px */
--spacing-4: 1rem;        /* 16px */
--spacing-6: 1.5rem;      /* 24px */
--spacing-8: 2rem;        /* 32px */
--spacing-12: 3rem;       /* 48px */
--spacing-16: 4rem;       /* 64px */
```

## 🧩 Component Patterns

### Buttons

Use the predefined button classes for consistent styling:

```html
<!-- Button Sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-md btn-primary">Medium</button>
<button class="btn btn-lg btn-primary">Large</button>
<button class="btn btn-xl btn-primary">Extra Large</button>

<!-- Button Variants -->
<button class="btn btn-md btn-primary">Primary</button>
<button class="btn btn-md btn-secondary">Secondary</button>
<button class="btn btn-md btn-ghost">Ghost</button>
<button class="btn btn-md btn-danger">Danger</button>
```

### Form Elements

Consistent input styling with focus states:

```html
<!-- Input Sizes -->
<input type="text" class="input input-sm" placeholder="Small input">
<input type="text" class="input input-md" placeholder="Medium input">
<input type="text" class="input input-lg" placeholder="Large input">

<!-- Input States -->
<input type="text" class="input input-md" placeholder="Normal state">
<input type="text" class="input input-md" value="Focused state" autofocus>
<input type="text" class="input input-md" value="Disabled state" disabled>
```

### Cards

Flexible card components for content organization:

```html
<!-- Basic Card -->
<div class="card">
    <div class="card-body">
        <h3 class="text-lg font-semibold">Card Title</h3>
        <p>Card content goes here.</p>
    </div>
</div>

<!-- Card with Header and Footer -->
<div class="card">
    <div class="card-header">
        <h3 class="text-lg font-semibold">Card Header</h3>
    </div>
    <div class="card-body">
        <p>Card body content.</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-sm btn-primary">Action</button>
    </div>
</div>
```

### Status Badges

Color-coded badges for status indicators:

```html
<span class="badge badge-prospecting">Prospecting</span>
<span class="badge badge-meeting">Meeting</span>
<span class="badge badge-negotiation">Negotiation</span>
<span class="badge badge-won">Won</span>
<span class="badge badge-qualification">Qualification</span>
<span class="badge badge-proposal">Proposal</span>
```

## 🎛️ Theme Management

### JavaScript API

The design system provides a JavaScript API for dynamic theme management:

```javascript
// Initialize design system
const designSystem = new DesignSystem();

// Toggle theme
designSystem.toggleTheme();

// Get current theme
const currentTheme = designSystem.getCurrentTheme();

// Apply specific theme
designSystem.applyTheme('dark');

// Check system preferences
const prefersDark = designSystem.isDarkModePreferred();
const prefersReducedMotion = designSystem.isReducedMotionPreferred();
```

### Theme Toggle Button

Add a theme toggle button to your interface:

```html
<button id="theme-toggle" class="btn btn-md btn-secondary" aria-label="Toggle theme">
    <i class="fas fa-sun"></i>
</button>
```

## 📱 Responsive Design

### Breakpoints

The design system includes responsive breakpoints:

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Responsive Utilities

Use Tailwind's responsive prefixes with custom utilities:

```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-bg-primary p-4">1 Col (Mobile)</div>
    <div class="bg-bg-primary p-4">2 Col (Tablet)</div>
    <div class="bg-bg-primary p-4">4 Col (Desktop)</div>
    <div class="bg-bg-primary p-4">4 Col (Desktop)</div>
</div>

<!-- Responsive Typography -->
<p class="text-sm md:text-base lg:text-lg">
    This text scales responsively.
</p>
```

## ♿ Accessibility Features

### Built-in Accessibility

The design system includes several accessibility features:

- **Focus Management**: Automatic focus indicators and trapping
- **ARIA Support**: Proper ARIA attributes and live regions
- **Keyboard Navigation**: Full keyboard navigation support
- **Screen Reader Support**: Skip links and semantic HTML
- **High Contrast Support**: High contrast mode detection
- **Reduced Motion**: Respects user's motion preferences

### Accessibility Utilities

```javascript
// Announce message to screen readers
designSystem.announce('Action completed successfully');

// Get focusable elements
const focusableElements = designSystem.getFocusableElements();

// Check accessibility preferences
const highContrast = designSystem.isHighContrastPreferred();
```

## 🛠️ Utility Functions

### JavaScript Utilities

The design system provides useful utility functions:

```javascript
// Debounce function calls
const debouncedSearch = debounce(searchFunction, 300);

// Throttle function calls
const throttledScroll = throttle(scrollFunction, 100);

// Generate unique IDs
const uniqueId = generateId();

// Check if element is in viewport
const isVisible = isInViewport(element);

// Smooth scroll to element
smoothScrollTo(element, { behavior: 'smooth' });

// Format currency
const formattedPrice = formatCurrency(1234.56, 'USD');

// Format date
const formattedDate = formatDate(new Date(), 'en-US');

// Validate inputs
const isValidEmail = isValidEmail('user@example.com');
const isValidPhone = isValidPhone('+1-555-123-4567');
```

## 🎨 Customization

### Extending Colors

Add custom colors to the design system:

```css
:root {
  /* Custom brand colors */
  --color-brand-accent: #FF6B35;
  --color-brand-success: #28A745;
  --color-brand-warning: #FFC107;
  --color-brand-error: #DC3545;
}
```

### Extending Tailwind

Add custom utilities to Tailwind configuration:

```javascript
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [
    // Custom plugin
    function({ addUtilities }) {
      addUtilities({
        '.custom-utility': {
          'property': 'value',
        },
      });
    },
  ],
}
```

## 📊 Performance Considerations

### Optimization Tips

1. **CSS Optimization**: Use PurgeCSS to remove unused styles
2. **JavaScript Optimization**: Tree-shake unused utilities
3. **Font Loading**: Optimize font loading with `font-display: swap`
4. **Image Optimization**: Use appropriate image formats and sizes
5. **Caching**: Implement proper caching strategies

### Bundle Size

The design system is optimized for minimal bundle size:

- **CSS**: ~15KB minified (with Tailwind)
- **JavaScript**: ~8KB minified
- **Total**: ~23KB minified

## 🔧 Development

### Local Development

1. Clone the repository
2. Open `index.html` in a web browser
3. Use browser dev tools to inspect components
4. Modify design tokens in `design-tokens.css`
5. Update Tailwind config in `tailwind.config.js`

### Testing

Test the design system across:

- Different browsers (Chrome, Firefox, Safari, Edge)
- Different devices (desktop, tablet, mobile)
- Different accessibility tools (screen readers, keyboard navigation)
- Different user preferences (dark mode, reduced motion, high contrast)

## 📚 Resources

### Documentation

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Tools

- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessibility Testing Tools](https://www.w3.org/WAI/ER/tools/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)

## 🤝 Contributing

When contributing to the design system:

1. Follow the existing naming conventions
2. Ensure accessibility compliance
3. Test across different browsers and devices
4. Update documentation for new features
5. Maintain backward compatibility

## 📄 License

This design system is provided as-is for educational and development purposes.

## 🆘 Support

For questions or issues:

1. Check the documentation above
2. Review the example implementations in `index.html`
3. Inspect the browser console for JavaScript errors
4. Validate CSS and HTML syntax

---

**Built with ❤️ for modern web applications** 