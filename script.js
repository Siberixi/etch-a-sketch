for(let i = 0; i < 100; i++){
    document.getElementById("container").innerHTML += `<div id="cell">${i}</div>`;
}
const cells = document.querySelectorAll("#cell");
for(let j = 0; j < cells.length; j++){
    const cell = cells[j];
    cell.addEventListener('mouseover', () => {
        cell.classList.add("activated");
    });
}