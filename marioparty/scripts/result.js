function hexToRBGA(hex) {
    hex = hex.replace("#", "");
    const parsedInt = parseInt(hex, 16);
    return [(parsedInt >> 16) & 255, (parsedInt >> 8 & 255), parsedInt & 255, 255];
}

function compareRGBA(rgba1, rgba2) {
    // Ensure lengths are the same
    if (rgba1.length !== rgba2.length) {
        return false;
    }

    // Compare each variable in the RGBA array
    for (let i = 0; i < rgba1.length; i++) {
        if (rgba1[i] !== rgba2[i]) {
            // Inequality found
            return false;
        }
    }
    return true;
}

export function sliceResult(resultRGBA, activeIcons) {
    let noMatch = true;
    // Go thorugh all active Icons to find a match based on pixel data and rgb
    console.log(activeIcons)
    for (const icon of activeIcons) {
        const iconRGBA = hexToRBGA(icon.color);
        if (compareRGBA(iconRGBA, resultRGBA)) {
            // Alert the user for which slice was landed on
            noMatch = false;
            alert(`${icon.name}`);
            break;
        }
    }

    // If none were selected then alert them to spin again
    if (noMatch) {
        alert("Spin again!");
    }
}

export function chanceTimeResult(rgbas, mainIcons, centerIcons) {
    let matches = [];
    // Go through the list of rgba value results and match it to icon data
    for (let i = 0; i < rgbas.length; i++) {
        if (rgbas[i] === null) {
            // If a null value is found then all wheels have yet to be spun so we must wait untill all are ready
            return
        }
        // Determine center result
        if (i == 1) {
            for (const icon of centerIcons) {
                const iconRGBA = hexToRBGA(icon.color);
                if (compareRGBA(iconRGBA, rgbas[i])) {
                    matches.push(icon.name)
                }
            }
        }
        // Determine left and right result
        else {
            for (const icon of mainIcons) {
                const iconRGBA = hexToRBGA(icon.color);
                if (compareRGBA(iconRGBA, rgbas[i])) {
                    matches.push(icon.name)
                }
            }
        }
    }

    // If two characters are the same then alert for a reroll
    if (matches[0] === matches[2]) {
        alert("You cannot chance time with the same character twice, spin again!")
    }
    else {
        // With all the matches alert the user with a proper result of chance time
        alert(`${matches[0]} ${matches[1]} ${matches[2]}`)
    }

}