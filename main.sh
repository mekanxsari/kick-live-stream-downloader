while true; do
    LIVE=$(node app.js | head -n 1 | tr -d '\r\n')

    if [ "$LIVE" = "true" ]; then
        echo "saving started"

        #write here username of streamer: https://kick.com/username
        streamlink https://kick.com/erenaktan best -o naaptin.mp4
        exit 0
    else
        echo "we will wait"
        sleep 300
    fi
done