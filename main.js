function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);

    fill(0, 256, 256);
    stroke(0, 256, 256);
    ellipse(60, 46, 55, 55);
    ellipse(580, 46, 55, 55);

    fill(150, 0, 150);
    stroke(150, 0, 150);
    rect(90, 40, 460, 20, 20, 15, 10, 5);
    rect(90, 420, 460, 20, 20, 15, 10, 5);
    rect(50, 75, 20, 315, 20, 15, 10, 5);
    rect(570, 75, 20, 315, 20, 15, 10, 5);

    fill(0, 256, 256);
    stroke(0, 256, 256);
    ellipse(60, 46, 55, 55);
    ellipse(60, 420, 55, 55);
    ellipse(578, 420, 55, 55);
}