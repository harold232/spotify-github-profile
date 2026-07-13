export function drawHeader(isPlaying: boolean) {
    const status = isPlaying
        ? {
            title: "NOW PLAYING",
            titleColor: "#1ED760",

            label: "LIVE",
            color: "#1ED760",
            text: "#1ED760",
            filter: "url(#neonGreen)",

            circleX: 434,
            textX: 445,
        }
        : {
            title: "LAST PLAYED",
            titleColor: "#BDBDBD",

            label: "OFFLINE",
            color: "#E53935",
            text: "#BDBDBD",
            filter: "url(#neonRed)",

            circleX: 420,
            textX: 430,
        };

    return `
        <filter id="neonGreen" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
    
        <filter id="neonRed" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
    
        <text
          x="220"
          y="35"
          fill="${status.titleColor}"
          font-size="14"
          font-family="Arial"
          font-weight="bold"
        >
          ${status.title}
        </text>
    
        <circle
          cx="${status.circleX}"
          cy="28"
          r="5"
          fill="${status.color}"
          filter="${status.filter}"
        />
    
        <text
          x="${status.textX}"
          y="32"
          fill="${status.text}"
          font-size="11"
          font-family="Arial"
          font-weight="bold"
        >
          ${status.label}
        </text>
      `;
}