# Power Scraper Pro - Website Product Requirements Document (PRD)

> **Document Version:** 1.0
> **Created:** December 1, 2025
> **Purpose:** Complete specification for building the Power Scraper Pro marketing website

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [Technical Specifications](#3-technical-specifications)
4. [Complete Feature List](#4-complete-feature-list)
5. [Architecture & Code Quality](#5-architecture--code-quality)
6. [Screenshot Catalog & Usage Guide](#6-screenshot-catalog--usage-guide)
7. [Website Design Specifications](#7-website-design-specifications)
8. [Content Sections & Copy](#8-content-sections--copy)
9. [Visual Design System](#9-visual-design-system)
10. [Implementation Requirements](#10-implementation-requirements)

---

## 1. Executive Summary

### What is Power Scraper Pro?

**Power Scraper Pro** is a professional-grade native macOS application built with Swift 6.2 and SwiftUI that automatically scrapes, organizes, and renames movie and TV show libraries into Kodi-compliant formats. It represents the pinnacle of modern macOS development with emphasis on performance optimization for Apple Silicon (M4 Max), strict concurrency safety, and professional UI/UX design.

### Key Statistics
- **265 Swift source files** (~50,000+ lines of code)
- **macOS 14+ compatible** (optimized for macOS 15 Sequoia)
- **Swift 6.2 strict concurrency** throughout
- **Two complete feature modules**: Movies and TV Shows
- **SQLite database** with sophisticated schema
- **Professional Design System** with 500+ lines of design tokens

### Target Audience
- Mac users with large movie/TV show libraries
- Kodi media center users
- Media archivists and collectors
- Power users who value native macOS experiences
- Anyone managing 100+ movies or TV shows

### Unique Value Proposition
The only native macOS media library manager that combines:
- M4 Max optimization with intelligent core detection
- NAS-aware single-pass scanning (10-20x faster)
- Swift 6.2 strict concurrency (zero data races)
- Cinema-quality UI with glassmorphism effects
- Resume-from-quit for long operations
- Multi-source metadata (TMDB + Fanart.TV)

---

## 2. Product Overview

### 2.1 Core Purpose

Power Scraper Pro solves the problem of organizing messy media libraries by:

1. **Scanning** directories for video files (mkv, mp4, avi, m4v, iso)
2. **Parsing** complex torrent filenames to extract titles and years
3. **Searching** TMDB and Fanart.TV for metadata and artwork
4. **Downloading** posters, fanart, and generating NFO files
5. **Renaming** files and folders to Kodi-compliant formats
6. **Tracking** library completion with missing episode detection

### 2.2 Supported Workflows

#### Movies Workflow
```
Input:  [RARBG] The.Matrix.1999.1080p.BluRay.x264.mkv
Output: The Matrix (1999)/
        ├── The Matrix (1999).mkv
        ├── movie.nfo (full metadata XML)
        ├── poster.jpg
        └── fanart.jpg
```

#### TV Shows Workflow
```
Input:  Breaking.Bad.S01E01.720p.WEB.h264.mkv
Output: Breaking Bad (2008)/
        ├── tvshow.nfo
        ├── poster.jpg
        ├── fanart.jpg
        ├── season01-poster.jpg
        └── Season 01/
            ├── Breaking Bad S01E01 - Pilot.mkv
            └── Breaking Bad S01E01 - Pilot.nfo
```

### 2.3 Key Differentiators

| Feature | Power Scraper Pro | Competitors |
|---------|-------------------|-------------|
| Platform | Native macOS | Java/Cross-platform |
| Performance | M4 Max optimized | Generic |
| NAS Support | 10-20x faster scanning | Standard I/O |
| Concurrency | Swift 6.2 strict | Threading issues |
| UI Quality | Cinema-grade design | Basic/dated |
| Session Recovery | Resume-from-quit | Start over |
| Sources | TMDB + Fanart.TV | Single source |

---

## 3. Technical Specifications

### 3.1 System Requirements

- **Operating System:** macOS 14.0 Sonoma or later (optimized for macOS 15 Sequoia)
- **Processor:** Apple Silicon (M1, M2, M3, M4) or Intel (with reduced performance)
- **Memory:** 4GB RAM minimum, 8GB recommended
- **Storage:** 100MB for application, varies by library size
- **Network:** Internet connection required for metadata scraping

### 3.2 Optimized For

- **M4 Max:** Dynamic core detection with P-core/E-core awareness
- **Parallelism:** Up to 14 concurrent operations on M4 Max
- **Network:** 10 concurrent API requests (TMDB rate limit compliant)
- **NAS/Network Storage:** Single-pass metadata scanning

### 3.3 Supported File Formats

**Video Input:**
- `.mkv` - Matroska Video
- `.mp4` - MPEG-4
- `.avi` - Audio Video Interleave
- `.m4v` - iTunes Video
- `.iso` - ISO Disc Image
- `.mov`, `.wmv`, `.ts`, `.m2ts` (parsing only)

**Output Formats:**
- NFO files (Kodi-compliant XML)
- JPEG/PNG artwork
- JSON library export

### 3.4 Media Information Detection

- **Video Codecs:** HEVC, AVC, AV1
- **Resolutions:** 4K, 1080p, 720p, SD
- **HDR Types:** Dolby Vision, HDR10+, HDR10
- **Audio Codecs:** TrueHD Atmos, EAC3, AAC
- **Audio Channels:** 7.1, 5.1, Stereo

### 3.5 API Integrations

**TMDB (The Movie Database):**
- Movie/TV show search and metadata
- Poster and backdrop images
- Cast, crew, and rating information
- Release dates and runtime

**Fanart.TV:**
- Extended artwork collection
- HD-enhanced variants
- Multiple poster/fanart options
- Clearlogo and disc art

---

## 4. Complete Feature List

### 4.1 Movies Features

#### Scanning & Parsing
- ✅ Recursive directory scanning
- ✅ Intelligent filename parsing for torrent names
- ✅ Minimum file size filtering (default: 100MB)
- ✅ Automatic sample file deletion
- ✅ NAS-optimized single-pass scanning
- ✅ Duplicate detection and prevention

#### Metadata Scraping
- ✅ TMDB search by title and year
- ✅ Fanart.TV extended artwork
- ✅ Comprehensive metadata (rating, runtime, genres, cast, overview)
- ✅ Dual ID support (TMDB + IMDb)
- ✅ Multi-language support (ISO 639-1)
- ✅ Artwork quality options (SD, HD, Original)

#### Organization & Output
- ✅ Kodi-compliant folder naming: `Movie Name (Year)/`
- ✅ NFO file generation with full metadata
- ✅ Poster and fanart download
- ✅ Customizable fanart vertical positioning
- ✅ Existing artwork handling (skip/overwrite/prompt)

#### Media Information
- ✅ Video codec detection (HEVC, AVC, AV1)
- ✅ Resolution detection (4K, 1080p, 720p, SD)
- ✅ HDR type detection (Dolby Vision, HDR10+, HDR10)
- ✅ Audio codec and channels detection
- ✅ MediaInfo/FFProbe integration

### 4.2 TV Shows Features

#### Scanning & Parsing
- ✅ Season/episode structure detection
- ✅ Complex filename parsing (S01E01, 1x01, etc.)
- ✅ Minimum file size filtering (default: 50MB)
- ✅ Show grouping by folder hierarchy
- ✅ NAS-optimized parallel scanning

#### Metadata Scraping
- ✅ TMDB TV show and episode data
- ✅ TVDB fallback for additional data
- ✅ Season-level metadata and artwork
- ✅ Episode-level titles and air dates
- ✅ Intelligent fuzzy matching for imprecise titles

#### Season Completion Tracking
- ✅ Expected episode counts from TMDB
- ✅ Local episode detection
- ✅ Per-season completion percentage
- ✅ Missing episode identification
- ✅ On-demand missing episode fetching

#### Organization & Output
- ✅ Kodi-compliant folder structure
- ✅ Show-level NFO (tvshow.nfo)
- ✅ Episode-level NFO files
- ✅ Season-specific artwork
- ✅ Specials handling (Season 0)

### 4.3 Cross-Feature Capabilities

#### Settings Management
- ✅ API key configuration with Keychain storage
- ✅ Language preference
- ✅ Artwork quality settings
- ✅ Concurrent download limits
- ✅ File extension filtering
- ✅ NFO naming conventions
- ✅ Theme customization (System/Light/Dark)
- ✅ Accent color options (9 colors)
- ✅ Vibrancy and transparency controls
- ✅ Sound notifications

#### Session Management
- ✅ Automatic session persistence on quit
- ✅ Resume dialog on app launch
- ✅ Progress checkpoint tracking
- ✅ 7-day session expiration

#### Error Handling
- ✅ Comprehensive error logging (500-entry limit)
- ✅ Per-item failure reasons
- ✅ Actionable error messages
- ✅ One-click retry capability
- ✅ TMDB manual search for failed items

#### Accessibility
- ✅ Full keyboard navigation
- ✅ VoiceOver support
- ✅ High contrast mode
- ✅ Reduced transparency option
- ✅ Focus ring visibility

#### Shortcuts Integration
- ✅ Scrape Movies intent
- ✅ Scan Movies intent
- ✅ Library statistics intent
- ✅ Pending items count intent
- ✅ Library export intent

### 4.4 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| ⌘1 | Movies section |
| ⌘2 | TV Shows section |
| ⌘⌥R | Recent Actions log |
| ⌘⌥E | Error Log |
| ⌘? | Help |
| ⌘⇧W | Welcome/Onboarding |
| ⌘, | Settings |

---

## 5. Architecture & Code Quality

### 5.1 Architecture Overview

Power Scraper Pro uses a **hybrid MVVM architecture** with complete separation of concerns:

```
┌─────────────────────────────────────────────────────┐
│             App Layer (Power_Scraper_ProApp)        │
├─────────────────────────────────────────────────────┤
│  UI Layer (Views/ViewModels)                        │
│  ├── Movies Feature Module                          │
│  ├── TV Shows Feature Module                        │
│  ├── Settings                                       │
│  └── Shared Components (Design System)              │
├─────────────────────────────────────────────────────┤
│  Business Logic Layer (Services & ViewModels)       │
│  ├── Scrapers (TMDB, Fanart.TV)                    │
│  ├── Scanners (File parsing)                        │
│  ├── File Operations (NFO, Renaming)               │
│  └── Session Management                            │
├─────────────────────────────────────────────────────┤
│  Core Layer (Infrastructure)                        │
│  ├── Database (SQLiteManager)                      │
│  ├── Networking (NetworkManager)                    │
│  ├── File System (FileSystemService)               │
│  └── Services (Keychain, Notifications, etc.)      │
└─────────────────────────────────────────────────────┘
```

### 5.2 Swift 6.2 Strict Concurrency

- **All data models are `Sendable`** - thread-safe by design
- **Actor isolation** - `@MainActor` for UI, custom actors for background work
- **Structured concurrency** - async/await throughout
- **Zero data races** - compiler-verified thread safety

### 5.3 Performance Optimizations

#### M4 Max Core Detection
```swift
CoreDetection:
  performanceCoreCount: 16 (M4 Max Ultra)
  efficiencyCoreCount: 16 (M4 Max Ultra)
  recommendedParallelism: 14 (P-cores with headroom)
  recommendedIOParallelism: 24 (75% of total)
  recommendedNetworkBatchSize: 10 (API limit compliant)
```

#### NAS-Optimized Scanning
- Single-pass metadata pre-fetching
- 10-20x faster than naive implementation
- Intelligent network vs. local detection

#### Network Resilience
- Circuit breaker pattern (5 failures, 60s reset)
- Exponential backoff retry policy
- TMDB rate limit compliance (40 req/10s)
- Adaptive batch sizing

### 5.4 Code Statistics

| Metric | Value |
|--------|-------|
| Swift Source Files | 265 |
| Lines of Code | ~50,000+ |
| Design System Components | 100+ |
| Feature Modules | 8 |
| Services | 15+ |
| Database Tables | 4 |
| API Integrations | 2 |
| Test Coverage | Core parsing, NFO, renaming |

---

## 6. Screenshot Catalog & Usage Guide

### 6.1 Available Screenshots (27 total)

All screenshots are located in the `screenshots/` folder with dimensions 1440×900 pixels.

#### Dashboard Images (4 files)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `DashBoard Empty Desktop.png` | Light | Empty TV Shows library | First-run/onboarding |
| `DashBoard Empty Light.png` | Light | Empty Movies library | Onboarding showcase |
| `DashBoard Empty Dark.png` | Dark | Empty Movies library | Dark mode feature |
| `DashBoard Dark.png` | Dark | Populated library with Mortal Kombat | **HERO IMAGE** |

#### Selection & Scraping Images (5 files)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `Movie Selection Dark.png` | Dark | Poster selection with 12 options | AI/multi-source feature |
| `Movie Scraping Light.png` | Light | Scraping progress (86%) | Progress tracking |
| `Movies Scraped light.png` | Light | 4 movies fully scraped | Success state |
| `TV Selection Light.png` | Light | Fanart selection for Spartacus | TV artwork feature |
| `TV Scraping light.png` | Light | TV scraping in progress | TV workflow |

#### Adjustment Images (3 files)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `Adjust FanArt.png` | Mixed | Fanart position adjustment | Customization feature |
| `Adjust FanArt Dark.png` | Dark | 12 Monkeys fanart adjustment | Dark mode variant |
| `Adjust FanArt Light.png` | Light | Matlock fanart adjustment | Light mode variant |

#### Settings Images (10 files)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `API Settings Dark.png` | Dark | TMDB/Fanart.TV API keys | Configuration |
| `API Settings Light.png` | Light | API keys with Keychain security | Security feature |
| `Appearance Setting Light.png` | Light | Theme selection | Customization |
| `Appearance Settings Dark.png` | Dark | Theme + vibrancy options | Advanced appearance |
| `Scanning Settings Dark.png` | Dark | File types and size filters | Scanning config |
| `Scanning Settings Light.png` | Light | Same as above, light theme | Settings variant |
| `Scraper Settings Dark.png` | Dark | Language, quality, concurrency | Performance settings |
| `Scrapper Settings Light.png` | Light | Same as above, light theme | Settings variant |
| `Rename Settings Dark.png` | Dark | NFO naming, artwork handling | Advanced options |
| `Rename Settings Light.png` | Light | Same as above, light theme | Settings variant |

#### Metadata & Maintenance Images (2 files)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `Clean Meta Data Light.png` | Light | Cleanup confirmation dialog | Batch operations |
| `Rescrap Meta Data light.png` | Light | Rescrape confirmation | Refresh feature |

#### Session Image (1 file)

| Filename | Theme | Content | Website Use |
|----------|-------|---------|-------------|
| `Resume Previous Dark.png` | Dark | Session resume dialog | Recovery feature |

### 6.2 Recommended Image Placement

#### Hero Section
- **Primary:** `DashBoard Dark.png` - Shows populated library with full UI
- **Alternative:** `Movies Scraped light.png` - Shows success state

#### Feature Showcase Section
1. `Movie Selection Dark.png` - Multi-source artwork selection
2. `TV Selection Light.png` - Extensive TV metadata
3. `Adjust FanArt Dark.png` - Interactive customization
4. `Movie Scraping Light.png` - Real-time progress tracking
5. `Resume Previous Dark.png` - Session recovery

#### Settings/Customization Section
- `Appearance Settings Dark.png` - Theme options
- `API Settings Light.png` - Easy configuration

#### Before/After Comparison
- Before: `DashBoard Empty Light.png`
- After: `Movies Scraped light.png`

---

## 7. Website Design Specifications

### 7.1 Design Philosophy

The website should embody **Apple's design principles** while showcasing the app's professional quality:

- **Clarity:** Content is king, minimal distractions
- **Deference:** UI gets out of the way of content
- **Depth:** Visual layers create hierarchy and meaning

### 7.2 Visual Style

#### Color Palette

```css
/* Primary Brand Colors */
--brand-primary: #5B7FFF;        /* Blue accent from app */
--brand-secondary: #8B5CF6;      /* Purple accent */
--brand-gradient: linear-gradient(135deg, #5B7FFF 0%, #8B5CF6 100%);

/* Background Colors */
--bg-light: #FFFFFF;
--bg-light-secondary: #F5F5F7;
--bg-dark: #000000;
--bg-dark-secondary: #1D1D1F;

/* Text Colors */
--text-primary-light: #1D1D1F;
--text-secondary-light: #6E6E73;
--text-primary-dark: #F5F5F7;
--text-secondary-dark: #A1A1A6;

/* Accent Colors (from app) */
--accent-blue: #007AFF;
--accent-purple: #AF52DE;
--accent-pink: #FF2D55;
--accent-red: #FF3B30;
--accent-orange: #FF9500;
--accent-yellow: #FFCC00;
--accent-green: #34C759;

/* Cinema Colors (from app design system) */
--cinema-gold: #FFD700;
--cinema-deep-blue: #1a1a2e;
--cinema-midnight: #16213e;
```

#### Typography

Use **SF Pro** (Apple's system font) for authentic Apple feel:

```css
/* Font Family */
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;

/* Font Scales */
--font-hero: 96px;          /* Main headline */
--font-headline: 64px;      /* Section headlines */
--font-subheadline: 40px;   /* Subsection titles */
--font-title: 28px;         /* Card titles */
--font-body: 21px;          /* Body text */
--font-caption: 17px;       /* Captions */
--font-small: 14px;         /* Small text */

/* Font Weights */
--weight-bold: 700;
--weight-semibold: 600;
--weight-medium: 500;
--weight-regular: 400;
```

#### Spacing System

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 80px;
--space-xxl: 120px;

/* Section Padding */
--section-padding: 120px 0;
--container-max-width: 1200px;
```

### 7.3 Component Specifications

#### Buttons

**Primary CTA Button:**
```css
.btn-primary {
  background: linear-gradient(135deg, #5B7FFF 0%, #8B5CF6 100%);
  color: white;
  padding: 18px 48px;
  border-radius: 980px; /* Pill shape */
  font-size: 21px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 32px rgba(91, 127, 255, 0.3);
}
```

**Secondary Button:**
```css
.btn-secondary {
  background: transparent;
  color: #5B7FFF;
  padding: 18px 48px;
  border-radius: 980px;
  font-size: 21px;
  font-weight: 600;
  border: 2px solid #5B7FFF;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: #5B7FFF;
  color: white;
}
```

#### Cards

```css
.feature-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 48px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

/* Dark mode variant */
.dark .feature-card {
  background: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

#### Screenshot Frames

```css
.screenshot-frame {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.screenshot-frame img {
  width: 100%;
  height: auto;
  display: block;
}
```

### 7.4 Animation Guidelines

```css
/* Smooth transitions */
--transition-fast: 0.15s ease;
--transition-medium: 0.3s ease;
--transition-slow: 0.5s ease;

/* Fade in on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-on-scroll {
  animation: fadeInUp 0.6s ease forwards;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}
```

---

## 8. Content Sections & Copy

### 8.1 Navigation

```
Logo | Features | Screenshots | Requirements | Download
```

### 8.2 Hero Section

**Headline:**
> Power Scraper Pro

**Subheadline:**
> The professional media library manager for Mac. Automatically organize, scrape metadata, and rename your movies and TV shows into Kodi-compliant formats.

**CTA Buttons:**
- Primary: "Download Free" → Links to download
- Secondary: "View on GitHub" → Links to GitHub repo

**Hero Image:**
- Use `DashBoard Dark.png` as the main hero screenshot
- Frame it in a macOS window chrome for authenticity

### 8.3 Feature Highlights (Icon + Text Cards)

#### Feature 1: Intelligent Scanning
**Icon:** SF Symbol `folder.badge.gearshape`
**Title:** Intelligent Scanning
**Description:** Scans your media folders and intelligently parses even the most complex torrent filenames. Extracts titles, years, and quality information automatically.

#### Feature 2: Multi-Source Metadata
**Icon:** SF Symbol `globe`
**Title:** Multi-Source Metadata
**Description:** Fetches comprehensive metadata from TMDB and Fanart.TV. Get ratings, cast, crew, overviews, and multiple artwork options for every title.

#### Feature 3: Kodi-Compliant Output
**Icon:** SF Symbol `folder.badge.plus`
**Title:** Kodi-Compliant Output
**Description:** Generates perfectly formatted NFO files and organizes your library into the exact folder structure Kodi expects. Works out of the box.

#### Feature 4: M4 Max Optimized
**Icon:** SF Symbol `cpu`
**Title:** Apple Silicon Optimized
**Description:** Built from the ground up for Apple Silicon. Dynamic core detection maximizes performance on M4 Max while remaining compatible with all Macs.

#### Feature 5: NAS-Aware
**Icon:** SF Symbol `externaldrive.connected.to.line.below`
**Title:** NAS-Optimized Scanning
**Description:** 10-20x faster scanning on network storage. Single-pass metadata fetching eliminates the overhead of traditional file-by-file scanning.

#### Feature 6: Session Recovery
**Icon:** SF Symbol `arrow.clockwise`
**Title:** Resume From Quit
**Description:** Long scraping job? No problem. If you quit the app or it crashes, Power Scraper Pro remembers exactly where you left off.

### 8.4 Screenshots Showcase Section

**Section Title:**
> See It In Action

**Gallery Layout:**
Horizontal scroll or grid of 4-6 key screenshots with captions:

1. `DashBoard Dark.png` - "Clean, professional interface"
2. `Movie Selection Dark.png` - "Choose from multiple artwork sources"
3. `TV Selection Light.png` - "Extensive TV show metadata"
4. `Adjust FanArt Dark.png` - "Fine-tune artwork positioning"
5. `Movie Scraping Light.png` - "Real-time progress tracking"
6. `Resume Previous Dark.png` - "Never lose your progress"

### 8.5 Detailed Features Section

#### Movies Features
**Title:** Movies
**Subtitle:** From chaos to cinema

**Feature List:**
- Parses complex torrent filenames
- Fetches metadata from TMDB
- Downloads posters and fanart
- Generates Kodi-compliant NFO files
- Detects video codec, resolution, HDR
- Identifies audio format and channels
- Renames to `Movie Name (Year)/` structure

**Screenshot:** `Movies Scraped light.png`

#### TV Shows Features
**Title:** TV Shows
**Subtitle:** Every episode, perfectly organized

**Feature List:**
- Detects season and episode numbers
- Fetches show, season, and episode data
- Tracks season completion percentage
- Identifies missing episodes
- Creates tvshow.nfo and episode.nfo
- Downloads season-specific artwork
- Supports specials (Season 0)

**Screenshot:** `TV Selection Light.png`

### 8.6 Settings/Customization Section

**Title:**
> Your Preferences, Your Way

**Feature Cards:**

1. **Theme Options**
   - System, Light, and Dark modes
   - 9 accent color choices
   - Vibrancy and transparency controls
   - Screenshot: `Appearance Settings Dark.png`

2. **Scraping Control**
   - Language preferences
   - Artwork quality (SD/HD/Original)
   - Concurrent download limits
   - Screenshot: `Scraper Settings Dark.png`

3. **File Management**
   - File extension filtering
   - Minimum size thresholds
   - NFO naming conventions
   - Screenshot: `Rename Settings Dark.png`

### 8.7 Technical Specifications Section

**Title:**
> Built for Professionals

**Specs Grid:**

| Category | Specification |
|----------|---------------|
| Platform | macOS 14 Sonoma or later |
| Optimized For | macOS 15 Sequoia |
| Processor | Apple Silicon (M1/M2/M3/M4) |
| Architecture | Native ARM64 |
| Swift Version | 6.2 with strict concurrency |
| Framework | SwiftUI + AppKit |
| Database | SQLite |
| Concurrency | Zero data races guaranteed |

**Code Quality Badges:**
- Swift 6.2 Strict Concurrency
- 265 Source Files
- 50,000+ Lines of Code
- MVVM Architecture
- Protocol-Based Design

### 8.8 Media Information Detection

**Title:**
> Know Your Media

**Detection Grid with Icons:**

| Type | Supported |
|------|-----------|
| Video Codecs | HEVC, AVC, AV1 |
| Resolutions | 4K, 1080p, 720p, SD |
| HDR | Dolby Vision, HDR10+, HDR10 |
| Audio | TrueHD Atmos, EAC3, AAC |
| Channels | 7.1, 5.1, Stereo |

### 8.9 Download Section

**Title:**
> Download Power Scraper Pro

**Subtitle:**
> Free and open source. Built with ❤️ for the Mac.

**Download Button:**
Large primary CTA button linking to:
- Direct .dmg download, OR
- GitHub releases page

**Requirements:**
- macOS 14.0 Sonoma or later
- Apple Silicon recommended
- Internet connection for metadata

**API Keys Note:**
> Requires free API keys from TMDB and optionally Fanart.TV. Links provided in app.

### 8.10 Footer

**Links:**
- GitHub Repository
- Report Issues
- TMDB Attribution
- Fanart.TV Attribution

**Legal:**
> Power Scraper Pro is not affiliated with Kodi, TMDB, or Fanart.TV.
> Movie and TV show metadata provided by TMDB and Fanart.TV.

**Copyright:**
> © 2025 John Chezik. All rights reserved.

---

## 9. Visual Design System

### 9.1 SF Symbols to Use

The website should use SF Symbols (via SVG or web font equivalent) for icons:

| Feature | SF Symbol Name |
|---------|----------------|
| Movies | `film` |
| TV Shows | `tv` |
| Scanning | `folder.badge.gearshape` |
| Metadata | `globe` |
| Kodi Output | `folder.badge.plus` |
| M4 Optimized | `cpu` |
| NAS Support | `externaldrive.connected.to.line.below` |
| Session Recovery | `arrow.clockwise` |
| Settings | `gearshape` |
| Download | `arrow.down.circle` |
| Dark Mode | `moon.fill` |
| Light Mode | `sun.max.fill` |
| Video | `play.rectangle` |
| Audio | `speaker.wave.3` |
| 4K | `4k.tv` |
| HDR | `sparkles` |
| Keyboard | `keyboard` |
| Accessibility | `accessibility` |
| Checkmark | `checkmark.circle.fill` |
| Star Rating | `star.fill` |

### 9.2 macOS Window Chrome

For screenshot presentation, wrap screenshots in macOS window chrome:

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
    <img src="screenshot.png" alt="Screenshot description">
  </div>
</div>
```

### 9.3 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 767px) {
  --font-hero: 48px;
  --font-headline: 36px;
  --section-padding: 60px 0;
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  --font-hero: 64px;
  --font-headline: 48px;
  --section-padding: 80px 0;
}

/* Desktop */
@media (min-width: 1024px) {
  --font-hero: 96px;
  --font-headline: 64px;
  --section-padding: 120px 0;
}
```

---

## 10. Implementation Requirements

### 10.1 Single HTML File Structure

The website should be a single, self-contained HTML file with:
- Inline CSS in `<style>` tag
- Inline JavaScript in `<script>` tag (if needed)
- External images referenced from screenshots folder

### 10.2 Required Sections (in order)

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Large headline, subheadline, CTA buttons, hero screenshot
3. **Feature Highlights** - 6 icon cards in 2 rows of 3
4. **Screenshots Gallery** - Horizontal scroll or grid of 6 screenshots
5. **Movies Features** - Detailed features with screenshot
6. **TV Shows Features** - Detailed features with screenshot
7. **Settings/Customization** - 3 settings cards with screenshots
8. **Technical Specs** - Specifications table
9. **Media Info Detection** - Codec/resolution table
10. **Download CTA** - Large download section
11. **Footer** - Links, attribution, copyright

### 10.3 Image Handling

**Screenshot References:**
All screenshots should be referenced from a relative `screenshots/` folder:
```html
<img src="screenshots/DashBoard Dark.png" alt="Power Scraper Pro interface">
```

**Lazy Loading:**
```html
<img loading="lazy" src="..." alt="...">
```

### 10.4 Dark Mode Support

The website should support both light and dark modes:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #000000;
    --text-primary: #F5F5F7;
  }
}
```

### 10.5 Accessibility Requirements

- All images must have descriptive `alt` text
- Color contrast must meet WCAG AA standards
- Focus states must be visible
- Navigation must be keyboard-accessible
- Semantic HTML structure

### 10.6 Performance Optimization

- Minimize CSS (no unused styles)
- Defer non-critical JavaScript
- Lazy load images
- Use modern image formats where possible
- Keep total page size under 5MB

### 10.7 File Deliverables

1. `index.html` - Complete website
2. `screenshots/` folder - All 27 screenshots (already exists)
3. Optional: `favicon.ico` if you have an app icon

---

## Appendix A: Complete Source File List

### Core App Files
- `Power_Scraper_ProApp.swift` - Main app entry
- `App/MainView.swift` - Three-column layout
- `App/SidebarView.swift` - Navigation sidebar

### Design System (17 files)
- `DesignSystem/PSColors.swift` - Color tokens (500+ lines)
- `DesignSystem/PSTypography.swift` - Font system
- `DesignSystem/PSSpacing.swift` - Spacing scale
- `DesignSystem/PSLayout.swift` - Layout utilities
- `DesignSystem/PSElevation.swift` - Shadow system
- `DesignSystem/PSMotion.swift` - Animation system
- `DesignSystem/PSIcons.swift` - Icon definitions
- `DesignSystem/Components/PSButton.swift`
- `DesignSystem/Components/PSCard.swift`
- `DesignSystem/Components/PSTextField.swift`
- `DesignSystem/Components/PSPill.swift`
- `DesignSystem/Components/PSRatingBadge.swift`
- `DesignSystem/Components/PSGlassContainer.swift`
- `DesignSystem/Components/MetalImageRenderer.swift`
- `DesignSystem/Components/ValidatedAsyncImage.swift`
- `DesignSystem/Components/FanartPositionAdjustmentView.swift`
- `DesignSystem/Components/UnifiedFloatingProgressOverlay.swift`

### Movies Feature (40+ files)
- Complete scanning, parsing, scraping, renaming
- NFO generation with full Kodi schema
- Media info extraction
- UI views and components

### TV Shows Feature (50+ files)
- Episode scanning and parsing
- Season completion tracking
- Duplicate detection
- Multi-source matching

### Settings Feature (12 files)
- All settings views and view models
- Keychain integration
- Theme management

### Services (15+ files)
- Database (SQLite)
- Networking (resilient client)
- File system operations
- Session management
- Error logging

---

## Appendix B: NFO File Example

```xml
<?xml version="1.0" encoding="UTF-8"?>
<movie>
  <title>The Matrix</title>
  <originaltitle>The Matrix</originaltitle>
  <sorttitle>Matrix, The</sorttitle>
  <year>1999</year>
  <plot>A computer hacker learns about the true nature of reality...</plot>
  <tagline>Welcome to the Real World</tagline>
  <runtime>136</runtime>
  <mpaa>R</mpaa>
  <uniqueid type="tmdb">603</uniqueid>
  <uniqueid type="imdb">tt0133093</uniqueid>
  <genre>Action</genre>
  <genre>Science Fiction</genre>
  <director>Lana Wachowski</director>
  <director>Lilly Wachowski</director>
  <studio>Warner Bros. Pictures</studio>
  <premiered>1999-03-30</premiered>
  <ratings>
    <rating name="tmdb" max="10">8.2</rating>
  </ratings>
  <actor>
    <name>Keanu Reeves</name>
    <role>Thomas A. Anderson / Neo</role>
    <thumb>https://image.tmdb.org/...</thumb>
  </actor>
  <!-- Additional cast -->
</movie>
```

---

## Appendix C: Database Schema

```sql
-- Movies Table
CREATE TABLE movies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tmdb_id INTEGER,
  imdb_id TEXT,
  title TEXT NOT NULL,
  year INTEGER,
  original_filename TEXT,
  current_filename TEXT,
  folder_path TEXT,
  poster_path TEXT,
  fanart_path TEXT,
  fanart_offset_y REAL DEFAULT 0.5,
  nfo_path TEXT,
  scrape_status TEXT DEFAULT 'pending',
  overview TEXT,
  rating REAL,
  runtime INTEGER,
  genres TEXT,
  video_codec TEXT,
  video_resolution TEXT,
  video_hdr_type TEXT,
  audio_codec TEXT,
  audio_channels INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- TV Shows Table
CREATE TABLE tv_shows (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tmdb_id INTEGER,
  tvdb_id INTEGER,
  title TEXT NOT NULL,
  year INTEGER,
  folder_path TEXT,
  poster_path TEXT,
  fanart_path TEXT,
  expected_season_count INTEGER,
  expected_episode_count INTEGER,
  scrape_status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Episodes Table
CREATE TABLE episodes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tv_show_id INTEGER NOT NULL,
  season_number INTEGER NOT NULL,
  episode_number INTEGER NOT NULL,
  title TEXT,
  original_filename TEXT,
  current_filename TEXT,
  file_path TEXT,
  nfo_path TEXT,
  scrape_status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (tv_show_id) REFERENCES tv_shows(id)
);
```

---

**End of PRD Document**

*This document contains everything needed to build a beautiful, Apple-inspired marketing website for Power Scraper Pro. Use it alongside the screenshots folder to create an award-worthy single-page HTML website.*
