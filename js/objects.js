/*const playlist = {
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
console.log(playlist);*/
/*

const inputName = 'color';
const inputValue = 'tomato';

const colorData = {
    [inputName]: inputValue,
}
console.log(colorData);
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};

let totalFeedback = 0;
const keys = Object.keys(feedback);
console.log(keys);
for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);
}*/

const friends = [
    {name: 'Mango',online: false},
    {name: 'Kiwi',online: true},
    {name: 'Poly',online: true},
    {name: 'Ajax',online: false},
];
console.table(friends);
/*
const findFrienByName = function (allFriends, name) {
    for (const friend of allFriends) {
        console.log(friend.name);
    }
};

console.log(findFrienByName(friends, 'Poly'))*/

/*const getAllNames = function (allFriends) {
    const names = []; 
    for (const friend of allFriends) {
        console.log(friend.name);
        names.push(friend.name);
    }
    return names;
}
console.log(getAllNames(friends));

const getOnlineFriends = function (allFriends) {
    const onlineFriedns = []; 
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);
        if (friend.online) {
            onlineFriedns.push(friend);
        }
    }
    return onlineFriedns;
}
console.log(getOnlineFriends(friends));*/

let link = 'https://mu-site.com/about';
if (!link.endsWith('/')) {
    link += link + '/';
}
console.log(link);
const cart = {
    items: [],
    getItems() {
    },
    add(product) {},
    remove(productName0),
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: 'Apple', price: 50});
cart.add({ name: 'Lemon', price: 60});
cart.add({ name: 'Lemon', price: 60});
cart.add({ name: 'Strawberry', price: 110});