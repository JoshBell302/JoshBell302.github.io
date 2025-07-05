class Wheel {
	// Constructing the class
	constructor(center, radius, icons) {
		this.center = center; // {x, y}
		this.radius = radius; // Float
		this.icons = icons; // Array of Icons with slice information
	}

	// Draw the slices of the wheel
	draw(context, angle) {
		const sliceCount = this.icons.length;
		const twoPI = 2 * Math.PI;
		const iconSize = 150;
		const iconSliceHeight = -this.radius * 0.75;

		// Create Colored Wheel
		for (let i = 0; i < sliceCount; i++) {
			// Gather data for the angles of the slices
			const startAngle = angle + (twoPI * (i / sliceCount));
			const endAngle =  angle + (twoPI * ((i + 1) / sliceCount));

			// Begin drawing the slices
			context.beginPath();
			context.moveTo(center.x, center.y);
			context.arc(center.x, center.y, this.radius, startAngle, endAngle);
			context.fillStyle = this.icons[i].color;
			context.fill();

			// Draw the slice borders
			if (sliceCount > 1) {
				context.lineWidth = 5;
				context.beginPath();
				context.moveTo(center.x, center.y);
				context.arc(center.x, center.y, this.radius, startAngle, endAngle);
				context.strokeStyle = "white";
				context.stroke();
			}

			// Begin adding the icon image
			context.save();

			// Translate to the center of the wheel then move to center of the slice
    		context.translate(this.center.x, this.center.y);

			// To solve later!!!
			const sliceAdjustmentModifier = [-0.45, 0.2, 0.5, 0.75, 0.9, 1, 1.05, 1.1, 1.15]
			const adjustment = (1/sliceCount) + sliceAdjustmentModifier[sliceCount-2]
			// const adjustment = (1/sliceCount) + 1.15
    		context.rotate(endAngle + adjustment);

			// Move icon down and draw the icon
    		context.translate(0, iconSliceHeight);
    		context.drawImage(this.icons[i].image, -iconSize / 2, -iconSize / 2, iconSize, iconSize);
   			context.restore();
		}
	}

	draw_arrow() {
		// Draw arrow
        context.beginPath();
		context.moveTo(475, 70);
		context.lineTo(500, 130);
        context.lineTo(525, 70);
		context.fillStyle = "black";
		context.fill();
	}
}