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


const eleSong = document.getElementById('song');
eleSong.innerHTML = `
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/en/9/95/Origins_cover.png" alt="Imagine Dragons - Origin">
    </div>
    <h1>${song.title}</h1>
    <h2>${song.album.artist}</h2>
    <ul>
        <li>Album: ${song.album.name}</li>
        <li>Relased: ${song.album.year}</li>
        <li>Genre: ${song.genre}</li>
        <li>Duration: ${song.duration} seconds</li>
    </ul>
`;
