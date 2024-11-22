img = "";
status = "";
function setup()
{
    
    objectDetector = ml5.objectDetector('cocossd' ,modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload()
{
    img = loadImage("dog_cat.jpg");
}
function draw()
{
    
}
function modelLoaded()
{
    console.log("model loaded");
    status = true;
    objectDetector.detect(img ,gotResults);
}
function gotResults(error,results)
{
    if (error) {
    console.error(error);   
    } else {
    console.log(results);   
    }
}