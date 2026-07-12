import { CardData } from "./types";
import {escapeXml} from "@/lib/svg/utils";


export function drawSongInfo(data: CardData) {

    return `
        <text
         x="190"
         y="80"
         fill="white"
         font-size="26"
         font-family="Arial"
         font-weight="bold"
        >
         ${escapeXml(data.title)}
        </text>
        
        
        <text
         x="190"
         y="110"
         fill="#B3B3B3"
         font-size="18"
         font-family="Arial"
        >
         ${escapeXml(data.artist)}
        </text>
        
        
        <text
         x="190"
         y="135"
         fill="#808080"
         font-size="14"
         font-family="Arial"
        >
         ${escapeXml(data.album)}
        </text>
        
     `;

}