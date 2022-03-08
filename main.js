img="";

function preload(){
    img=loadImage("catanddog.jpg");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    background("pink");
}

function draw(){
    image(img,0,0,600,500);
    fill(0,0,255);
    text('dog',45,75);
    noFill();
    rect(30,60,450,350);
}