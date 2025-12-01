# Claude Code Prompt for Building Power Scraper Pro Website

**Copy everything below this line and paste it into a new Claude Code session:**

---

## Your Task

You are building a stunning, Apple Design Award-worthy marketing website for **Power Scraper Pro**, a professional macOS media library management application. The website must be a single HTML file that showcases the app's features, screenshots, and capabilities.

## Important Files

1. **Read the PRD document first:** `Power-Scraper-Pro-Website-PRD.md`
   - This contains ALL specifications, features, copy, design requirements
   - Do not start coding until you've read and understood this document

2. **Screenshots folder:** `screenshots/`
   - Contains 27 PNG screenshots of the application
   - All filenames and their intended uses are documented in the PRD
   - Reference these images using relative paths: `screenshots/filename.png`

## Design Requirements

### Visual Style
- **Apple-inspired design** - Clean, minimal, lots of whitespace
- **SF Pro typography** - Use system fonts (`-apple-system, BlinkMacSystemFont, "SF Pro Display"`)
- **Brand colors** - Primary blue `#5B7FFF`, purple gradient `#8B5CF6`
- **Glassmorphism effects** - Backdrop blur, subtle borders, soft shadows
- **Dark mode support** - Must respect `prefers-color-scheme`

### Layout Structure
1. Fixed navigation header
2. Hero section with main screenshot in macOS window chrome
3. Feature highlights (6 cards with SF Symbol icons)
4. Screenshot gallery (scrollable showcase)
5. Detailed Movies features section
6. Detailed TV Shows features section
7. Settings/customization section
8. Technical specifications
9. Download call-to-action
10. Footer with attribution

### Key Screenshots to Feature
- **Hero:** `DashBoard Dark.png`
- **Movies:** `Movies Scraped light.png`
- **TV Shows:** `TV Selection Light.png`
- **Selection:** `Movie Selection Dark.png`
- **Progress:** `Movie Scraping Light.png`
- **Customization:** `Adjust FanArt Dark.png`
- **Settings:** `Appearance Settings Dark.png`
- **Recovery:** `Resume Previous Dark.png`

### Technical Requirements
- Single `index.html` file with inline CSS and minimal JS
- Responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Lazy loading for images
- Accessible (alt text, keyboard nav, WCAG AA contrast)
- Page weight under 5MB (excluding images)

## Content Guidelines

### Headlines
- Hero: "Power Scraper Pro"
- Tagline: "The professional media library manager for Mac"

### Feature Cards (use SF Symbol SVGs or Unicode equivalents)
1. Intelligent Scanning - folder icon
2. Multi-Source Metadata - globe icon
3. Kodi-Compliant Output - folder plus icon
4. Apple Silicon Optimized - cpu icon
5. NAS-Optimized - drive icon
6. Resume From Quit - refresh icon

### Copy Tone
- Professional but approachable
- Technical without being overwhelming
- Emphasize speed, quality, and Mac-native experience

## Implementation Steps

1. **Read the full PRD** - Understand all requirements before coding
2. **Create the HTML structure** - Semantic sections for each area
3. **Style the hero section** - Large headline, gradient text, hero image in window chrome
4. **Build feature cards** - 6 cards with icons and descriptions
5. **Create screenshot gallery** - Horizontal scroll with captions
6. **Add detailed feature sections** - Movies and TV Shows
7. **Build settings showcase** - Theme and customization features
8. **Add technical specs** - Table with requirements
9. **Create download CTA** - Large, prominent button
10. **Add footer** - Attribution and links
11. **Implement dark mode** - CSS media query
12. **Add animations** - Subtle fade-in on scroll
13. **Test responsiveness** - All breakpoints
14. **Optimize performance** - Minimize CSS, lazy load images

## macOS Window Chrome

Wrap screenshots in realistic macOS window chrome:

```html
<div class="macos-window">
  <div class="window-titlebar">
    <div class="traffic-lights">
      <span class="light close"></span>
      <span class="light minimize"></span>
      <span class="light maximize"></span>
    </div>
    <span class="window-title">Power Scraper Pro</span>
  </div>
  <div class="window-content">
    <img src="screenshots/DashBoard Dark.png" alt="Power Scraper Pro main interface" loading="lazy">
  </div>
</div>
```

```css
.macos-window {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
  background: #1d1d1f;
}

.window-titlebar {
  height: 52px;
  background: linear-gradient(180deg, #3d3d3d 0%, #2d2d2d 100%);
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.traffic-lights {
  display: flex;
  gap: 8px;
}

.light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.light.close { background: #ff5f57; }
.light.minimize { background: #febc2e; }
.light.maximize { background: #28c840; }

.window-title {
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 13px;
  font-weight: 500;
}

.window-content img {
  width: 100%;
  display: block;
}
```

## Key CSS Variables

```css
:root {
  /* Brand */
  --brand-primary: #5B7FFF;
  --brand-secondary: #8B5CF6;
  --brand-gradient: linear-gradient(135deg, #5B7FFF 0%, #8B5CF6 100%);

  /* Light Mode */
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f7;
  --text-primary: #1d1d1f;
  --text-secondary: #6e6e73;

  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
  --font-hero: clamp(48px, 8vw, 96px);
  --font-headline: clamp(32px, 5vw, 64px);
  --font-body: clamp(17px, 2vw, 21px);

  /* Spacing */
  --section-padding: clamp(60px, 10vw, 120px);
  --container-max: 1200px;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #000000;
    --bg-secondary: #1d1d1f;
    --text-primary: #f5f5f7;
    --text-secondary: #a1a1a6;
  }
}
```

## Do NOT Include
- External CSS frameworks (Bootstrap, Tailwind, etc.)
- External JavaScript libraries (jQuery, React, etc.)
- External fonts (use system fonts only)
- Tracking scripts or analytics
- Cookie banners or popups

## Output
Create a single `index.html` file that:
- Is beautiful and worthy of an Apple Design Award
- Showcases all 27 screenshots appropriately
- Works perfectly on mobile, tablet, and desktop
- Supports both light and dark modes
- Loads quickly and performs well
- Is fully accessible

**Now read the PRD document and build this website!**
