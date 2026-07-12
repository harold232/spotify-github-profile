import { createSpotifyCard } from "@/lib/svg";

export async function GET() {

    const svg = createSpotifyCard({
        title: "Hello World",
        subtitle: "Nuestra primera tarjeta SVG 🚀"
    });

    return new Response(svg, {
        headers: {
            "Content-Type": "image/svg+xml",
            "Cache-Control": "no-cache",
        },
    });
}