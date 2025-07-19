export function roulette(cells, icons, button) {
    // Set up cell nodes to create the simulation of roulette
    let cellNode = {head: 0, tail: 0}
    let totalSteps = Math.floor(Math.random() * icons.length) + (icons.length * 3);
    let delay = 100;
    let step = 0;

    function active() {
        // Clear previous cell and add new one
        cells[cellNode.tail].classList.remove("activeCell");
        cells[cellNode.head].classList.add('activeCell');

        // Check to see if we have reached final step
        if (step < totalSteps) {
            // Adjust cellNode
            step++;
            cellNode.tail = cellNode.head;
            cellNode.head = (cellNode.head + 1) % icons.length;

            // Slow down the step per each step
            delay += 10;
            setTimeout(active, delay);
        } 
        else {
            // Set a short delay to have final cell light up
            setTimeout(() => {
                const result = cells[cellNode.head];

                // Alert user of selected cell
                alert(`${result.textContent}`);
                    
                // Remove the active class and reenable the button
                cells[cellNode.head].classList.remove("activeCell");
                button.disabled = false;
            }, 200); 
        }
    }

    // Begin the animation of roulette
    active();
}

function randomIcons(number, allIcons) {
    let index = 0;
    let randomIcons = [];
    for (let i = 0; i < number; i++) {
        index = Math.floor(Math.random() * allIcons.length);
        randomIcons.push(allIcons.splice(index, 1)[0]);
    }
    return randomIcons;
}

export function cellsWithImage(grid, cells, icons, numberOfRandom = 0) {
    // Set the icons to be used incase for random ones
    let iconsToUse = icons;
    if (numberOfRandom != 0) {
        iconsToUse = randomIcons(numberOfRandom, icons)
    }

    // Create the cells
    for (let i = 0; i < iconsToUse.length; i++) {
        // Create the div to hold the item and item name
        const div = document.createElement("div");
        div.classList.add("itemCell");
        div.classList.add("cell");
        
        // Clone the image so multiple images can be used if needed with set sizes
        const img = iconsToUse[i].image.cloneNode();
        img.style.width = "50px";
        img.style.height = "auto";

        // Create a label for the name of the item to also be viewed
        const label = document.createElement("span");
        label.textContent = iconsToUse[i].name;

        // Add elements to the div and then push the div to the rouletteSelector
        div.appendChild(img)
        div.appendChild(label);
        
        grid.appendChild(div);
        cells.push(div);
    }
    return iconsToUse
}

export function cellsWithoutImage(grid, cells, icons, numberOfRandom = 0) {
    // Set the icons to be used incase for random ones
    let iconsToUse = icons;
    if (numberOfRandom != 0) {
        iconsToUse = randomIcons(numberOfRandom, icons)
    }

    // Create the cells
    for (let i = 0; i < iconsToUse.length; i++) {
        // Create the div to hold the item and item name
        const div = document.createElement("div");
        div.classList.add("gameCell");
        div.classList.add("cell");

        // Create a label for the name of the item to also be viewed
        const label = document.createElement("span");
        label.textContent = iconsToUse[i].name;

        // Add elements to the div and then push the div to the rouletteSelector
        div.appendChild(label);
        
        grid.appendChild(div);
        cells.push(div);
    }
    return iconsToUse
}