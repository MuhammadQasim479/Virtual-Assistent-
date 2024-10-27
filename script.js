let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");
// console.log(voice);


function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate =1;
    text_speak.volume =1;
    text_speak.pitch =1;
    text_speak.lang = "hi-GB";
    window.speechSynthesis.speak(text_speak); 
}

function WishME(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >=0 &&  hours <12){
        speak("good Morning Sir");
    }
    else if(hours >=12 && hours <16){
        speak("Good After noon Sir");
    }
    else{
        speak("good Evening Sir")
    }
}
// window.addEventListener('load', ()=>{
//     WishME();
// })

// let speechRecognition = window.speechRecognition || window.webkitSpeechRecognation
// let recognition =new speechRecognition();
// recognition.onresult = (event)=>{
//     let currentIndex = event.resultIndex;
//     let transcript = event.results[currentIndex][0].transcript;
//     console.log(event);
    
// }
// btn.addEventListener("click", ()=>{
//     recognition.start();
// })

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    // console.log(transcript); // Changed to log the transcript
    content.innerText = transcript
    takeCommand(transcript. toLowerCase())
    
};

btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

// give comand to shifra for opend multiple tabs like youtube chrome calculator etc...
function takeCommand(message){
    btn.style.display = "flex";
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("heelo sir how can i help you:)");
    }
    else if(message.includes("who are you")){
        speak("am a virtual assistent made by mr qasim ali");
    }
    else if(message.includes("open youtube")){
        speak("opening Youtube...")
        window.open("https://www.youtube.com/", "_blank");
    }
    else if(message.includes("open Google")){
        speak("opening google...");
        window.open("https://www.google.com/", "_blank");
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/", "_blank");
    }
    else if(message.includes("open calculator")){
        speak("opening calcultor...")
        window.open("calculator://");
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsap...")
        window.open("https://www.whatsapp.com/", "_blank");
    }
    // else{
    //     let finalText = "this is what i found on internet regarding" + message.replace("shipra", "")
    //     || message.replace("shifra", " ");
    //     speak(finalText);
    //     window.open(`https://www.google.com/search?q=$(message)`);
    // }

    else {
        let finalText = 
            "This is what I found on the internet regarding " + 
            message.replace("shipra", "").replace("shifra", " ");
        
        speak(finalText);
        
        // Open a new Google search with the user's message
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
    }
    
}




