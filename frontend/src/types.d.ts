export interface Artist {
    _id: string;
    name: string;
    image?: string | null;
    description: string;
}

export interface Album {
    _id: string;
    artist: Artist;
    name: string;
    releaseDate: string;
    image?: string | null;
}

export interface Track {
    _id: string;
    album: Album;
    name: string;
    duration: string;
    number: number;
}

export interface RegisterMutation {
    username: string;
    password: string;
}