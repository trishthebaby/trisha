
let yes_button = document.getElementById("yes-button");
let no_button = document.getElementById("no-button");
let cat = document.getElementById("cat");
let ps = document.getElementById("ask");

let lines = ["u sure?", "why?", "pls baby?", "don't do this", "i will cry", "a chance pls?", "love :("];
let counter = 0;

function no() {
    if (counter === 7) {
        window.location.href = "broken.html";
    } else {
        let currentSize = parseInt(window.getComputedStyle(yes_button, null).getPropertyValue('font-size'));
        let newSize = currentSize + 9;
    
        yes_button.style.fontSize = newSize + "px";
        cat.src = "./images/cat" + counter + ".jpg"
        no_button.textContent = lines[counter++];
    }

    
}

function yes(){
    window.location.href = "happyhappy.html"
}