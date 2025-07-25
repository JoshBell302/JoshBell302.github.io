class Icon {
    // Constructing the class
	constructor(name, imagePath, color) {
		this.name = name; // name for the icon
		this.image = new Image (); // Image object of the icon
		this.color = color; // Hexcolor for wheel

		// Return a promise to ensure image is ready
		this.image.src = imagePath;
		this.ready = new Promise((resolve) => {
			this.image.onload = () => resolve(this)
			this.image.onerror = () => reject(new Error(`Failed to load image: ${imagePath}`));
		});
	}
}

// All Icons to be used thorught the project
// Character Icons
const marioIcon = new Icon("Mario", "../images/characters/mario_icon.png", "#e52521");
const luigiIcon = new Icon("Luigi", "../images/characters/luigi_icon.png", "#4cbb17");
const peachIcon = new Icon("Peach", "../images/characters/peach_icon.png", "#f192bd");
const booIcon = new Icon("Boo", "../images/characters/boo_icon.png", "#eaf9fe");
const paulineIcon = new Icon("Pauline", "../images/characters/pauline_icon.png", "#810000");
const yoshiIcon = new Icon("Yoshi", "../images/characters/yoshi_icon.png", "#68d154");
const plantIcon = new Icon("Piranha Plant", "../images/characters/plant_icon.png", "#158371");
const royIcon = new Icon("Roy", "../images/characters/roy_icon.png", "#61317d");
const waluigiIcon = new Icon("Waluigi", "../images/characters/waluigi_icon.png", "#7e0cd6");
const bowserIcon = new Icon("Bowser", "../images/characters/bowser_icon.png", "#10a30c");
const rosalinaIcon = new Icon("Rosalina", "../images/characters/rosalina_icon.png", "#00e6e6");
const lumaIcon = new Icon("Luma", "../images/characters/luma_icon.png", "#ffd700");
const shyguyIcon = new Icon("Shy Guy", "../images/characters/shyguy_icon.png", "#aa0055");

export let allCharacterIcons = [
	marioIcon, luigiIcon, peachIcon, booIcon, paulineIcon, yoshiIcon, plantIcon, royIcon, waluigiIcon, bowserIcon,
	rosalinaIcon, lumaIcon, shyguyIcon
];
export let someCharacterIcons = [
	marioIcon, luigiIcon, peachIcon, waluigiIcon, bowserIcon, shyguyIcon, rosalinaIcon
];

// Item Icons
const mushroomIcon = new Icon("Mushroom", "../images/items/mushroom.png", null); 
const doubleDiceIcon = new Icon("Double Dice", "../images/items/double_dice.png", null); 
const mirrorIcon = new Icon("Mirror", "../images/items/mirror.png", null);
const tripleDiceIcon = new Icon("Triple Dice", "../images/items/triple_dice.png", null);
const chompCallIcon = new Icon("Chomp Call", "../images/items/chomp_call.png", null);
const customDiceIcon = new Icon("Custom Dice", "../images/items/custom_dice.png", null);
const pipeIcon = new Icon("Pipe", "../images/items/pipe.png", null);
const goldenPipeIcon = new Icon("Golden Pipe", "../images/items/golden_pipe.png", null);
const paydayDoubleIcon = new Icon("Double Payday Dice", "../images/items/payday_double.png", null);
const paydayTripleIcon = new Icon("Triple Payday Dice", "../images/items/payday_triple.png", null);
const superMirrorIcon = new Icon("Super Mirror", "../images/items/super_mirror.png", null);

export let itemSpaceIcons = [
	mushroomIcon, doubleDiceIcon, mirrorIcon, tripleDiceIcon, chompCallIcon, pipeIcon
];

// Chance Time Icons
const left20 = new Icon("will recieve 20 coins from", "../images/chancetime/give_left_20.png", "#b3bca5")
const right20 = new Icon("has to give 20 coins to", "../images/chancetime/give_right_20.png", "#b2bba5")
const left30 = new Icon("will recieve 30 coins from", "../images/chancetime/give_left_30.png", "#b2bba4")
const right30 = new Icon("has to give 30 coins to", "../images/chancetime/give_right_30.png", "#b4bda7")
const swapcoins = new Icon("has to swap coins with", "../images/chancetime/swap_coins.png", "#b3c098")
const leftstar = new Icon("will recieve a star from", "../images/chancetime/give_left_star.png", "#bdcbae")
const rightstar = new Icon("has to give a star to", "../images/chancetime/give_right_star.png", "#bccaad")
const swapstars = new Icon("has to swap stars with", "../images/chancetime/swap_stars.png", "#afc4a0")
const swapall = new Icon("has to swap both stars and coins with", "../images/chancetime/swap_all.png", "#aabc95")

