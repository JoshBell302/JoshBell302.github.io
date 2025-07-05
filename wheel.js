class Wheel {
	// Constructing the class
	constructor(center, radius, colors) {
		this.center = center; // {x, y}
		this.radius = radius; // Float
		this.colors = colors; // Array of colors
	}

	// Draw the slices of the wheel
	draw(context, angle) {
		const sliceCount = this.colors.length;
		const anglePerSlice = 2 * Math.PI / sliceCount

		// Create Colored Wheel
		for (let i = 0; i < sliceCount; i++) {
			// Gather data for the angles of the slices
			const startAngle = angle + i * anglePerSlice
			const endAngle = startAngle + anglePerSlice

			// Begin drawing the slices
			context.beginPath()
			context.moveTo(center.x, center.y);
			context.arc(center.x, center.y, this.radius, startAngle, endAngle)
			context.fillStyle = this.colors[i]
			context.fill();

			// Add image
			if (this.colors[i]=="violet"){
				context.save();
				const image = new Image();
				image.src = "Characters/mario_icon.png"
				const iconSliceHeight = -this.radius * 0.75

				// Translate to the center of the wheel then move to center of the slice
    			context.translate(this.center.x, this.center.y);
    			context.rotate(startAngle + anglePerSlice / 2);

				// Move icon down and draw the icon
    			context.translate(0, iconSliceHeight);
    			const ICON_SIZE = 150;
    			context.drawImage(image, -ICON_SIZE / 2, -ICON_SIZE / 2, ICON_SIZE, ICON_SIZE);
   				context.restore();
			}
		}

		// Create slice borders
		for (let i = 0; i < sliceCount; i++) {
			// Gather data for the angles of the slices
			const startAngle = angle + 2 * Math.PI * (i / sliceCount)
			const endAngle = angle + 2 * Math.PI * ((i + 1) / sliceCount)

			// Begin drawing the slices
			context.lineWidth = 5
			context.beginPath()
			context.moveTo(center.x, center.y);
			context.arc(center.x, center.y, this.radius, startAngle, endAngle)
			context.strokeStyle = "white"
			context.stroke();
		}
	}
	draw_arrow() {
		// Draw arrow
        context.beginPath()
		context.moveTo(485, 90);
		context.lineTo(500, 130)
        context.lineTo(515, 90)
		context.fillStyle = "black"
		context.fill();
	}
}