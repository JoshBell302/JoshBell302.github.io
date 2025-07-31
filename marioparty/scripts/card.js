export function createCards(grid, icons) {
    console.log(`Icons: ${icons[0].image}`)
    // Create the cells
    for (let i = 0; i < icons.length; i++) {
        // Create the divs to hold the Icon information
        const div = document.createElement("div");
        const detailsDiv = document.createElement("div");
        div.classList.add("infoCard");
        detailsDiv.classList.add("infoDetails");
        
        // Clone the image so multiple images can be used
        const image = icons[i].image.cloneNode();
        image.classList.add("infoImage");
        div.appendChild(image)

        // Create a label for the name of the item to also be viewed
        const labelName = document.createElement("span");
        labelName.classList.add("infoName");
        labelName.textContent = icons[i].name;
        detailsDiv.appendChild(labelName);

        // If an Icon has a description add it to the 
        if (icons[i].description != null) {
            const labelDescription = document.createElement("span")
            labelDescription.classList.add("infoDescription")
            labelDescription.textContent = icons[i].description
            detailsDiv.appendChild(labelDescription);
        }
        div.appendChild(detailsDiv)
        grid.appendChild(div);
    }
}