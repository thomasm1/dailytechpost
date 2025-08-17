const STREAM_URL = 'https://d3d4yli4hf5bmh.cloudfront.net/hls/aac_hifi.m3u8';
const MASTER_PLAYLIST_URL = 'https://d3d4yli4hf5bmh.cloudfront.net/hls/live.m3u8';
const METADATA_URL = 'https://d3d4yli4hf5bmh.cloudfront.net/metadatav2.json';
let currentUser = null;
let hls = null;
let audio = null;
let isPlaying = false;
let currentTrack = null;
let streamStats = {
    bitrate: 0,
    bufferLength: 0,
    networkSpeed: 0,
    droppedFrames: 0
};

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    audio = document.getElementById('audio-player');
    setupHLSPlayer();
    setupVolumeControl();
    checkUser();
    loadTrackMetadata();
    
    // Update play button based on audio state
    audio.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
    });
    
    audio.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
    });
    
    audio.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        showError('Audio playback error. Please try refreshing the page.');
        updateStatus('error', 'Stream Error');
    });
    
    // Update metadata every 30 seconds
    setInterval(loadTrackMetadata, 30000);
    
    // Update stream stats every 2 seconds
    setInterval(updateStreamStats, 2000);
});

function setupHLSPlayer() {
    if (Hls.isSupported()) {
        hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
            backBufferLength: 90
        });
        
        hls.loadSource(STREAM_URL);
        hls.attachMedia(audio);
        
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            console.log('HLS manifest parsed, ready to play');
            updateStatus('live', 'Live Stream');
            document.getElementById('track-title').textContent = 'Radio Thomas1 Live';
            document.getElementById('track-info').textContent = 'AAC Hi-Fi Stream • Ready to Play';
            updateCodecInfo();
        });
        
        // Track HLS statistics
        hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
            const level = hls.levels[data.level];
            if (level) {
                streamStats.bitrate = Math.round(level.bitrate / 1000);
                updateStreamDisplay();
            }
        });
        
        hls.on(Hls.Events.BUFFER_APPENDED, function(event, data) {
            try {
                const buffered = audio.buffered;
                if (buffered.length > 0) {
                    streamStats.bufferLength = buffered.end(buffered.length - 1) - audio.currentTime;
                }
            } catch(e) {
                // Handle buffer calculation errors
            }
        });
        
        hls.on(Hls.Events.ERROR, function(event, data) {
            console.error('HLS error:', data);
            if (data.fatal) {
                switch(data.type) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        showError('Network error loading stream. Please check your connection.');
                        hls.startLoad();
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        showError('Media error. Attempting to recover...');
                        hls.recoverMediaError();
                        break;
                    default:
                        showError('Fatal error loading stream.');
                        hls.destroy();
                        break;
                }
                updateStatus('error', 'Stream Error');
            }
        });
        
    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari native HLS support
        audio.src = STREAM_URL;
        updateStatus('live', 'Live Stream');
        console.log('Using native HLS support');
    } else {
        showError('HLS is not supported in this browser.');
        updateStatus('error', 'Not Supported');
    }
}

function setupVolumeControl() {
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.addEventListener('input', function() {
        audio.volume = this.value / 100;
    });
    
    // Set initial volume
    audio.volume = 0.5;
}

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play().catch(e => {
            console.error('Play failed:', e);
            showError('Unable to start playback. Please try again.');
        });
    }
}

function updatePlayButton() {
    const button = document.getElementById('play-button');
    button.textContent = isPlaying ? '⏸️' : '▶️';
}

function updateStatus(type, text) {
    const indicator = document.getElementById('status-indicator');
    const status = document.getElementById('stream-status');
    
    indicator.className = `status-indicator status-${type}`;
    status.textContent = text;
}

function showError(message) {
    const container = document.getElementById('error-container');
    container.innerHTML = `<div class="error-message">${message}</div>`;
    
    // Auto-hide error after 10 seconds
    setTimeout(() => {
        container.innerHTML = '';
    }, 10000);
}

// Authentication functions
async function checkUser() {
    try {
        const response = await fetch('/api/user', { credentials: 'include' });
        const data = await response.json();
        if (data.loggedIn) {
            showUserInfo(data.user);
        } else {
            showLoginForm();
        }
    } catch (error) {
        console.error('Error checking user:', error);
        showLoginForm();
    }
}

function showLoginForm() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('user-info').style.display = 'none';
    currentUser = null;
}

