const SPOTIFY_API = "https://api.spotify.com/v1";

export async function spotifyFetch<T>(
    endpoint: string,
    accessToken: string
): Promise<T> {

    const response = await fetch(`${SPOTIFY_API}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error("Spotify API error");
    }

    return response.json();
}