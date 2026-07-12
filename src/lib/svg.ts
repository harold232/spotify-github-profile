export interface CardData {
    title: string;
    subtitle: string;
}

export function createSpotifyCard(data: CardData): string {
    return `
    <svg
      width="500"
      height="180"
      viewBox="0 0 500 180"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="500" height="180" rx="18" fill="#121212"/>

      <text
        x="30"
        y="45"
        fill="#1DB954"
        font-size="18"
        font-family="Arial"
        font-weight="bold"
      >
        🎧 NOW PLAYING
      </text>

      <text
        x="30"
        y="95"
        fill="white"
        font-size="28"
        font-family="Arial"
        font-weight="bold"
      >
        ${data.title}
      </text>

      <text
        x="30"
        y="130"
        fill="#B3B3B3"
        font-size="18"
        font-family="Arial"
      >
        ${data.subtitle}
      </text>
    </svg>
  `;
}