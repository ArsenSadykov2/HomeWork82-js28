export interface Artist {
    _id: string;
    name: string;
    image?: string | null;
    description: string;
}

export interface Album {
    _id: string;
    artist: string;
    name: string;
    releaseDate: string;
    image?: string | null;
}

export interface Track {
    _id: string;
    album: string;
    name: string;
    duration: string;
    number: number;
}