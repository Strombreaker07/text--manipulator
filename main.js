noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoadec);
    poseNet.on('pose', gotPoses);
}

function modelLoadec()
{
    console.log('Model is Loaded!')
}

function draw()
{
    background('#DAD3D3');
    document.getElementById("ans").innerHTML = "Width and height of square will be " + difference + "px";
    fill('#000000');
    stroke('#000000');
    textSize(difference)
    text("shourya", 50, 150)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY = "+noseY)

        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftWristX = " + leftwristX + "rightWristX = "+ rightwristX + "Difference = " + difference);
    }
}