song="";

difference=0;

leftWristX=0;
rightWristY=0;


function preload() {

song=loadSound("this is avengers level threat.mp3");

}

function play() {

song.play();
song.setVolume(1.0);
song.rate(1.2);

}


function setup() {

canvas= createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}

function modelLoaded() {

    console.log('Posenet Neautralized');


}

function draw() {

image(video, 0, 0, 600, 500);


}

function gotPoses(results) {

    if(results.length>0) {
    
        console.log(results);
        
        leftWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("leftWristX = "+leftWristX+"rightWristY= "+rightWristY);
    }
}