const container = document.querySelector(`#container`)

for (let index = 0; index < 16 * 16; index++) {
    const square = document.createElement(`div`);
    square.classList.add('square');
    container.appendChild(square);   
}
const squares = document.querySelectorAll('div.square');
squares.forEach((square) => {
    square.addEventListener('hover', () => {
        square.style.backgroundColor = 'red';
    });
    });
