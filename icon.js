class Icon {
    // Constructing the class
	constructor(name, image, color) {
		// Create the image object for the class
		const newImage = new Image();
		newImage.src = image

		this.name = name; // name for the icon
		this.image = newImage; // Image object of the icon
		this.color = color; // Hexcolor for wheel
	}
}