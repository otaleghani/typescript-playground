// In this first example, every item is available in memory, so it works

// function getSong() {
//   let _song = '';
//   let i = 100;
//   for (i; i > 0; i -= 1) {
//     _song += `${i} bears on the wall ${i-1} bottles of bears`;
//   }
// 
//   return _song;
// }
// 
// function singSong(_song){
//   if (!_song) throw new Error("Song is empty");
//   console.log(_song)
// }
// 
// const song = getSong();
// singSong(song);

// Here is not available in memory. Reason is that setTimeout stores the data elsewhere in bus, so the data is scheduled for pickup at a later time
function getSong() {
  let _song = '';
  let i = 100;
  for (i; i > 0; i -= 1) {
    setTimeout(function () {
      _song += `${i} bears on the wall ${i-1} bottles of bears`;
    }, 0)
  }

  return _song;
}

function singSong(_song){
  if (!_song) throw new Error("Song is empty");
  console.log(_song)
}

const song = getSong();
singSong(song);

// So to work with js you'll need to keep in mind async flow. You have 3 patterns that you can use
// 1. IN SERIES (func -> callback -> callback -> final)
// 2. PARALLEL (list.forEach...)
// 3. LIMITED PARALLEL (limiting a parallel exec.)
