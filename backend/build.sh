#!/usr/bin/env bash

# 🧰 Install yt-dlp (save it in a location Render backend can access)
echo "📦 Installing yt-dlp..."
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o yt-dlp
chmod +x yt-dlp
mv yt-dlp /usr/local/bin/yt-dlp

# 📦 Continue node install
npm install --legacy-peer-deps
