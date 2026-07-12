export function drawAlbumCover(cover: string) {

    if (!cover) {
        return "";
    }


    return `
    <image
        href="${cover}"
        x = "30"
        y = "45"
        
        width = "130"
        height = "130"
        preserveAspectRatio="xMidYMid slice"
        rx="12"
    />
  `;
}