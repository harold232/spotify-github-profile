import { createSpotifyCard } from "@/lib/svg";
import { getNowPlaying, getLastPlayed } from "@/lib/spotify";
import { imageToBase64 } from "@/lib/spotify/image";


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


    const cover = await imageToBase64(song.cover);

    const svg = createSpotifyCard({
        ...song,
        cover,
    });


    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control":
                "public, max-age=0, s-maxage=60, stale-while-revalidate=30",
        },
    });
}