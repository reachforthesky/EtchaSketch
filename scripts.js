let width = 16;
let height = 16;

createGrid(width, height);



//Create a grid with specified width and height
function createGrid(w,h) {
    const grid = document.querySelector("#grid")
    for(let i = 0; i < h; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < w; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", colorIn);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function colorIn(event){
    const square = event.target;
    square.style.backgroundColor = "black";
}