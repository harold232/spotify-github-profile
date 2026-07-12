export function drawAlbumCover(cover: string) {
    if (!cover) {
        return `
      <rect
        x="340"
        y="30"
        width="130"
        height="130"
        rx="12"
        fill="#2A2A2A"
      />
    `;
    }


    return `
    <image
      href="${cover}"
      x="340"
      y="30"
      width="130"
      height="130"
      preserveAspectRatio="xMidYMid slice"
      rx="12"
    />
  `;
}