#!/bin/bash
if pgrep -f "PORT=6969 bun run start" > /dev/null && curl -s http://localhost:6969 > /dev/null 2>&1; then
    echo "󰑂 Stremio"  # Running icon
else
    echo "󰑃 Stremio"  # Stopped icon
fi
