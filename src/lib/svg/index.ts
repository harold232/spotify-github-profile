import { drawAlbumCover } from "./album-cover";
import { drawBackground } from "./background";
import { drawHeader } from "./header";
import { drawProgressBar } from "./progress-bar";
import { drawSongInfo } from "./song-info";
import { CardData } from "./types";
import {drawSpotifyLogo} from "@/lib/svg/spotify-logo";
import {drawAudioWave} from "@/lib/svg/audio-wave";
import {drawDefs} from "@/lib/svg/defs";

export function createSpotifyCard(data: CardData): string {
    return `
    <svg
        width="700"
        height="260"
        viewBox="0 0 700 260"
        xmlns="http://www.w3.org/2000/svg"
    >   
        ${drawDefs()}

        ${drawBackground()}

        ${drawAlbumCover(data.cover)}
        
        ${drawSpotifyLogo()}
        
        ${drawHeader(data.isPlaying)}
        
        ${drawSongInfo(data)}
        
        ${drawAudioWave(
            data.progress,
            data.duration,
            data.isPlaying
        )}
    </svg>
  `;
}