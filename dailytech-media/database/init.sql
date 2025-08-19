-- Initialize radio database schema

-- Track ratings table
CREATE TABLE IF NOT EXISTS track_ratings (
    id SERIAL PRIMARY KEY,
    track_title VARCHAR(255) NOT NULL,
    track_artist VARCHAR(255),
    track_year INTEGER,
    rating VARCHAR(10) CHECK (rating IN ('up', 'down')),
    username VARCHAR(255) NOT NULL,
    user_fingerprint VARCHAR(255),
    user_ip VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(track_title, track_artist, username)
);

-- Guest users table for fingerprint tracking
CREATE TABLE IF NOT EXISTS guest_users (
    id SERIAL PRIMARY KEY,
    fingerprint_hash VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    first_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Track metadata table
CREATE TABLE IF NOT EXISTS track_metadata (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255),
    year INTEGER,
    album VARCHAR(255),
    source_quality VARCHAR(50),
    stream_quality VARCHAR(50),
    artwork_url TEXT,
    soundtrack_info TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_track_ratings_title ON track_ratings(track_title);
CREATE INDEX IF NOT EXISTS idx_track_ratings_username ON track_ratings(username);
CREATE INDEX IF NOT EXISTS idx_track_ratings_fingerprint ON track_ratings(user_fingerprint);
CREATE INDEX IF NOT EXISTS idx_guest_users_fingerprint ON guest_users(fingerprint_hash);
CREATE INDEX IF NOT EXISTS idx_track_metadata_title ON track_metadata(title);
CREATE INDEX IF NOT EXISTS idx_track_ratings_created_at ON track_ratings(created_at);

-- Users table for authentication
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255),
    password_hash VARCHAR(255),
    is_email_username BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Create indexes for users table
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Insert sample data
INSERT INTO track_metadata (title, artist, year, album, source_quality, stream_quality) VALUES
('Sample Track 1', 'Sample Artist', 2023, 'Sample Album', '16-bit 44.1kHz', '48kHz FLAC'),
('Sample Track 2', 'Another Artist', 2022, 'Demo Album', '24-bit 96kHz', '48kHz FLAC')
ON CONFLICT DO NOTHING;