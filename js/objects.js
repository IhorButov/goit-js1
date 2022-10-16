const playlist = {
    name: 'My playlist',
    rating: 5,
    tracks: ['Track1', 'Track2', 'Track3'],
    trackCount: 3,
    changeName(newName) {
        this.name = newName;
    },
    addTrack(track) {
        this.tracks.push(track);
    },
    updateRating(newRating) {
        this.rating = newRating;
    },
    getTrackCount() {
        return this.tracks.length;
    },
};

playlist.changeName('New perfect Name');

playlist.addTrack('new track4');
playlist.addTrack('new track5');
playlist.addTrack('new track5');
playlist.updateRating(10);
console.log(playlist.getTrackCount());
console.log(playlist);
/*

const inputName = 'color';
const inputValue = 'tomato';

const colorData = {
    [inputName]: inputValue,
}
console.log(colorData);*/