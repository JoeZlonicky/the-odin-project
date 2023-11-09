function promptForNewGrid() {
    let answer = prompt("Enter a grid size between 1 and 100");
    let n = parseInt(answer);

    if (!Number.isInteger(n) || n < 1 || n > 100) return;

    clearGrid();
    generateGrid(n);
}

function clearGrid() {
    let grid = document.querySelector('.grid');
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

function onCellHover(cell) {
    let r = randomColorValue();
    let g = randomColorValue();
    let b = randomColorValue();
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function generateGrid(n) {
    const TOTAL_WIDTH = 750;
    const TOTAL_HEIGHT = 750;
    const MARGIN = 1;
    
    let cellWidth = (TOTAL_WIDTH - (n - 1) * MARGIN) / n;
    let cellHeight = (TOTAL_HEIGHT - (n - 1) * MARGIN) / n;

    let grid = document.querySelector('.grid');
    for (let y = 0; y < n; ++y) {
        let row = document.createElement('div');
        row.style.display = 'flex';
        for (let x = 0; x < n; ++x) {
            let cell = document.createElement('div');
            
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellHeight}px`;
            cell.style.backgroundColor = 'red';
            cell.style.margin = `${MARGIN}px`;

            row.appendChild(cell);

            cell.addEventListener('mouseenter', _ => onCellHover(cell));
        }
        grid.appendChild(row);
    }

    let newGridButton = document.querySelector('.new-grid-button');
    newGridButton.addEventListener('click', promptForNewGrid);
}

generateGrid(16);