function showUserInfo(user) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('user-info').style.display = 'block';
    document.getElementById('current-username').textContent = user.username;
    currentUser = user;
}

async function register() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username) {
        alert('Please enter a username');
        return;
    }

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            showUserInfo(data.user);
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        } else {
            alert(data.error || 'Registration failed');
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Network error during registration');
    }
}

async function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username) {
        alert('Please enter a username');
        return;
    }

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            showUserInfo(data.user);
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        } else {
            alert(data.error || 'Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Network error during login');
    }
}

async function logout() {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            credentials: 'include'
        });

        if (response.ok) {
            showLoginForm();
        } else {
            alert('Logout failed');
        }
    } catch (error) {
        console.error('Logout error:', error);
        alert('Network error during logout');
    }
}

// Load track metadata from the JSON endpoint
async function loadTrackMetadata() {
    try {
        const response = await fetch(METADATA_URL + '?t=' + Date.now()); // Cache bust
        const metadata = await response.json();
        
        if (metadata) {
            currentTrack = metadata;
            updateTrackDisplay(metadata);
            updateStreamQuality(metadata);
            updateTrackHistory(metadata);
        }
    } catch (error) {
        console.error('Error loading metadata:', error);
        // Don't show error to user for metadata failures
    }
}

function updateTrackDisplay(metadata) {
    const title = metadata.title || 'Unknown Track';
    const artist = metadata.artist || 'Unknown Artist';
    const album = metadata.album || 'Unknown Album';
    const year = metadata.date || 'Unknown Year';
    
    document.getElementById('track-title').textContent = title;
    document.getElementById('track-info').textContent = artist;
    document.getElementById('track-album').textContent = album;
    document.getElementById('track-year').textContent = year;
    
    // Update page title with current track
    document.title = `${artist} - ${title} | Radio Thomas1`;
    
    // Load ratings for this track
    loadTrackRatings(title, artist);
}

function updateStreamQuality(metadata) {
    if (metadata.bit_depth && metadata.sample_rate) {
        const quality = `${metadata.bit_depth}-bit ${(metadata.sample_rate / 1000).toFixed(1)}kHz`;
        document.getElementById('stream-quality').textContent = quality;
    }
}

function updateTrackHistory(metadata) {
    const historyList = document.getElementById('track-history-list');
    let historyHTML = '';
    
    // Add previous tracks from metadata
    for (let i = 1; i <= 5; i++) {
        const artist = metadata[`prev_artist_${i}`];
        const title = metadata[`prev_title_${i}`];
        
        if (artist && title) {
            historyHTML += `
                <div class="history-item">
                    <span class="history-artist">${artist}</span>
                    <span class="history-title-text">- ${title}</span>
                </div>
            `;
        }
    }
    
    if (historyHTML) {
        historyList.innerHTML = historyHTML;
    } else {
        historyList.innerHTML = '<div class="history-item">No history available</div>';
    }
}

