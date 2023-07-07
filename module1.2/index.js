// data source
const songs = [
  {
    title: "Song 1",
    artists: [{ name: "Asep" }],
    duration: 200,
  },
];

// Function promise get songs
function getSongList() {
  return new Promise((resolve, reject) => {
    try {
      resolve(songs);
    } catch (error) {
      reject(error);
    }
  });
}

// Version using async/await
async function songAsync() {
  try {
    const songs = await getSongList();
    songs.forEach((song) => {
      console.log(`title: ${song.title}`);
      console.log(`artist: ${song.artists[0].name}`);
      setTimeout(() => {
        console.log(`durasi: ${song.duration} \n`);
      }, song.duration);
    });
  } catch (err) {
    console.error("error:", err.message);
  }
}

// Run app
console.log(`App start`);
songAsync();
