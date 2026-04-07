window.addEventListener("DOMContentLoaded", () => {
	const switches = document.querySelectorAll(".switch__input");
	
	switches.forEach(switchInput => {
		// Log state changes
		switchInput.addEventListener("change", (e) => {
			if (e.target.checked) {
				console.log("💡 Headlights ON");
			} else {
				console.log("🌑 Headlights OFF");
			}
		});
		
		// Add keyboard support for better accessibility
		switchInput.addEventListener("keydown", (e) => {
			// Allow Space and Enter to toggle
			if (e.key === " " || e.key === "Enter") {
				e.preventDefault();
				switchInput.checked = !switchInput.checked;
				// Trigger change event
				switchInput.dispatchEvent(new Event("change"));
			}
		});
	});
});