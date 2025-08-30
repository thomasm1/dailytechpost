# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

French-style online radio station inspired by "Radio NrG" with integrated frontend and backend rating system. Full-stack application by Thomas Maestas.

**Primary Goal**: Radio streaming platform with metadata display (URL pic, title, year, soundtrack, source quality 16-bit 44.1kHz) and high-quality streaming (48kHz FLAC/HLS lossless) with thumbs up/down ratings.

**Secondary Goal**: Google Play songlist preferences integration.

## Architecture

**Streaming Infrastructure**:
- HLS/Nginx HTTP radio streaming with metadata
- AWS CloudFront CDN for global distribution
- Browser connects to Nginx web server

**Frontend**:
- Static HTML/CSS with JavaScript player widget
- Displays track metadata and quality information
- Thumbs up/down rating interface

**Backend**:
- Flask API for ratings system
- PostgreSQL database for rating persistence
- Google Play integration for personalized content

**Deployment**:
- Docker containerization
- GitHub Actions for CI/CD and automated AI code review
- Unit and integration testing

## Development Commands

**Start Development Server**:
```bash
npm run dev
# Server runs on http://localhost:3009
```

**Database Operations**:
```bash
# Initialize/reset database schema
npm run db:init

# Connect to database directly
PGPASSWORD=radio_pass psql -h localhost -U radio_user -d radio_db

# Start PostgreSQL service (if needed)
sudo systemctl start postgresql

# Test database connection
curl http://localhost:3009/health
```

**Testing**:
```bash
# No specific test framework configured yet
# Tests can be added to package.json scripts
```

**Project Structure**:
- `server.js` - Express.js server with PostgreSQL integration
- `public/index.html` - Main frontend with HLS player, authentication, and rating system
- `database/init.sql` - Database schema and sample data
- `.env` - Environment configuration (DB credentials, port)

## Key Implementation Details

**Authentication System**:
- Supports both username-only and email/password authentication
- Session-based auth with express-session
- Guest user system using browser fingerprinting
- Functions: `/api/register`, `/api/login`, `/api/logout`, `/api/user`

**Rating System**:
- Track ratings (thumbs up/down) stored in PostgreSQL
- Prevents duplicate ratings per user/track combination
- Supports both registered users and anonymous guests via fingerprinting
- Functions: `/api/rate-track`, `/api/track-ratings`

**HLS Streaming Integration**:
- Frontend uses HLS.js for video streaming support
- Metadata fetched from CloudFront: `https://d3d4yli4hf5bmh.cloudfront.net/metadatav2.json`
- Stream URL: `https://d3d4yli4hf5bmh.cloudfront.net/hls/live.m3u8`
- Real-time track metadata display with history

**Database Schema** (database/init.sql):
- `track_ratings` - Rating data with user tracking
- `guest_users` - Fingerprint-based guest user management  
- `track_metadata` - Track information storage
- `users` - Registered user authentication