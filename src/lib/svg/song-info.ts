import { CardData } from "./types";

export function drawSongInfo(data: CardData) {
    return `
    <text
      x="30"
      y="75"
      fill="white"
      font-size="26"
      font-family="Arial"
      font-weight="bold"
    >
      ${data.title}
    </text>

    <text
      x="30"
      y="105"
      fill="#B3B3B3"
      font-size="18"
      font-family="Arial"
    >
      ${data.artist}
    </text>

    <text
      x="30"
      y="130"
      fill="#808080"
      font-size="14"
      font-family="Arial"
    >
      ${data.album}
    </text>
  `;
}