const songs = [
  'Bleeding Love',
  "Don't Forget",
  'Finish',
  'In the Rain',
  'Ready to Fall',
  'Realize',
  'Righted All Your Wrongs',
  'These Walls',
];

function getRandomItem(arr) {
  return () => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };
}

const song = getRandomItem(songs);

export { song };
