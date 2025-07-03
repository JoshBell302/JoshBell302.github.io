class Wheel {
	// Constructing the class
	constructor(center, radius, colors) {
		this.center = center; // {x, y}
		this.radius = radius; // Float
		this.colors = colors; // Array
	}

	// Draw the slices of the wheel
	draw(context, angle) {
		const sliceCount = this.colors.length;

		for (let i = 0; i < sliceCount; i++) {
			// Gather data for the abgles of the slices
			const startAngle = angle + 2 * Math.PI * (i / sliceCount)
			const endAngle = angle + 2 * Math.PI * ((i + 1) / sliceCount)

			// Begin drawing the slices
			context.beginPath()
			context.moveTo(center.x, center.y);
			context.arc(center.x, center.y, this.radius, startAngle, endAngle)
			context.fillStyle = this.colors[i]
			context.fill();

		}
	}
}