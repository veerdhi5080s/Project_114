function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";
}

function draw(){
image(video,200,100,300,200);
fill("red");
stroke("black");
noFill();
rect(30, 20, 600, 400);
tint(tint_color);
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}

function take_snapshot(){
    save("filtered_picture.jpeg");
}

