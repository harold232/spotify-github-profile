export function drawHeader(isPlaying: boolean) {
    return `
    <text
      x="30"
      y="35"
      fill="#1DB954"
      font-size="16"
      font-family="Arial"
      font-weight="bold"
    >
      ${isPlaying ? "🎧 NOW PLAYING" : "🎵 LAST PLAYED"}
    </text>
  `;
}