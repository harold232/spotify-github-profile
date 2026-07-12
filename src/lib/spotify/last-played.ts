import { getAccessToken } from "./auth";
import { SpotifyTrack } from "./types";


interface RecentlyPlayedResponse {

    items: {
        track: {

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

        };
    }[];
}


export async function getLastPlayed(): Promise<SpotifyTrack | null> {

    const accessToken = await getAccessToken();


    const response = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            cache: "no-store",
        }
    );


    if (!response.ok) {
        throw new Error(
            "Could not get recently played track"
        );
    }


    const data: RecentlyPlayedResponse =
        await response.json();


    const item = data.items[0];


    if (!item) {
        return null;
    }


    const track = item.track;


    return {
        title: track.name,

        artist: track.artists
            .map((artist) => artist.name)
            .join(", "),

        album: track.album.name,

        cover:
            track.album.images[0]?.url ?? "",

        duration:
        track.duration_ms,

        // No tenemos progreso de una canción pasada
        progress: 0,

        isPlaying: false,
    };
}