export let chanceTimeIcons = [
	left20, right20, left30, right30, swapcoins, leftstar, rightstar, swapstars, swapall
];

// Game Icons
const musicalChairsIcon = new Icon("Musical Chairs", "../images/other/question_mark.jpg", null); 
const redlLightGreenLightIcon = new Icon("Red Light Green Light", "../images/other/question_mark.jpg", null);
const messyMemoryIcon = new Icon("Messy Memory", "../images/other/question_mark.jpg", null); 
const lucyCupIcon = new Icon("Lucky Cup", "../images/other/question_mark.jpg", null); 
const coinPongIcon = new Icon("Coin Pong", "../images/other/question_mark.jpg", null); 
const chopstickRelayIcon = new Icon("Chopstick Relay", "../images/other/question_mark.jpg", null); 
const bobbingForApplesIcon = new Icon("Bobbing for Apples", "../images/other/question_mark.jpg", null); 
const makingFacesIcon = new Icon("Making Faces", "../images/other/question_mark.jpg", null); 
const luckOfTheDiceIcon = new Icon("Luck of the Dice", "../images/other/question_mark.jpg", null); 
const passTheWaterIcon = new Icon("Pass the Water", "../images/other/question_mark.jpg", null); 
    
export let freeForAllMinigameIcons = [
	musicalChairsIcon, redlLightGreenLightIcon, messyMemoryIcon, lucyCupIcon, coinPongIcon
];
export let teamMinigameIcons = [
	chopstickRelayIcon, bobbingForApplesIcon, makingFacesIcon, luckOfTheDiceIcon, passTheWaterIcon
];

// Lucky Space Icons
const recieve5CoinsIcon = new Icon("Recieve 5 Coins", "../images/items/coin.png", null);
const recieve7CoinsIcon = new Icon("Recieve 7 Coins", "../images/items/coin.png", null);
const recieve10CoinsIcon = new Icon("Recieve 10 Coins", "../images/items/coin.png", null);
const recieve12CoinsIcon = new Icon("Recieve 12 Coins", "../images/items/coin_stack.png", null);
const recieve15CoinsIcon = new Icon("Recieve 15 Coins", "../images/items/coin_stack.png", null);
const recieve20CoinsIcon = new Icon("Recieve 20 Coins", "../images/items/coin_stack.png", null);
const recievedoubleIcon = new Icon("Recieve Double Dice", "../images/items/double_dice.png", null);
const recieveTripleIcon = new Icon("Recieve Triple Dice", "../images/items/triple_dice.png", null);
const recieveCustomIcon = new Icon("Recieve a Custom Dice", "../images/items/custom_dice.png", null)
const recieveMushroomIcon = new Icon("Recieve a Mushroom", "../images/items/mushroom.png", null);
const recieveMirrorIcon = new Icon("Recieve a Mirror", "../images/items/mirror.png", null);

export let allLuckyIcons = [
	recieve5CoinsIcon, recieve7CoinsIcon, recieve10CoinsIcon, recieve12CoinsIcon, recieve15CoinsIcon, recieve20CoinsIcon,
	recievedoubleIcon, recieveTripleIcon, recieveCustomIcon, recieveMushroomIcon, recieveMirrorIcon
];

// Bowser Space Icons
const lose10Coins = new Icon("Lose 10 Coins", "../images/other/question_mark.jpg", null);
const lose15Coins = new Icon("Lose 15 Coins", "../images/other/question_mark.jpg", null);
const lose20Coins = new Icon("Lose 20 Coins", "../images/other/question_mark.jpg", null);
const lose30Coins = new Icon("Lose 30 Coins", "../images/other/question_mark.jpg", null);
const loseHalfCoins = new Icon("Lose Half your Coins", "../images/other/question_mark.jpg", null);
const allLose10Coins = new Icon("Everyone Lose 10 Coins", "../images/other/question_mark.jpg", null);
const loseAStar = new Icon("Lose a Star", "../images/other/question_mark.jpg", null);

export let allBowserIcons = [
	lose10Coins, lose15Coins, lose20Coins, lose30Coins, loseHalfCoins, allLose10Coins, loseAStar
];