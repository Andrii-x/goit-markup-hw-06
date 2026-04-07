# Project Guidelines

## Code Style
- Use semantic HTML with descriptive class names (e.g., `.header-nav`, `.team-item`)
- Mobile-first CSS approach: base styles for mobile, then media queries for tablet (768px) and desktop (1158px)
- Reference [css/styles.css](css/styles.css) for component organization and responsive patterns
- Reference [index.html](index.html) for HTML structure and accessibility practices

## Architecture
Static HTML/CSS/JS website with 5 main sections: Header, Hero, Advantages, Team, Portfolio, Footer.
- Mobile drawer menu and modal dialogs managed via class toggles (`.is-open`)
- SVG icon system using a single sprite file with `<use>` references
- Responsive images with `srcset` for 1x/2x retina support

## Build and Test
No build process required. Serve files directly with a local HTTP server (e.g., VS Code Live Server extension) to enable SVG icons and relative paths.
- SVG `<use>` elements require HTTP protocol (won't work with `file://`)
- Test responsiveness across breakpoints: 320px, 768px, 1158px

## Conventions
- Use data attributes for JavaScript hooks (e.g., `data-menu-open`, `data-modal-close`) instead of class selectors
- Image naming: `img-N@2x.jpg` for retina versions, stored in subdirectories like `images/team/`
- Form elements (modal, subscribe) are present but require backend integration for functionality
- Reference [js/menu.js](js/menu.js) for event handling patterns and defensive coding

## Potential Pitfalls
- SVG icons require HTTP server (use Live Server extension, not file:// protocol)
- Ensure all DOM elements exist before JS runs (defensive null checks in place)
- Clean up duplicate files: remove `css/styles.cssoo` if present

See [README.md](README.md) for Git and GitHub setup instructions.