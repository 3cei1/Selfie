var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

speechRecognition.onResult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript; 
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
}

recognition.onresult = function(event) { 
    console.log(event); 
    var Content = event.results[0][0].transcript; 
    console.log(Content); 
    document.getElementById("textbox").innerHTML = Content; 
    if(Content == "Toma mi selfie") {
        console.log("Toma mi selfie----");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    SVGAElement(z)
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}

function save() {
link = document.getElementById("link");
image = document.getElementById("selfie_image").src ;
link.href = image;
link.click();
}