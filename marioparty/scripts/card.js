import { getAllActivePlayers, getAllActiveItems } from "./api.js";
import { allCharacterIcons } from "./icon.js";
import { allItemIcons } from "/marioparty/scripts/icon.js";

const MAX_ITEM_SIZE = 3;

export function createCards(grid, icons) {
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

export function findMatchingItemIconsByPlayer(player, activeItems, iconsList) {
    let matches = [];
    // Loop through the list of Active Items given and add matches to 
    for (let i = 0; i < activeItems.result.length; i++) {
        if (player.id == activeItems.result[i].player_id) {
            matches.push(findMatchingCharacterIconbyName(activeItems.result[i].item_name, iconsList));
        }
    }
    return matches;
}

export function findMatchingCharacterIconbyName(searchingName, iconsList) {
    // Loop through the list of Icons given and return match
    for (let i = 0; i < iconsList.length; i++) {
        if (searchingName == iconsList[i].name) {
            console.log(`Match found ${iconsList[i].name}`)
            return iconsList[i];
        }
    }
    console.log(`No match for name ${searchingName} in Icon list`)
    return null;
}

export async function createDashboardCards (grid) {
    // Gather Active information
    const activePlayers = await getAllActivePlayers();
    console.log('Parsed active players:', activePlayers);

    const activeItems = await getAllActiveItems();
    console.log('Parsed active items:', activeItems);

    // Organize Information for cards
    for(let i = 0; i < activePlayers.results.length; i++) {
        const div = document.createElement("div");
        div.classList.add("playerCard");
        const player = activePlayers.results[i];

        // Create image for card
        const characterIcon = findMatchingCharacterIconbyName(player.character_name, allCharacterIcons);
        const image = characterIcon.image.cloneNode();
        image.classList.add("characterImg");
        div.appendChild(image);

        // Create name information
        const labelName = document.createElement("span");
        labelName.classList.add("playerName");
        labelName.textContent = `${player.name} (${player.character_name})`;
        div.appendChild(labelName);

        // Create Coin and Star information
        const dataDiv = document.createElement("div");
        dataDiv.classList.add("stats");

        const coinDiv = document.createElement("div");
        const coinImage = new Image(50,50);
        coinImage.src = "/marioparty/images/items/coin.png";
        coinImage.alt = "Coins:";
        coinImage.style = "vertical-align:middle;";
        const coinNumber = document.createElement("strong");
        coinNumber.textContent = player.coins;
        coinNumber.style = "margin-left: 8px;"
        coinDiv.appendChild(coinImage);
        coinDiv.appendChild(coinNumber);
        
        const starDiv = document.createElement("div");
        const starImage = new Image(50,50);
        starImage.src = "/marioparty/images/items/star.png";
        starImage.alt = "Stars:";
        starImage.style = "vertical-align:middle;";
        const starNumber = document.createElement("strong");
        starNumber.textContent = player.stars;
        starNumber.style = "margin-left: 15px;"
        starDiv.appendChild(starImage);
        starDiv.appendChild(starNumber);

        dataDiv.appendChild(coinDiv);
        dataDiv.appendChild(starDiv);
        div.appendChild(dataDiv);

        // Create Item information
        const itemsDiv = document.createElement("div");
        itemsDiv.classList.add("itemsSection");

        const itemTitleDiv = document.createElement("div");
        itemTitleDiv.classList.add("itemsTitle");
        itemTitleDiv.textContent = "Items";
        itemsDiv.appendChild(itemTitleDiv);

        const itemIcons = findMatchingItemIconsByPlayer(player, activeItems, allItemIcons);
        const itemListDiv = document.createElement("div");
        itemListDiv.classList.add("itemList");
        for (let i = 0; i < MAX_ITEM_SIZE; i++) {
            const itemIconDiv = document.createElement("div");
            itemIconDiv.classList.add("itemSlot");
            if (i+1 <= itemIcons.length) {
                const itemImage = itemIcons[i].image.cloneNode();
                itemImage.style.width = "50px";
                itemImage.style.height = "auto";
                itemIconDiv.appendChild(itemImage)
            }
            else {
                const itemImage = new Image(50, 50);
                itemImage.src = "/marioparty/images/other/question_mark.jpg";
                itemIconDiv.appendChild(itemImage)
            }
            itemListDiv.appendChild(itemIconDiv)
        }
        div.appendChild(itemListDiv)
        grid.appendChild(div);
    }
}