import { drawAlbumCover } from "./album-cover";
import { drawBackground } from "./background";
import { drawHeader } from "./header";
import { drawProgressBar } from "./progress-bar";
import { drawSongInfo } from "./song-info";
import { CardData } from "./types";

export function createSpotifyCard(data: CardData): string {
    return `
    <svg
      width="500"
      height="200"
      viewBox="0 0 500 200"
      xmlns="http://www.w3.org/2000/svg"
    >

      ${drawBackground()}

      ${drawHeader(data.isPlaying)}

      ${drawSongInfo(data)}

      ${drawProgressBar(
        data.progress,
        data.duration
    )}

      ${drawAlbumCover()}

    </svg>
  `;
}