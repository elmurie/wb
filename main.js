function createGrid() {
    const gridElement = document.querySelector('.grid');
    for (let i = 0; i < 37; i++) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        gridElement.appendChild(rowElement)
        for (let j = 0; j < 37; j++) {
            let squareElement = document.createElement('span');
            squareElement.classList.add('square');
            squareElement.classList.add('border');
            squareElement.title = `W : ${i + 1} - H : ${j + 1}`
            rowElement.appendChild(squareElement);
            squareElement.addEventListener('click', (ev) => ev.target.classList.toggle('black'))
        }
    }
}

const grid = createGrid();

let button = document.querySelector('[data-btn]')
let squares = document.querySelectorAll('.square');
let labels = document.querySelectorAll('.label')

button.addEventListener('click', () => {
    squares.forEach(square => square.classList.toggle('border'))
    labels.forEach(square => square.classList.toggle('opacity'))
})
