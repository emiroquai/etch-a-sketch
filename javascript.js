const container = document.querySelector(`#container`)
const setGrid = document.querySelector(`#setGrid`)

let gridDim = 16;


createGrid(gridDim);

function createGrid(gridDim) {
    for (let index = 0; index < (gridDim * gridDim); index++) {
        const square = document.createElement(`div`);
        let squareSize = 600 / gridDim - 4;
        square.classList.add('square');
        square.style.width = squareSize + "px";
        container.appendChild(square);   
        }
    hoverColorChange();
}


function hoverColorChange() {
let squares = document.querySelectorAll('div.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'red';
    });
    });
}

setGrid.addEventListener('click', () => {
    gridDim = prompt("Set grid dimension");
    if (gridDim > 100) {
        gridDim = 100;
    }
    removeGrid();
    createGrid(gridDim);
})  

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}