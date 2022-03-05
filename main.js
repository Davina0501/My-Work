music_1="";
music_2="";
rightwristX=0;
rightwristY=0;
leftwristX=0;
leftwristY=0;
song1_status="";
song2_status="";
scoreleftwrist=0;
scorerightwrist=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    background("pink");
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function preload(){
    music_1= loadSound("music.mp3");
    music_2= loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    song1_status=music_1.isPlaying();
    song2_status=music_2.isPlaying();
    if(scorerightwrist>0.2){
        circle(rightwristX,rightwristY,20);
        music_2.stop();
        if(song1_status==false){
            music_1.play();
            document.getElementById("song").innerHTML= "Playing Harry Potter theme song";
        }
    }
 if(scoreleftwrist>0.2){
     circle(leftwristX,leftwristY,20);
     music_1.stop();
   if(song2_status==false){
         music_2.play();
         document.getElementById("song").innerHTML= "Playing Peter Pan song";
     }
 }
}

function modelLoaded(){

    console.log('Model Loaded');
}


function gotPoses(results){

    if(results.length > 0){
        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        scoreleftwrist=results[0].pose.keypoints[9].score;
        scorerightwrist=results[0].pose.keypoints[10].score;
        console.log("rightwristX" + rightwristX + "rigthwristY" + rightwristY);
        console.log("leftwristX" + leftwristX + "leftwristY" + leftwristY);
    }
}
