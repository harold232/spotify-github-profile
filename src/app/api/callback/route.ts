export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const code = searchParams.get("code");

    if (!code) {
        return new Response("No code received", {
            status: 400,
        });
    }

    const response = await fetch(
        "https://accounts.spotify.com/api/token",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
                    ).toString("base64"),
            },
            body: new URLSearchParams({
                grant_type: "authorization_code",
                code,
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
            }),
        }
    );

    const data = await response.json();

    return Response.json(data);
}