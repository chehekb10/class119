function preload(){
}
function draw(){
    image(video, 0, 0, 280, 250);
    classifier.classify(video, gotResult);
}
function setup(){
    canvas= createCanvas(280, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_1v76WGps/model.json", modelLoaded);
}
function modelLoaded()
{
    console.log("Model Loaded!");
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("obj_name").innerHTML=results[0].label;
        document.getElementById("obj_acc").innerHTML=results[0].confidence.toFixed(3);
    }
}