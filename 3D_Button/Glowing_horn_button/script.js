window.addEventListener("DOMContentLoaded", () => {
	const hornBtn1 = new HornButton("#hornBtn1");
	const hornBtn2 = new HornButton("#hornBtn2");
});

class HornButton {
	constructor(el) {
		this.el = document.querySelector(el);
		this.isPressed = false;
		
		if (this.el) {
			// Mouse events
			this.el.addEventListener("mousedown", this.pressStart.bind(this));
			this.el.addEventListener("mouseup", this.pressEnd.bind(this));
			this.el.addEventListener("mouseleave", this.pressEnd.bind(this));
			
			// Touch events for mobile
			this.el.addEventListener("touchstart", this.pressStart.bind(this), { passive: true });
			this.el.addEventListener("touchend", this.pressEnd.bind(this));
			this.el.addEventListener("touchcancel", this.pressEnd.bind(this));
			
			// Keyboard support (Space and Enter keys)
			this.el.addEventListener("keydown", this.handleKeyDown.bind(this));
			this.el.addEventListener("keyup", this.handleKeyUp.bind(this));
		}
	}
	
	pressStart(e) {
		if (!this.isPressed) {
			this.isPressed = true;
			this.el?.setAttribute("aria-pressed", "true");
			
			// Optional: Add console log to simulate horn sound
			console.log("🔊 HORN ACTIVE!");
		}
	}
	
	pressEnd(e) {
		if (this.isPressed) {
			this.isPressed = false;
			this.el?.setAttribute("aria-pressed", "false");
			
			// Optional: Add console log
			console.log("🔇 Horn released");
		}
	}
	
	handleKeyDown(e) {
		// Activate on Space or Enter key
		if ((e.key === " " || e.key === "Enter") && !this.isPressed) {
			e.preventDefault(); // Prevent page scroll on space
			this.pressStart(e);
		}
	}
	
	handleKeyUp(e) {
		// Deactivate on Space or Enter key release
		if (e.key === " " || e.key === "Enter") {
			e.preventDefault();
			this.pressEnd(e);
		}
	}
}