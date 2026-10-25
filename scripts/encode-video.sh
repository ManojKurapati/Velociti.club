#!/usr/bin/env bash
# Encodes public/Velociti.mp4 into web-ready WebM (VP9) + MP4 (H.264) pairs and a poster.
# The source is 1280x720, so 720p is the top rendition (upscaling to 1080p adds bytes, not detail).
# Re-run with a 1080p master as SRC to add a 1080p pair: SRC=master.mov ./scripts/encode-video.sh
set -euo pipefail
SRC="${SRC:-public/Velociti.mp4}"
OUT=public/video
POSTER_AT="${POSTER_AT:-3}"
mkdir -p "$OUT"

encode() { # height suffix crf_vp9 crf_h264
  local h=$1 name=$2 vcrf=$3 hcrf=$4
  ffmpeg -v error -y -i "$SRC" -vf "scale=-2:${h}" -c:v libvpx-vp9 -b:v 0 -crf "$vcrf" -row-mt 1 -deadline good -cpu-used 2 \
    -c:a libopus -b:a 96k "$OUT/velociti-${name}.webm"
  ffmpeg -v error -y -i "$SRC" -vf "scale=-2:${h}" -c:v libx264 -profile:v high -preset slow -crf "$hcrf" -pix_fmt yuv420p \
    -movflags +faststart -c:a aac -b:a 128k "$OUT/velociti-${name}.mp4"
}

encode 720 720 34 24
encode 480 480 36 26

ffmpeg -v error -y -ss "$POSTER_AT" -i "$SRC" -frames:v 1 -q:v 3 "$OUT/velociti-poster.jpg"
ffmpeg -v error -y -ss "$POSTER_AT" -i "$SRC" -frames:v 1 -c:v libwebp -quality 78 "$OUT/velociti-poster.webp"
ls -la "$OUT"
