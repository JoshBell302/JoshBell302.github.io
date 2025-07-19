function roulette(cells, icons, button) {
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
                alert(`Selected: ${result.textContent}`);
                    
                // Remove the active class and reenable the button
                cells[cellNode.head].classList.remove("activeCell");
                button.disabled = false;
            }, 200); 
        }
    }

    // Begin the animation of roulette
    active();
}