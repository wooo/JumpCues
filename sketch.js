var song;
var button;
var jumpButton;



function setup() {
  createCanvas(200, 200);
  song = loadSound("rainbow.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  background(51);

  song.addCue(2, changeBackground, color(0, 0, 255));
  song.addCue(4, changeBackground, color(255, 0, 255));
  song.addCue(6, changeBackground, color(0, 100, 255));


}


function changeBackground(col) {
  background(col);
}

function jumpSong() {
  var len = song.duration();
  var t = 0; //random(len);
  console.log(t);
  song.jump(t);
}


function draw() {
  //if (song.currentTime() > 5) {
  //  background(song.currentTime()*10, 0, 255);
  //}
}

function loaded() {
  console.log("loaded");
}


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");

  } else {
    song.pause();
    button.html("play");

  }
}


function draw() {

}