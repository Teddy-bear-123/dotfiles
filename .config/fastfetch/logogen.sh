#!/bin/bash


# do ./logogen.sh <file> to get an ascii image, pipe it to whatever command/txt file to get a color ascii logo


jp2a $1 --colors --color-depth=24 --background=dark --clear --width=69
