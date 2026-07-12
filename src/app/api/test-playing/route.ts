import { getNowPlaying, getLastPlayed } from "@/lib/spotify";


export async function GET() {

    const nowPlaying = await getNowPlaying();


    const song =
        nowPlaying ??
        await getLastPlayed();


    return Response.json(song);
}