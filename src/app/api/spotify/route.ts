import { createSpotifyCard } from "@/lib/svg";
import { getNowPlaying, getLastPlayed } from "@/lib/spotify";


export async function GET() {

    const nowPlaying = await getNowPlaying();


    const song =
        nowPlaying ??
        await getLastPlayed();


    if (!song) {
        return new Response(
            "No Spotify data available",
            {
                status: 404,
            }
        );
    }


    const svg = createSpotifyCard(song);


    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "no-cache",
        },
    });
}