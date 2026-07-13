import { CardData } from "./types";
import {escapeXml} from "@/lib/svg/utils";
import { scrollIfNeeded } from "./text";


export function drawSongInfo(data: CardData) {

    const title = scrollIfNeeded(
        data.title,
        320,
        "bold 26px Arial"
    );

    const artist = scrollIfNeeded(
        data.artist,
        320,
        "18px Arial"
    );

    const album = scrollIfNeeded(
        data.album,
        320,
        "14px Arial"
    );

    return `
        <text
         x="190"
         y="80"
         fill="white"
         font-size="26"
         font-family="Arial"
         font-weight="bold"
        >
         ${escapeXml(title)}
        </text>
        
        
        <text
         x="190"
         y="110"
         fill="#B3B3B3"
         font-size="18"
         font-family="Arial"
        >
         ${escapeXml(artist)}
        </text>
        
        
        <text
         x="190"
         y="135"
         fill="#808080"
         font-size="14"
         font-family="Arial"
        >
         ${escapeXml(album)}
        </text>
        
     `;

}