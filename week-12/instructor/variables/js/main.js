const aNumber = 123;
const aString = `One, two, three`;

// Boolean: true/false, true == 1, false == 0
const aBoolean = true;

// Object
// let myTask1 = `Finish learning about Objects`;
// let myTask2 = `Post all links for today`;
// let isComplete1 = false;
// let isComplete2 = false;

const task1 = {
    name: `Finish learning about Objects`,
    isComplete: false,
    priority: 4
};

const task2 = {
    name: `Post all links for today`,
    isComplete: false,
    priority: 2
};

// Format the tasks to look like this:
// My task name here (#): false

console.log(`${task1.name} (${task1.priority}): ${task1.isComplete}`);
console.log(`${task2.name} (${task2.priority}): ${task2.isComplete}`);

// Write an object for a Song
const aSong = {
    title: `Natural`,
    durationSec: 176,
    writer1: `Matt Man`,
    writer2: `Robin Something`,
    producer1: `Just One Person?`,
    studio: `Some Studio`,
    genre: `Alternative`,
    lyrics: `In a world... very long string`,
    albumName: `Origins`,
    albumCover: `imagine-dragons-natural.jpg`,
    albumYear: 2018,
    albumTrackNumber: 1,
    artistName: `Imagine Dragons`,
};

// Song specific data
    // Album specific data
        // Artist specific data
const song = {
    title: `Natural`,
    duration: 176,
    writer1: `Matt Man`,
    writer2: `Robin Something`,
    producer1: `Just One Person?`,
    studio: `Some Studio`,
    genre: `Alternative`,
    lyrics: `In a world... very long string`,
    trackNumber: 1,
    album: {
        name: `Origins`,
        cover: `imagine-dragons-natural.jpg`,
        year: 2018,
        artist: `Imagine Dragons`
    },
};


// Output:
// Artist Name - Track Name (123 seconds, 2000)
console.log(`${song.album.artist} - ${song.title} (${song.duration} seconds, ${song.album.year})`);

// CREATING DOCUMENT OUTPUT
// 1. Find the element within the document and store it
const eleTitle = document.getElementById(`title`);
// 2. Modify a property
eleTitle.innerHTML = song.title;

// ARTIST
const eleArtist = document.getElementById(`artist`);
eleArtist.innerHTML = song.album.artist;
//document.getElementById(`artist`).innerHTML = song.album.artist;

// ALBUM NAME
const eleAlbum = document.getElementById('album');
eleAlbum.innerHTML =  `Album: ${song.album.name}`;
// ALBUM YEAR
// GENRE
// DURATION

