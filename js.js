var pause = document.querySelector('#play');
var next = document.querySelector('#next');
var prev = document.querySelector('#prev');
var track = document.querySelector('#track');
var audio = document.getElementById("aud");

let audsrc = document.getElementById("audsrc");
let imgsrc = document.getElementById("imgsrc");
let tl = document.querySelector("h5");

let card = document.querySelector(".card")



let counter = 0;



let data = [{
        id: 0,
        imgsrc: "img/cow.jpg",
        audio: "audio/Doja Cat - MOOO! (Audio).mp3",
        titel : "moo doja cat"
    },
    {
        id: 1,
        imgsrc: "./img/dog.jpg",
        audio: "./audio/Ahwa Qamaran.mp3",
        titel : "Ahwa qamaran song"
    },
    {
        id: 2,
        imgsrc: "./img/cat.jpg",
        audio: "./audio/Pedro Capó, Farruko - Calma.mp3",
        titel : "calma song"
    },


];




(()=>{
    localdata = JSON.parse(localStorage.getItem("data"));
    audsrc.src = localdata.audio
    imgsrc.src = localdata.imgsrc;
    tl.innerHTML = localdata.titel;
    counter = localdata.id;
    track.max = audio.duration
    audio.load();

})()




next.addEventListener('click', () => {
    if (counter < data.length-1) {
        counter+= 1;
        audsrc.src = data[counter].audio
        imgsrc.src = data[counter].imgsrc;
        tl.innerHTML = data[counter].titel;
        pause.style.backgroundImage = " url(./img/pause-svgrepo-com.png)";
        audio.load();
        audio.play();
    };
    localStorage.setItem("data", JSON.stringify(data[counter]))
    

})

prev.addEventListener('click', () => {
    
    if (counter > 0) {
        counter-=1;
        audsrc.src = data[counter].audio
        imgsrc.src = data[counter].imgsrc;
        tl.innerHTML = data[counter].titel;
        audio.load();
        audio.play();
        pause.style.backgroundImage =" url(./img/pause-svgrepo-com.png)";
    };
    
    localStorage.setItem("data",JSON.stringify(data[counter]))

})


pause.addEventListener('click', () => {

    if (audio.paused) {
        audio.play()
        pause.style.backgroundImage =" url(./img/pause-svgrepo-com.png)";
       
    }
    else {
        audio.pause();
        pause.style.backgroundImage =" url(./img/play-svgrepo-com.png)";
      
    }    
})

audio.addEventListener("timeupdate", () => {
    track.max = audio.duration
    track.value = audio.currentTime;
});

track.addEventListener("input", () => {
    audio.currentTime = track.value
    audio.play()
})

