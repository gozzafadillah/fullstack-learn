# Homework Module 3.1

Ini merupakan langkah-langkah saya membuat collections pada mongoDB, dan disini tools yang saya gunakan adalah mongoDBCompass

```mongodb
<!-- create a database -->
use playlist

<!-- create collections -->
db.createCollection("songs")
db.createCollection("popularSongs")
db.createCollection("artist")

<!-- declarated a artists -->
artist = [
    {
        "name": "BMTH (Bring Me The Horizon)",
        "dob": "2004",
        "genre": ["Metalcore","Alternative Metal", "Alternative Rock", "Rock Pop"]
    },
    {
        "name": "While She Sleeps",
        "dob": "2006",
        "genre": ["Metalcore"]
    },
    {
        "name": "Linkin Park",
        "dob": "1996",
        "genre": ["Alternative Rock", "Metal", "Alternative Metal", "Rap Rock", "Electronic Rock", "Pop rock"]
    },
    {
        "name": "Eminem",
        "dob": "17 Oktober 1972",
        "genre": ["Hip Hop"]
    },
    {
        "name": "Nirvana",
        "dob": "1987",
        "genre": ["Rock","Punk Rock"]
    },
    {
        "name": "The Rolling Stones",
        "dob": "July 26, 1943",
        "genre": ["Rock", "Blues", "POP"]
    },
    {
        "name": "Led Zeppelin",
        "dob": "September 1968",
        "genre": ["Hard Rock", "Heavy Metal"]
    },
    {
        "name": "rokudenashi",
        "dob": "2011",
        "genre": ["POP", "J-Pop"]
    },
    {
        "name": "Avenged Sevenfold",
        "dob": "1999",
        "genre": ["Heavy Metal", "Alternative Metal", "Hard Rock", "Progressive Metal"]
    },
    {
        "name": "Muse",
        "dob": "1994",
        "genre": ["Heavy Metal", "Alternative Metal", "Hard Rock", "Progressive Rock"]
     },
]

<!-- added artist -->
db.artist.inserMany(artist)

<!-- declarated a songs -->
songs = [
    {
        "title": "Feel",
        "artist": ["While She Sleeps"],
        "album": "You Are We"
    },
    {
        "title":"Kingslayer",
        "artist":["BMTH", "Baby Metal"],
        "album":"Post Human: Survival Horror"
    },
    {
        "title":"Shadow Moses",
        "artist": ["BMTH"],
        "album":"Sempiternal",
    },
    {
        "title":"Venom",
        "artist":["Eminem"],
        "album":"Kamikaze"
    },
    {
        "title":"Stairway to Heaven",
        "artist":["Led Zeppelin"],
        "album":"Led Zeppelin IV"
    },
    {
        "title": "Smells Like Teen Spirit",
        "artist":["Nirvana"],
        "album":"Nevermind"
    },
    {
        "title":"One Voice",
        "artist":["Rokudenashi"],
        "album":"Viral Hits"
    },
    {
        "title":"So Far Away",
        "artist":["Avenged Sevenfold"],
        "album":"Nightmare"
    },
    {
        "title":"Silence Speaks",
        "artist":["While She Sleeps", "Oliver Skyes"],
        "album":"You Are We"
    },
    {
        "title":"Time is Running Out",
        "artist":["Muse"],
        "album":"Absolution"
    }
]
<!-- added songs -->
db.songs.inserMany(songs)

<!-- declarated a popular songs -->
popularSongs = [
  {
    title: "Feel",
    plays: 200000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Kingslayer",
    plays: 180000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Shadow Moses",
    plays: 160000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Venom",
    plays: 150000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Stairway to Heaven",
    plays: 140000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Smells Like Teen Spirit",
    plays: 130000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "One Voice",
    plays: 120000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "So Far Away",
    plays: 110000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Silence Speaks",
    plays: 100000,
    period: "1 Januari 2023 - 30 Juni 2023"
  },
  {
    title: "Time is Running Out",
    plays: 90000,
    period: "1 Januari 2023 - 30 Juni 2023"
  }
];

<!-- added popularSongs -->
db.popularSongs.insertMany(popularSongs)

```
