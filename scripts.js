let width = 16;
let height = 16;

const reset = document.querySelector("#reset");
createGrid(width, height);
reset.addEventListener("click",resetAll);




//Create a grid with specified width and height
function createGrid(w,h) {
    const grid = document.querySelector("#grid")
    for(let i = 0; i < h; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < w; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.dataset.brightness = 100;
            square.addEventListener("mouseover", colorIn);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function colorIn(event){
    const square = event.target;
    if(square.style.backgroundColor == ""){
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        square.style.backgroundColor = 
            `rgba(${r},${g},${b},1)`;
    }
    else {
        let tempBright = square.dataset.brightness;
        if (tempBright > 0)
            tempBright -= 10;
        square.style.filter = `brightness(${tempBright}%)`;
        square.dataset.brightness = tempBright;
    }
}

function resetAll() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(resetSquare);
}

function resetSquare(s) {
    s.style.backgroundColor = "";
    s.dataset.brightness = 100;
    s.style.filter = "brightness(90)";
}
