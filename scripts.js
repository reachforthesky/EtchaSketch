let width = 16;
let height = 16;

const reset = document.querySelector("#reset");
createGrid(width, height);
reset.addEventListener("click",resetAll);




//Create a grid with specified width and height
function createGrid(w,h) {
    const grid = document.querySelector("#grid");
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

//colors in hovered square with random color,
//or darkens if there is already a color
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

//resets the grid to have blank squares according to the
//size input by the user
function resetAll() {
    const rows = document.querySelectorAll(".row");
    rows.forEach(clearRow);
    const size = document.querySelector("#size");
    sideSize = Math.min(size.value,100);
    size.value = sideSize;
    let h = sideSize;
    let w = sideSize;
    createGrid(w,h);
}

//removes a row from the grid
function clearRow(r) {
    const grid = document.querySelector("#grid");
    grid.removeChild(r);
}
