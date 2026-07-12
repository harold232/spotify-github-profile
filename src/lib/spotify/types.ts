export interface SpotifyTrack {
    title: string;
    artist: string;
    album: string;

    cover: string;

    duration: number;
    progress: number;

    isPlaying: boolean;
}