#!/usr/bin/env bash
# render-build.sh

# Install yt-dlp
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
chmod a+rx /usr/local/bin/yt-dlp

# Optional: Install ffmpeg if needed
apt update && apt install -y ffmpeg

# Start your app
npm install --legacy-peer-deps
