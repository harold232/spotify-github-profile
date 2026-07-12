import { getAccessToken } from "@/lib/spotify/auth";


export async function GET() {

    const token = await getAccessToken();


    return Response.json({
        success: true,
        tokenStart:
            token.substring(0, 10) + "..."
    });
}