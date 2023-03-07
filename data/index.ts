const songs = [
  'Like a Rolling Stone',
  "(I Can't Get No) Satisfaction",
  'Imagine',

  "What's Going On",

  'Respect',

  'Good Vibrations',

  'Johnny B. Goode',

  'Hey Jude',

  'Smells Like Teen Spirit',

  "What'd I Say",

  'My Generation',

  'A Change Is Gonna Come',

  'Yesterday',

  "Blowin' in the Wind",

  'London Calling',

  'I Want to Hold Your Hand',

  'Purple Haze',

  'Maybellene',

  'Hound Dog',

  'Let It Be',

  'Born to Run',

  'Be My Baby',

  'In My Life',

  'People Get Ready',

  'God Only Knows',

  "(Sittin' On) The Dock of the Bay",

  'Layla',

  'A Day in the Life',

  'Help!',

  'I Walk the Line',
];

const movies = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Godfather: Part II',
  'The Dark Knight',
  '12 Angry Men',
  'Schindler"s List',
  'Pulp Fiction',
  'The Lord of the Rings: The Return of the King',
  'Il buono, il brutto, il cattivo',
  'Fight Club',
  'The Lord of the Rings: The Fellowship of the Ring',
  'Forrest Gump',
  'Star Wars: Episode V - The Empire Strikes Back',
  'Inception',
  'The Lord of the Rings: The Two Towers',
  'One Flew Over the Cuckoo"s Nest',
  'Goodfellas',
  'The Matrix',
  'Shichinin no samurai',
  'Star Wars',
  'Cidade de Deus',
  'Se7en',
  'The Silence of the Lambs',
  'It"s a Wonderful Life',
  'La vita è bella',
];

function getRandomItem(arr) {
  return () => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };
}

const song = getRandomItem(songs);
const movie = getRandomItem(movies);

export { song, movie };
