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