# Power Scraper Pro - Complete Feature Documentation

## For Web Designer Reference

**Document Version:** 1.0
**Application Version:** 1.0.0
**Platform:** macOS 15+ (Sequoia)
**Target Hardware:** Optimized for Apple Silicon (M4 Max)

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Core Application Overview](#core-application-overview)
3. [Movies Feature Set](#movies-feature-set)
4. [TV Shows Feature Set](#tv-shows-feature-set)
5. [Scraping & Metadata Engine](#scraping--metadata-engine)
6. [Design System & Visual Identity](#design-system--visual-identity)
7. [Media Technical Information Display](#media-technical-information-display)
8. [Background Processing & Automation](#background-processing--automation)
9. [Watch Folders & Auto-Scan](#watch-folders--auto-scan)
10. [Siri Shortcuts Integration](#siri-shortcuts-integration)
11. [Cloud Sync & Settings](#cloud-sync--settings)
12. [Database & Storage](#database--storage)
13. [Network Resilience](#network-resilience)
14. [GPU & Performance Optimization](#gpu--performance-optimization)
15. [Accessibility Features](#accessibility-features)
16. [Notifications System](#notifications-system)
17. [Keyboard Shortcuts](#keyboard-shortcuts)
18. [Error Handling & Recovery](#error-handling--recovery)
19. [File Organization & Naming](#file-organization--naming)
20. [Technical Specifications](#technical-specifications)

---

## Executive Summary

**Power Scraper Pro** is a professional-grade macOS application designed for media enthusiasts and home theater users to organize, catalog, and enrich their movie and TV show libraries with comprehensive metadata from industry-standard sources. The application follows Kodi naming conventions and generates NFO files for seamless integration with media center software.

### Key Value Propositions

- **Automatic Metadata Enrichment** - Fetches rich metadata from TMDB, Fanart.TV, and TVDB
- **Kodi-Compatible Output** - Generates NFO files and organizes files following Kodi standards
- **Professional UI Design** - Cinema-quality aesthetics inspired by Apple TV+ and streaming services
- **Apple Silicon Optimized** - GPU-accelerated processing leveraging M4 Max capabilities
- **Background Processing** - Large library scraping without blocking the UI
- **Watch Folder Automation** - Automatic detection and processing of new media files
- **Siri Shortcuts Integration** - Automation through Apple's Shortcuts app

---

## Core Application Overview

### What It Does

Power Scraper Pro transforms disorganized movie and TV show folders into a professionally organized media library by:

1. **Scanning** directories to discover video files
2. **Parsing** filenames to extract title, year, season/episode information
3. **Searching** online databases (TMDB, TVDB, Fanart.TV) for metadata
4. **Downloading** high-quality artwork (posters, fanart, season images)
5. **Generating** Kodi-compliant NFO files with complete metadata
6. **Renaming** files and folders to proper Kodi naming format
7. **Extracting** media technical information (resolution, codec, HDR type, audio format)
8. **Organizing** the database for quick browsing and management

### Supported Media Types

| Media Type | Supported Formats |
|------------|-------------------|
| **Movies** | .mkv, .mp4, .avi, .m4v, .mov |
| **TV Shows** | Same formats, with season/episode detection |

### Minimum File Sizes (Configurable)

- **Movies:** 300 MB default (filters out trailers, samples)
- **TV Shows:** Configurable per-scan

---

## Movies Feature Set

### Movie Scanning

- **Folder Selection** - Browse to select movie folders
- **Drag & Drop** - Drop folders directly onto the application
- **Recursive Scanning** - Scans all subfolders for video files
- **Filename Parsing** - Intelligent extraction of:
  - Movie title
  - Release year
  - Video quality/source (e.g., BluRay, WEB-DL, 4K UHD)
  - Edition information (e.g., Director's Cut, Extended)

### Movie Metadata Enrichment

For each movie, the scraper fetches and stores:

| Category | Data Points |
|----------|-------------|
| **Basic Info** | Title, Original Title, Year, Runtime, Tagline |
| **Identifiers** | TMDB ID, IMDb ID |
| **Description** | Plot overview/synopsis |
| **Ratings** | TMDB rating (0-10 scale) |
| **Genres** | All applicable genres (Action, Sci-Fi, Drama, etc.) |
| **Cast & Crew** | Directors, writers, actors (stored in NFO) |
| **Certification** | Age rating (PG-13, R, etc.) |
| **Production** | Studios, production companies |

### Movie Artwork Downloads

| Artwork Type | Filename | Resolution |
|--------------|----------|------------|
| **Poster** | poster.jpg | Original quality (typically 500x750 or higher) |
| **Fanart** | fanart.jpg | Original quality (1920x1080 or higher) |

### Movie Display Modes

1. **Grid View**
   - Poster thumbnails in responsive grid
   - GPU-accelerated thumbnail generation
   - Hover effects with media info badges
   - Selection indicators for batch operations

2. **List View**
   - Compact list with poster thumbnails
   - Title, year, and status information
   - Quick access to details

### Movie Detail View

A cinematic detail presentation featuring:

- **Hero Section** - Full-width fanart background with adjustable vertical positioning
- **Poster Display** - High-quality poster with click-to-change functionality
- **Metadata Display** - Title, year, runtime, rating, genres
- **Media Info Badges** - Resolution, HDR type, audio codec, channels
- **Plot Synopsis** - Full movie description
- **Action Buttons** - Scrape, Show in Finder, Delete
- **Image Selection** - Browse and choose from multiple poster/fanart options

### Movie Fanart Position Adjustment

Users can adjust the vertical position of fanart in the hero display:
- Interactive slider (0% top to 100% bottom)
- Live preview during adjustment
- Saved per-movie to database

### Movie Rename & Rescrape

For incorrectly identified movies:
- Edit title and year manually
- Search TMDB with corrected information
- Re-download all metadata and artwork
- Rename folder to proper Kodi format

### Movie Batch Operations

- **Batch Scrape** - Scrape multiple pending movies
- **Batch Delete** - Remove multiple movies from database
- **Multi-Select** - Command-click and Shift-click selection
- **Clean Metadata** - Remove NFO, posters, fanart (keep video files)
- **Rescrape All** - Force refresh all metadata

---

## TV Shows Feature Set

### TV Show Scanning

- **Folder Structure Detection** - Recognizes various folder organizations
- **Season Folder Support** - Automatic season detection
- **Episode Parsing** - Extracts season/episode numbers from filenames
- **Multi-Episode Files** - Supports files like "S04E10E11" (double episodes)

### Supported Filename Patterns

The parser recognizes multiple naming conventions:

```
Show Name S01E01.mkv
Show Name - S01E01 - Episode Title.mkv
Show.Name.1x01.Episode.Title.mkv
Show Name 101.mkv
```

### TV Show Metadata Enrichment

| Category | Data Points |
|----------|-------------|
| **Show Info** | Title, Original Title, Year, Status, Network |
| **Identifiers** | TMDB ID, TVDB ID, IMDb ID |
| **Description** | Show overview/synopsis |
| **Ratings** | TMDB rating |
| **Genres** | All applicable genres |
| **Season Info** | Expected season count, episode count per season |
| **Episode Info** | Per-episode title, synopsis, air date, rating |

### TV Show Artwork

| Artwork Type | Location | Description |
|--------------|----------|-------------|
| **Show Poster** | poster.jpg | Main series poster |
| **Show Fanart** | fanart.jpg | Series background art |
| **Season Posters** | Season XX/season-poster.jpg | Per-season posters |
| **Episode Thumbnails** | Generated per-episode | Episode-specific artwork |

### TV Show NFO Files

The application generates multiple NFO files:

1. **tvshow.nfo** - Main series metadata
2. **Episode NFO files** - Per-episode metadata (e.g., S01E01.nfo)

### Season Completion Tracking

A unique feature that shows collection completeness:

- **Expected Episodes** - Fetched from TMDB for each season
- **Local Episodes** - Count of episodes in user's library
- **Completion Percentage** - Visual indicator of collection status
- **Missing Episodes** - Identification of gaps in collection

### TV Show Duplicate Detection

The application detects and helps resolve duplicate episodes:

- **Filename Normalization** - Identifies duplicate content with different names
- **Resolution Comparison** - Compare video quality of duplicates
- **File Size Comparison** - Compare file sizes
- **User Resolution** - Choose which version to keep

### Multi-Episode File Support

For files containing multiple episodes (e.g., two-part finales):

- Detects patterns like S04E10E11, S04E10-E11
- Fetches metadata for primary episode
- Generates appropriate NFO file
- Renames following Kodi multi-episode convention

---

## Scraping & Metadata Engine

### Data Sources

| Source | Purpose | Data Provided |
|--------|---------|---------------|
| **TMDB (The Movie Database)** | Primary metadata | Titles, plots, ratings, cast, crew, basic artwork |
| **Fanart.TV** | Enhanced artwork | Higher quality posters, fanart, logos, clearart |
| **TVDB (The TV Database)** | TV show metadata | Episode listings, air dates, episode-specific data |

### API Integration

- **Rate Limiting** - Intelligent throttling to respect API limits
- **Retry Policy** - Automatic retry with exponential backoff
- **Circuit Breaker** - Prevents cascading failures when APIs are down
- **Parallel Fetching** - M4 Max optimized concurrent requests

### Scraping Progress Tracking

Real-time progress information:

- **Current Item** - Title currently being processed
- **Step Indicator** - Current operation (Searching, Fetching, Downloading, etc.)
- **Progress Bar** - Percentage complete
- **Success/Failure Counts** - Running tally of results
- **Elapsed Time** - Duration of scraping session
- **Estimated Time Remaining** - Calculated based on average speed

### Scraping Steps (Movies)

1. Searching TMDB for match
2. Fetching detailed metadata
3. Renaming folder to Kodi format
4. Downloading poster
5. Downloading fanart
6. Extracting media info (resolution, codec, HDR, audio)
7. Generating NFO file
8. Updating database

### Scraping Steps (TV Shows)

1. Searching TMDB for show match
2. Fetching show metadata with season info
3. Organizing show folder
4. Downloading show artwork
5. Generating tvshow.nfo
6. Pre-fetching episode metadata (parallel)
7. Processing each episode sequentially:
   - Organizing into season folder
   - Renaming to Kodi format
   - Generating episode NFO
8. Updating database with completion info

### Force Overwrite Mode

When enabled:
- Deletes ALL existing metadata files before scraping
- Preserves video files and subtitle files
- Ensures completely fresh metadata
- Useful for re-scraping with updated artwork

### Cooperative Cancellation

- Cancel scraping at any time
- Safe cancellation points between operations
- No data corruption on cancel
- Immediate UI response

---

## Design System & Visual Identity

### Color Palette

The application uses a sophisticated cinema-inspired color system:

| Color Name | Purpose | Example Use |
|------------|---------|-------------|
| **Cinema Blue** | Primary accent | Active elements, buttons |
| **Cinema Gold** | Ratings, premium | Star ratings, HDR badges |
| **Cinema Purple** | Special highlights | Dolby Vision badges |
| **Success Green** | Completed states | Scraped status |
| **Warning Orange** | Pending states | Pending scrape status |
| **Error Red** | Error states | Failed scrapes |

### Typography

- **SF Pro** - Primary UI font (native macOS)
- **Rounded variants** - For numeric displays
- **Monospaced** - For technical information
- **Size hierarchy** - 9 defined sizes from Caption to Headline

### Spacing System

Consistent spacing tokens:
- `xs` (4pt) - Minimal spacing
- `sm` (8pt) - Small spacing
- `md` (12pt) - Medium spacing
- `lg` (16pt) - Large spacing
- `xl` (24pt) - Extra large spacing
- `xxl` (32pt) - Maximum spacing

### Visual Materials

- **Glass Effects** - macOS vibrancy materials (thin, regular, thick)
- **Blur Effects** - Backdrop blur for overlays
- **Gradients** - Subtle gradients for depth
- **Shadows** - Multiple shadow levels (subtle, medium, strong)

### Card Design

- **Poster Cards** - 2:3 aspect ratio with rounded corners
- **Hover Effects** - Subtle brightness increase, scale animation
- **Selection Indicators** - Checkmark overlay
- **Badge Overlays** - Media info badges on poster

### Animation System

- **Spring Animations** - Natural feeling transitions
- **Scale Effects** - Subtle zoom on interaction
- **Opacity Transitions** - Smooth fade effects
- **Matched Geometry** - Seamless view transitions

---

## Media Technical Information Display

### Video Information Badges

| Badge | Description | Example Display |
|-------|-------------|-----------------|
| **Resolution** | Video resolution | "4K", "1080p", "720p" |
| **Codec** | Video codec | "H.265", "H.264", "AV1" |
| **Aspect Ratio** | Display ratio | "2.39", "1.78" |

### HDR Format Badges

| Format | Badge Display | Color |
|--------|--------------|-------|
| **Dolby Vision** | "DV" or "Dolby Vision" | Purple gradient |
| **HDR10+** | "HDR10+" | Gold |
| **HDR10** | "HDR10" | Gold |
| **HLG** | "HLG" | Gold |

### Audio Information Badges

| Format | Badge Display | Color |
|--------|--------------|-------|
| **Dolby TrueHD Atmos** | "TrueHD Atmos" | Blue gradient |
| **Dolby Atmos (E-AC-3)** | "Dolby Atmos" | Blue |
| **Dolby Digital Plus** | "Dolby Digital+" | Blue |
| **DTS-HD Master Audio** | "DTS-HD MA" | Blue |
| **DTS:X** | "DTS:X" | Blue |

### Audio Channels

- 1.0 (Mono)
- 2.0 (Stereo)
- 5.1 (Surround)
- 7.1 (Extended Surround)

### Rating Display

- **Star Icon** with numeric value (0.0-10.0)
- **Color coding:**
  - Gold (8.0+) - Excellent
  - Green (6.0-7.9) - Good
  - Orange (4.0-5.9) - Average
  - Red (<4.0) - Poor

### Grid View Badge Layout

On poster cards, badges appear as compact overlays:
- Top-left: Status badge (Pending/Scraped/Error)
- Bottom-left: Resolution + HDR badges
- Bottom-right: Rating badge (for scraped items)

---

## Background Processing & Automation

### Background Scraping Service

For large libraries (100+ items), background processing allows:

- **Non-blocking UI** - Continue browsing while scraping
- **Progress Notifications** - System notifications for updates
- **Dock Badge** - Shows remaining item count
- **Memory Pressure Awareness** - Pauses when system memory is low

### Background Scrape Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Enable Background Mode** | Allow background processing | On |
| **Auto-Suggest Threshold** | Items count to suggest background | 50 |
| **Notify on Start** | Notification when scraping begins | On |
| **Notify on Progress** | Periodic progress notifications | On |
| **Progress Interval** | Items between progress notifications | 25 |
| **Notify on Completion** | Notification when done | On |
| **Show Dock Badge** | Display remaining count on dock | On |
| **Play Sound on Completion** | Audio feedback when done | On |

### Memory Pressure Integration

The application monitors system memory and responds:

| Pressure Level | Response |
|----------------|----------|
| **Normal** | Full speed operation |
| **Warning** | Reduces cache sizes, slows processing |
| **Critical** | Pauses operations, clears caches |

---

## Watch Folders & Auto-Scan

### Watch Folder Feature

Automatically monitor folders for new media:

- **Multiple Folders** - Watch different folders for movies vs. TV shows
- **Media Type Assignment** - Specify if folder contains movies or TV shows
- **Access Validation** - Verifies folder permissions
- **Event-Based Detection** - Uses macOS file system events

### Watch Folder Settings

| Setting | Description |
|---------|-------------|
| **Enable Watch Folders** | Master toggle for automation |
| **Folder Path** | Full path to monitored folder |
| **Media Type** | Movies or TV Shows |
| **Active Status** | Enable/disable individual folders |

### Auto-Scan Behavior

When new files are detected:
1. Notification sent to user
2. Files scanned and added to database
3. Option to auto-scrape new items

---

## Siri Shortcuts Integration

### Available Shortcuts

| Shortcut | Description | Phrases |
|----------|-------------|---------|
| **Get Library Stats** | Returns counts of movies/shows | "Get library stats", "How many movies" |
| **Scrape Movies** | Scrapes pending movies | "Scrape pending movies", "Update movies" |
| **Get Pending Items** | Shows unscraped count | "Show unscraped items", "How many pending" |
| **Export Library Data** | Exports library to file | "Export library", "Backup data" |
| **Scan Movies Directory** | Scans a folder for movies | "Scan movies directory" |

### Shortcut Parameters

**Scan Movies Directory:**
- Directory Path (required) - Full path to scan
- Minimum File Size (optional) - Default 300 MB

### Shortcut Output

Returns formatted text with results:
```
📊 Library Statistics

Movies:
• Total: 150
• Scraped: 142
• Pending: 8
• Errors: 0

TV Shows:
• Total: 45
• Scraped: 43
• Pending: 2
• Errors: 0
```

---

## Cloud Sync & Settings

### iCloud Settings Sync

Synchronize settings across devices via iCloud Key-Value Store:

- **Automatic Sync** - Settings sync when changed
- **Cross-Device** - Share settings between Macs
- **Conflict Resolution** - Last-write-wins strategy
- **Offline Support** - Queues changes when offline

### iCloud Sync Status

| Status | Description |
|--------|-------------|
| **Idle** | No sync in progress |
| **Syncing** | Currently syncing |
| **Synced** | Last sync timestamp shown |
| **Unavailable** | Not signed into iCloud |
| **Error** | Sync failed with details |

### Sync Operations

- **Upload Settings** - Push current settings to cloud
- **Download Settings** - Pull settings from cloud
- **Force Sync** - Manually trigger synchronization

---

## Database & Storage

### SQLite Database

- **Location:** ~/Library/Application Support/PowerScraperPro/media.db
- **Mode:** WAL (Write-Ahead Logging) for concurrency
- **Optimization:** Configured for M4 Max performance

### Database Schema

**Movies Table:**
- Basic: id, tmdb_id, imdb_id, title, year
- Files: original_filename, current_filename, folder_path
- Artwork: poster_path, fanart_path, fanart_offset_y, nfo_path
- Metadata: overview, rating, runtime, genres, file_size
- Media Info: video_codec, video_resolution, video_width, video_height
- Video: video_aspect_ratio, video_hdr_type
- Audio: audio_codec, audio_channels, audio_language
- Status: scrape_status, last_scraped_at
- Timestamps: created_at, updated_at

**TV Shows Table:**
- Similar structure plus:
- Completion: expected_season_count, expected_episode_count
- Refresh: tmdb_last_refreshed

### Database Maintenance

| Operation | Description |
|-----------|-------------|
| **Integrity Check** | Verifies database structure |
| **Foreign Key Check** | Validates relationships |
| **Vacuum** | Reclaims unused space |
| **Incremental Vacuum** | Gradual space reclamation |

### Automatic Backup

- **Pre-Migration Backup** - Before any schema changes
- **Manual Backup** - User-triggered backup
- **Restore** - Restore from any backup file

### Graceful Degradation

If disk storage fails:
- Falls back to in-memory database
- User notified of degraded mode
- Data won't persist between launches
- Banner displayed in UI

---

## Network Resilience

### Retry Policy

Automatic retry for transient failures:

| Retry Attempt | Delay |
|---------------|-------|
| 1st retry | 1 second |
| 2nd retry | 2 seconds |
| 3rd retry | 4 seconds |
| Maximum | 3 retries |

Uses exponential backoff with jitter.

### Circuit Breaker Pattern

Prevents cascading failures:

| State | Behavior |
|-------|----------|
| **Closed** | Normal operation, requests flow |
| **Open** | Requests fail immediately, API recovering |
| **Half-Open** | Testing with single request |

**Configuration:**
- Failure threshold: 5 consecutive failures
- Reset timeout: 30 seconds
- Success threshold: 2 successes to close

### Rate Limiting

Respects API limits:

| Service | Rate Limit |
|---------|------------|
| **TMDB** | Configurable requests per second |
| **Fanart.TV** | Configurable requests per second |
| **TVDB** | Configurable requests per second |

### Service Health Monitoring

Settings panel shows:
- Service status (Healthy/Unavailable/Testing)
- Failure counts
- Time until retry for open circuits
- Manual reset option

---

## GPU & Performance Optimization

### Metal GPU Acceleration

Leverages Apple Silicon GPU for:

- **Thumbnail Generation** - Fast image resizing
- **Image Sharpening** - Enhanced display quality
- **Lanczos Scaling** - High-quality resize algorithm
- **Bilinear Scaling** - Fast preview generation

### Custom Metal Shaders

Optimized for M4 Max 40-core GPU:
- Zero-copy unified memory operations
- Batch processing for multiple images
- Automatic fallback to CoreImage if shaders unavailable

### LRU Thumbnail Cache

Intelligent caching system:

| System RAM | Cache Size | Reduced Size |
|------------|------------|--------------|
| < 16 GB | 250 items | 100 items |
| 16-32 GB | 500 items | 125 items |
| 32-64 GB | 1000 items | 250 items |
| 64-96 GB | 2000 items | 500 items |
| 128+ GB | 4000 items | 1000 items |

### Processing Mode Selection

| Mode | Description |
|------|-------------|
| **Metal Shader** | Fastest, custom compute shaders |
| **CoreImage** | High quality, Metal backend |
| **Automatic** | Selects based on image size |

### Parallel Metadata Fetching

For TV shows, episode metadata is pre-fetched in parallel:
- Leverages all CPU cores for network I/O
- File operations remain sequential for safety
- Dramatically reduces total processing time

---

## Accessibility Features

### VoiceOver Support

- All interactive elements have accessibility labels
- Meaningful descriptions for images
- Navigation hints for complex views
- Status announcements for operations

### Keyboard Navigation

- Full Tab-key navigation
- Focus rings for focused elements
- Keyboard shortcuts for common actions

### High Contrast Support

Automatic adaptation for:
- Increased contrast setting
- Stronger borders and separators
- More visible focus indicators

### Reduce Motion

Respects system preference for reduced animation.

### Focus State Tokens

| Token | Purpose |
|-------|---------|
| `focusRing` | Primary focus indicator |
| `focusRingSubtle` | Reduced opacity focus |
| `focusRingGlow` | Enhanced visibility glow |
| `focusRingHighContrast` | Accessibility mode focus |

---

## Notifications System

### Notification Types

| Type | Sound | Purpose |
|------|-------|---------|
| **Scraping Complete** | Default/Critical | Report success/failures |
| **Error** | Critical | Alert to problems |
| **Background Start** | Default | Confirm background scraping |
| **Background Progress** | Silent | Periodic updates |
| **Background Complete** | Default/Critical | Final results |
| **Watch Folder** | Default | New files detected |

### Notification Actions

- **View Results** - Bring app to foreground
- **Dismiss** - Close notification

### Notification Settings

Configurable in macOS System Preferences:
- Enable/disable notifications
- Banner vs. Alert style
- Sound settings

---

## Keyboard Shortcuts

### Global Shortcuts

| Shortcut | Action |
|----------|--------|
| ⌘O | Add/Open Folder |
| ⌘R | Scrape Pending Items |
| ⌫ (Delete) | Delete Selected |
| ⌘, | Open Settings |
| ⌘Q | Quit Application |

### Navigation

| Shortcut | Action |
|----------|--------|
| ⌘1 | Switch to Movies |
| ⌘2 | Switch to TV Shows |
| Tab | Navigate between elements |

### Selection

| Shortcut | Action |
|----------|--------|
| ⌘-Click | Toggle selection |
| Shift-Click | Range selection |
| ⌘A | Select all (in context) |

---

## Error Handling & Recovery

### Error Categories

| Category | Handling |
|----------|----------|
| **Network Errors** | Retry with backoff |
| **API Errors** | Circuit breaker protection |
| **File System Errors** | User notification, skip item |
| **Database Errors** | Graceful degradation |
| **Parsing Errors** | Log and continue |

### Resume Session

If scraping is interrupted:
- Session state is preserved
- On restart, option to resume
- Shows items remaining
- User can resume or start fresh

### Error Recovery View

For critical errors:
- Clear explanation of problem
- Suggested resolution steps
- Retry option when applicable
- Report issue link

---

## File Organization & Naming

### Kodi Movie Naming Convention

```
Movies/
└── Movie Title (Year)/
    ├── Movie Title (Year).mkv
    ├── movie.nfo (or Movie Title (Year).nfo)
    ├── poster.jpg
    └── fanart.jpg
```

### Kodi TV Show Naming Convention

```
TV Shows/
└── Show Name (Year)/
    ├── tvshow.nfo
    ├── poster.jpg
    ├── fanart.jpg
    ├── Season 01/
    │   ├── season-poster.jpg
    │   ├── Show Name - S01E01 - Episode Title.mkv
    │   ├── Show Name - S01E01 - Episode Title.nfo
    │   ├── Show Name - S01E02 - Episode Title.mkv
    │   └── Show Name - S01E02 - Episode Title.nfo
    └── Season 02/
        └── ...
```

### NFO Naming Options

| Option | Filename | Use Case |
|--------|----------|----------|
| **movie.nfo** | movie.nfo | Kodi default, recommended |
| **Title-based** | Movie Title (Year).nfo | Alternative for some scrapers |

### Folder Renaming

When scraping:
1. Original folder is preserved during operation
2. On success, folder renamed to Kodi format
3. Database updated immediately after rename
4. Safe even if app is force-quit

### Collection Handling

For folders containing multiple movies:
- Detects multi-movie folders
- Creates individual folders for each movie
- Original collection folder untouched
- Each movie gets proper Kodi structure

---

## Technical Specifications

### System Requirements

| Requirement | Specification |
|-------------|---------------|
| **macOS Version** | 15.0+ (Sequoia) |
| **Architecture** | Apple Silicon (M-series) |
| **RAM** | 8 GB minimum, 16+ GB recommended |
| **Storage** | SSD recommended for database |
| **Network** | Internet connection for metadata |

### Technology Stack

| Component | Technology |
|-----------|------------|
| **Language** | Swift 6.2 |
| **UI Framework** | SwiftUI |
| **Database** | SQLite with custom wrapper |
| **Networking** | URLSession with async/await |
| **Image Processing** | Metal, CoreImage |
| **Concurrency** | Swift Actors, async/await |

### Swift 6.2 Compliance

- **Strict Concurrency** - Full data race safety
- **Actor Isolation** - Thread-safe by design
- **Sendable Types** - Safe cross-boundary passing
- **Observation Framework** - Modern state management

### File Formats Generated

| File | Format | Encoding |
|------|--------|----------|
| **NFO Files** | XML | UTF-8 |
| **Posters** | JPEG | Original quality |
| **Fanart** | JPEG | Original quality |
| **Database** | SQLite | Binary |

### API Endpoints Used

| Service | Endpoint Type |
|---------|---------------|
| **TMDB** | REST API v3 |
| **Fanart.TV** | REST API v3 |
| **TVDB** | REST API v4 |

---

## Summary of Unique Selling Points

### For Website Marketing

1. **Professional-Grade Media Organization**
   - Kodi-compatible metadata and file structure
   - Full NFO generation with cast, crew, ratings
   - High-quality artwork downloads

2. **Apple Silicon Native Performance**
   - GPU-accelerated thumbnail generation
   - Custom Metal shaders for M4 Max
   - Parallel processing for large libraries

3. **Cinema-Quality User Interface**
   - Apple TV+ inspired design
   - Beautiful poster grids with hover effects
   - Hero fanart displays with position adjustment

4. **Intelligent Automation**
   - Watch folders for automatic detection
   - Background processing for large libraries
   - Siri Shortcuts integration

5. **Robust & Reliable**
   - Circuit breaker pattern prevents failures
   - Automatic retry with exponential backoff
   - Database backup and recovery

6. **Complete Media Information**
   - Resolution detection (4K, 1080p, etc.)
   - HDR format identification (Dolby Vision, HDR10+)
   - Audio codec detection (Atmos, DTS-HD MA)

7. **TV Show Expertise**
   - Season completion tracking
   - Multi-episode file support
   - Duplicate episode detection

8. **iCloud Settings Sync**
   - Share settings across Macs
   - Automatic synchronization
   - Offline support with queuing

---

## Appendix: Complete Settings Categories

### Settings Tabs

1. **API Keys** - TMDB, Fanart.TV, TVDB API credentials
2. **Scraper** - Language, artwork quality, overwrite options
3. **Scanning** - Minimum file sizes, extensions
4. **Rename** - NFO naming convention, folder structure
5. **Appearance** - Theme, density, view preferences
6. **Watch Folders** - Automated folder monitoring
7. **Background** - Background scraping preferences
8. **Cloud Sync** - iCloud settings synchronization
9. **Service Health** - API status monitoring

---

*Document generated from source code analysis of Power Scraper Pro v1.0.0*
