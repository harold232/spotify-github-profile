import { CardData } from "./types";
import { escapeXml } from "@/lib/svg/utils";
import { scrollIfNeeded } from "./text";


export function drawSongInfo(data: CardData) {

    const title = scrollIfNeeded(
        data.title,
        250,
        "bold 21px Arial"
    );

    const artist = scrollIfNeeded(
        data.artist,
        250,
        "16px Arial"
    );

    const album = scrollIfNeeded(
        data.album,
        250,
        "14px Arial"
    );

    return `

        <defs>

            <clipPath id="titleClip">
                <rect
                    x="190"
                    y="55"
                    width="250"
                    height="35"
                />
            </clipPath>


            <clipPath id="artistClip">
                <rect
                    x="190"
                    y="90"
                    width="250"
                    height="25"
                />
            </clipPath>


            <clipPath id="albumClip">
                <rect
                    x="190"
                    y="115"
                    width="250"
                    height="25"
                />
            </clipPath>

        </defs>


        <text
            x="190"
            y="80"
            fill="white"
            font-size="21"
            font-family="Arial"
            font-weight="bold"
            clip-path="url(#titleClip)"
        >
            ${escapeXml(title)}
        </text>


        <text
            x="190"
            y="110"
            fill="#B3B3B3"
            font-size="16"
            font-family="Arial"
            clip-path="url(#artistClip)"
        >
            ${escapeXml(artist)}
        </text>


        <text
            x="190"
            y="135"
            fill="#808080"
            font-size="14"
            font-family="Arial"
            clip-path="url(#albumClip)"
        >
            ${escapeXml(album)}
        </text>

    `;
}