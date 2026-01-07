#!/bin/bash
# Deploy script for Power Scraper Pro Website
# Run this to push changes to GitHub and update the live site

# Add all changes
git add .

# Get commit message from argument or use default
MESSAGE="${1:-Update site}"

# Commit changes
git commit -m "$MESSAGE"

# Push to GitHub
git push origin main

echo ""
echo "✅ Site deployed successfully!"
echo "🌐 Live at: https://powerscraperpro.com"
echo "📦 Repo: https://github.com/jchezik/power-scraper-pro-website"
