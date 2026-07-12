export async function GET() {

    const scopes = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state"
    ].join(" ");

    const url =
        "https://accounts.spotify.com/authorize?" +
        new URLSearchParams({
            client_id: process.env.SPOTIFY_CLIENT_ID!,
            response_type: "code",
            redirect_uri: process.env.SPOTIFY_REDIRECT_URI!,
            scope: scopes,
        });

    return Response.redirect(url);
}