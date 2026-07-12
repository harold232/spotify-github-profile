import { createSpotifyCard } from "@/lib/svg";

export async function GET() {

    const svg = createSpotifyCard({
        title: "Die With A Smile",
        artist: "Lady Gaga • Bruno Mars",
        album: "Single",

        progress: 150000,
        duration: 240000,

        isPlaying: true,

        cover: "",
    });

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "no-cache",
        },
    });
}