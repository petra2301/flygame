let fly = document.querySelector("#fly");
let flySound = document.querySelector("#flySound");
let body = document.querySelector("body");
let slapSound = document.querySelector("#slapSound");
let intro = document.querySelector("#start");
let paused = true;
let myInt;

// HIDE INTRO BOX AND START
intro.addEventListener("click", startPlaying)

function startPlaying() {
    intro.style.display = "none";
    flyFlies();
    flySound.play();
    flySound.loop = true;
    myInt = setInterval(flyFlies, 1000);
    fly.style.backgroundImage = "url('fly.png')"
    paused = false;
}

// MOVING FLY

function flyFlies() {
    fly.style.left = (Math.random() * 90) + "vw"
    fly.style.top = (Math.random() * 90) + "vh"
    fly.style.transform = "rotate(" + 360 * Math.random() + "deg)"
}

// CLICK & AFTER
fly.addEventListener("click", deadFly)

function deadFly() {
    if (paused) {
        flyFlies();
        flySound.play();
        flySound.loop = true;
        myInt = setInterval(flyFlies, 1000);
        fly.style.backgroundImage = "url('fly.png')"
        paused = false;
    } else {
        flySound.pause()
        slapSound.play()
        clearInterval(myInt)
        fly.style.backgroundImage = "url('deadfly.png')"
        paused = true;
    }
}
