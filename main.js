music_1="";
music_2="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    background("pink");
    video=createCapture(VIDEO);
    video.hide();
}

function preload(){
    music_1= loadSound("music.mp3");
    music_2= loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
}