const showProfileInfo = function (userProfile) {
    const {
        name,
        tag,
        location,
        avatar,
        stats: {followers, views, likes},
    } = userProfile;
    console.log(userProfile);
}
const profile = {
	name: 'Ihor',
    tag: 'jungle',
    location: 'niko',
    avatar: "https://kinogo.cx/uploads/posts/2022-10/1667134171_durnoj-glaz.jpg",
    stats: {
        followers: 3024,
        views: 35480,
        likes: 1305,
    },
};

showProfileInfo(profile);