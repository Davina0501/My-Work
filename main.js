img="";
objectDetector="";
status="";
objects=[];

function preload(){
    img=loadImage("download.jpg");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    background("pink");
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML=' Status: Detecting Objects';
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
    
}

function gotResults(error, results){
    
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function draw(){

    image(image, 0 , 0 , 600, 500)
}