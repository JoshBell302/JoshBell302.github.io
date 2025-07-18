document.addEventListener("DOMContentLoaded", () => {
	const target = document.getElementById("siteHeader");

	if (target) {
		// Load header HTML
		fetch("/marioparty/header/header.html")
			.then(res => res.text())
			.then(html => {
				target.innerHTML = html;

				// Now fetch CHANGELOG.md and update version
				return fetch("/CHANGELOG.md");
			})
			.then(res => res.text())
			.then(changelog => {
				const versionMatch = changelog.match(/##\s*Version\s+(\d+\.\d+\.\d+)/);
				const version = versionMatch ? `Version ${versionMatch[1]}` : `Version Unknown`;

				// Update the version number in header
				const versionElement = target.querySelector("header h2");
				if (versionElement) {
					versionElement.textContent = version;
				}
			})
			.catch(err => console.error("Header or version load error:", err));
	}
});