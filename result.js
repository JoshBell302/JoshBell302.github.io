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

function sliceResult(resultRGBA, activeIcons) {
    let noMatch = true;
    // Go thorugh all active ICons to find a match based on pixel data and rgb
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