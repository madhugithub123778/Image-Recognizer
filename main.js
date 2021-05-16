Webcam.set({
height: 300,
width: 350,
image_format: "png",
png_quality: 90});

cam = document.getElementById("camera");
Webcam.attach(cam);

function takePic(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML= '<img id="cap_img" src="'+data_uri+'"/>';
});}

console.log('ml5 version: ', ml5.version);

identifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/p0oGAhe2o/model.json",modelLoaded);

function modelLoaded(){
console.log("Model has loaded");}


function identify(){
my_image = document.getElementById("cap_img");
identifier.classify(my_image, gotResult);}

function gotResult(error, results){
if (error){
console.log(error);}
else{
console.log(results);
document.getElementById("object_name").innerHTML= results[0].label;
document.getElementById("accuracy_percent").innerHTML= results[0].confidence.toFixed(3);}

    
}

