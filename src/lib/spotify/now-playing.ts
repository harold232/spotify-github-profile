import { getAccessToken } from "./auth";
import { spotifyFetch } from "./client";
import { SpotifyTrack } from "./types";


interface SpotifyCurrentlyPlaying {
    is_playing: boolean;

    progress_ms: number;

    item: {
        name: string;

        album: {
            name: string;

            images: {
                url: string;
            }[];
        };

        artists: {
            name: string;
        }[];

        duration_ms: number;
    } | null;
}


export async function getNowPlaying(): Promise<SpotifyTrack | null> {

    const accessToken = await getAccessToken();


    const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
        }
    );


    // Spotify devuelve 204 si no hay canción reproduciéndose
    if (response.status === 204) {
        return null;
    }


    if (!response.ok) {
        throw new Error(
            "Could not get current playing track"
        );
    }


    const data: SpotifyCurrentlyPlaying =
        await response.json();


    if (!data.item) {
        return null;
    }


    return {
        title: data.item.name,

        artist: data.item.artists
            .map((artist) => artist.name)
            .join(", "),

        album: data.item.album.name,

        cover:
            data.item.album.images[0]?.url ?? "",

        duration:
        data.item.duration_ms,

        progress:
        data.progress_ms,

        isPlaying:
        data.is_playing,
    };
}