export async function getAccessToken(): Promise<string> {
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
                grant_type: "refresh_token",
                refresh_token:
                    process.env.SPOTIFY_REFRESH_TOKEN!,
            }),
            cache: "no-store",
        }
    );


    if (!response.ok) {
        throw new Error(
            "Could not refresh Spotify token"
        );
    }


    const data = await response.json();


    return data.access_token;
}