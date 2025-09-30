#!/bin/bash

STREMIO_DIR="$HOME/misc/stremio-torrent-stream"

# Check if both process is running AND port is responding
if pgrep -f "PORT=6969 bun run start" > /dev/null && curl -s http://localhost:6969 > /dev/null 2>&1; then
    # Service is running - show dropdown menu
    choice=$(echo -e "Stop Service\nCheck Status" | rofi -dmenu -p "Stremio Actions")
    
    case "$choice" in
        "Stop Service")
            pkill -f "PORT=6969 bun run start"
            dunstify -a "Stremio" "Service stopped" -i network-offline
            ;;
        "Check Status")
            if curl -s http://localhost:6969 > /dev/null 2>&1; then
                dunstify -a "Stremio" "Service running on :6969" -i network-online
            else
                dunstify -a "Stremio" "Service not responding" -i network-error
            fi
            ;;
    esac
else
    # Service is stopped - start it
    cd "$STREMIO_DIR" && PORT=6969 bun run start 
    dunstify -a "Stremio" "Starting torrent stream service..." -i network-transmit
fi
