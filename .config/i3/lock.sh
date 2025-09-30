#!/usr/bin/env bash


rm /tmp/screen.png

icon="/home/cv-rishi/Pictures/WallPapers/wallpaperflare.com_wallpaper.jpg"
tmpbg='/tmp/screen.png'

(( $# )) && { icon=$1; }
# Screenshot.
scrot "$tmpbg"
convert "$tmpbg" -scale 10% -scale 1000% "$tmpbg"
convert "$tmpbg" "$icon" -gravity center -composite -matte "$tmpbg"
# Launch video with full screen option. Full path is necessary.
# /usr/bin/mpv --fs ~/.config/i3/ZA\ WARUDO\ -\ Dio\s\ The\ World\ Sound\ Effect.mp4
# Lock the screen. Use "-n" to play sound after screen is unlocked by chaining it.
i3lock -u -i "$tmpbg" 

# -n; /usr/bin/mpv ~/.config/i3/ZA\ WARUDO_SOUND\ EFFECT\ _\ TIME\ RESUME.mp3 
