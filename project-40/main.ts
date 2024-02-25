// Making Album

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Ellie glouding", "Love me like you do");
let album2 = make_album("Justin Beiber", "Baby", 12); // no. of tracks
let album3 = make_album("Ali zafar", "psl9");

// Printing each to show is working correctly
console.log(album1);
console.log(album2);
console.log(album3);