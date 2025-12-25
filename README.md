# Kick Live Stream Downloader
This project automatically monitors your favorite Kick streamer and downloads their live streams when they go live. The script checks every 5 minutes to see if the streamer is online, and if they start streaming, it immediately begins recording the broadcast using Streamlink at the best available video quality, saving the output file directly into the same folder as the source code for easy access.

## Requirements
- Node.js & npm
- Python 3.6+
- Kick Developer API credentials

## Setup

### 1. Get API Keys
1. Go to https://kick.com/settings/developer
2. Login to your Kick account
3. Click "Create New"
4. Fill forms with default checkboxes
5. Save your `Client ID` and `Client Secret`

### 2. Configure
Edit these files with your credentials:
1. main.sh - Add streamer username
2. app.js - Paste your API keys

### 3. Install
```bash
npm install
pip install streamlink
chmod +x main.sh
```

## Usage
```bash
./main.sh
```