// Making Album
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Making three dictionaries representing different albums
var album1 = make_album("Ellie glouding", "Love me like you do");
var album2 = make_album("Justin Beiber", "Baby", 12); // no. of tracks
var album3 = make_album("Ali zafar", "psl9");
// Printing each to show is working correctly
console.log(album1);
console.log(album2);
console.log(album3);