// Load track ratings
async function loadTrackRatings(title, artist) {
    try {
        const response = await fetch(`/api/track-ratings?trackTitle=${encodeURIComponent(title)}&trackArtist=${encodeURIComponent(artist)}`, {
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            updateRatingDisplay(data.ratings, data.userRating);
        }
    } catch (error) {
        console.error('Error loading ratings:', error);
    }
}

// Update rating display
function updateRatingDisplay(ratings, userRating) {
    document.getElementById('thumbs-up-count').textContent = `(${ratings.up})`;
    document.getElementById('thumbs-down-count').textContent = `(${ratings.down})`;
    
    // Reset button styles
    document.getElementById('thumbs-up-btn').classList.remove('user-rated', 'disabled');
    document.getElementById('thumbs-down-btn').classList.remove('user-rated', 'disabled');
    
    // Highlight user's rating if they've voted
    if (userRating) {
        const button = document.getElementById(userRating === 'up' ? 'thumbs-up-btn' : 'thumbs-down-btn');
        button.classList.add('user-rated');
        document.getElementById('rating-status').textContent = `You rated this track: ${userRating === 'up' ? 'Love It' : 'Not My Style'}`;
        
        // Disable both buttons since user already voted
        document.getElementById('thumbs-up-btn').classList.add('disabled');
        document.getElementById('thumbs-down-btn').classList.add('disabled');
    } else {
        document.getElementById('rating-status').textContent = '';
    }
}

async function rateTrack(rating) {
    if (!currentTrack) {
        alert('Please wait for track information to load');
        return;
    }
    
    // Check if button is disabled (user already voted)
    const button = document.getElementById(rating === 'up' ? 'thumbs-up-btn' : 'thumbs-down-btn');
    if (button.classList.contains('disabled')) {
        alert('You have already rated this track');
        return;
    }
    
    try {
        console.log('Attempting to rate track:', {
            rating: rating,
            trackTitle: currentTrack.title,
            trackArtist: currentTrack.artist,
            trackYear: currentTrack.date ? parseInt(currentTrack.date) : null
        });

        const response = await fetch('/api/rate-track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                rating: rating,
                trackTitle: currentTrack.title,
                trackArtist: currentTrack.artist,
                trackYear: currentTrack.date ? parseInt(currentTrack.date) : null
            })
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);

        if (!response.ok) {
            console.error('Response not ok:', response.status, response.statusText);
        }

        const data = await response.json();
        console.log('Response data:', data);

        if (response.ok) {
            // Update display with new ratings
            updateRatingDisplay(data.ratings, rating);
            
            const ratingText = rating === 'up' ? 'Love It' : 'Not My Style';
            const trackInfo = `${currentTrack.artist} - ${currentTrack.title}`;
            
            // Show success message briefly
            const statusDiv = document.getElementById('rating-status');
            const originalText = statusDiv.textContent;
            statusDiv.textContent = `Thanks for rating "${trackInfo}": ${ratingText}! 🎵`;
            statusDiv.style.color = '#4CAF50';
            
            setTimeout(() => {
                statusDiv.textContent = originalText;
                statusDiv.style.color = '';
            }, 3000);
            
        } else {
            console.error('Rating failed:', data);
            alert(data.error || 'Failed to record rating');
        }
    } catch (error) {
        console.error('Rating error details:', error);
        console.error('Error stack:', error.stack);
        alert(`Network error: ${error.message}`);
    }
}

// Codec and stream info functions
function updateCodecInfo() {
    document.getElementById('current-codec').textContent = 'AAC Hi-Fi';
    document.getElementById('current-bitrate').textContent = '~211 kbps';
    
    const badge = document.getElementById('codec-badge');
    badge.className = 'codec-badge aac';
    badge.textContent = '✓ Universal Support';
    
    const explanation = document.getElementById('codec-explanation');
    explanation.textContent = 'Using AAC codec for maximum browser compatibility. FLAC would provide lossless quality but isn\'t supported in most web browsers for HLS streaming.';
}

function updateStreamDisplay() {
    // Update with animation
    const elements = ['current-bitrate', 'buffer-health', 'network-speed'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.classList.add('updating');
        setTimeout(() => element.classList.remove('updating'), 500);
    });
    
    // Update actual values
    if (streamStats.bitrate > 0) {
        document.getElementById('current-bitrate').textContent = `${streamStats.bitrate} kbps`;
    }
    
    const bufferHealth = streamStats.bufferLength;
    let bufferStatus = 'Unknown';
    let bufferColor = '';
    
    if (bufferHealth > 10) {
        bufferStatus = `${bufferHealth.toFixed(1)}s (Excellent)`;
        bufferColor = '#4CAF50';
    } else if (bufferHealth > 5) {
        bufferStatus = `${bufferHealth.toFixed(1)}s (Good)`;
        bufferColor = '#FF9800';
    } else if (bufferHealth > 0) {
        bufferStatus = `${bufferHealth.toFixed(1)}s (Low)`;
        bufferColor = '#f44336';
    }
    
    const bufferElement = document.getElementById('buffer-health');
    bufferElement.textContent = bufferStatus;
    bufferElement.style.color = bufferColor;
    
    // Estimate network speed based on buffer health and playback
    let networkStatus = 'Good';
    if (bufferHealth < 3 && isPlaying) {
        networkStatus = 'Slow connection detected';
    } else if (bufferHealth > 15) {
        networkStatus = 'Fast connection';
    }
    
    document.getElementById('network-speed').textContent = networkStatus;
}

function updateStreamStats() {
    if (!hls || !audio) return;
    
    try {
        // Update buffer health
        const buffered = audio.buffered;
        if (buffered.length > 0 && audio.currentTime > 0) {
            streamStats.bufferLength = buffered.end(buffered.length - 1) - audio.currentTime;
        }
        
        updateStreamDisplay();
    } catch (error) {
        console.log('Error updating stream stats:', error);
    }
}