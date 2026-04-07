# ✨ CSS Lab - 3D Glowing Buttons Collection

> A stunning collection of interactive 3D buttons with smooth animations and glowing effects. Pure CSS + Vanilla JavaScript — No frameworks required!

## 🎨 Live Demos

Experience three beautifully crafted buttons with realistic 3D effects and mesmerizing glow animations:

### 1. 💡 **3D Headlight Control Switch**
A realistic automotive-style toggle switch featuring:
- **3D Lever Animation** - Physical rotation with depth and perspective
- **Glowing Yellow Effect** - Bright amber headlight glow when activated
- **Dual Theme Support** - Works perfectly on both light and dark backgrounds
- **Smooth Transitions** - Cubic-bezier easing for natural movement

📂 **Location:** `3D_Button/Glowing_headlight_button/`

---

### 2. 📢 **Glowing Horn Button**
An interactive circular button with dynamic sound wave visualization:
- **Pressure Animation** - 3D press effect with realistic shadows
- **Animated Sound Waves** - Three expanding wave rings on activation
- **Multi-layer Glow** - Concentric glowing effects in amber/orange
- **Touch & Keyboard Support** - Fully accessible interaction

📂 **Location:** `3D_Button/Glowing_horn_button/`

---

### 3. ⚡ **Glowing ON/OFF Power Button**
A sleek power button with professional styling:
- **Classic Power Icon** - Universal on/off symbol design
- **3D Circular Design** - Raised button with depth effects
- **Glow Animation** - Smooth color transitions on toggle
- **Dual Theme Ready** - Light and dark mode compatible

📂 **Location:** `3D_Button/Glowing_on_off_button/`

---

## ⚡ Features

- ✅ **Pure CSS3** - No external libraries or frameworks
- ✅ **Vanilla JavaScript** - Lightweight and fast
- ✅ **Fully Responsive** - Works on all screen sizes
- ✅ **Accessible** - ARIA labels, keyboard navigation, focus states
- ✅ **Touch-Friendly** - Optimized for mobile devices
- ✅ **Smooth Animations** - 60 FPS performance with hardware acceleration
- ✅ **Dark Mode Support** - Each button has light & dark theme variants
- ✅ **Clean Code** - Well-structured, maintainable, and commented

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd css-lab
   ```

2. **Open any button demo:**
   ```bash
   # Navigate to a button folder
   cd 3D_Button/Glowing_headlight_button
   
   # Open index.html in your browser
   open index.html  # macOS
   xdg-open index.html  # Linux
   start index.html  # Windows
   ```

3. **That's it!** No build process, no dependencies to install.

## 📁 Project Structure

```
css-lab/
├── README.md
└── 3D_Button/
    ├── Glowing_headlight_button/
    │   ├── index.html      # Main HTML structure
    │   ├── style.css       # 3D styles & animations
    │   └── script.js       # Toggle interaction logic
    │
    ├── Glowing_horn_button/
    │   ├── index.html      # Simplified SVG with <symbol>
    │   ├── style.css       # Press effects & wave animations
    │   └── script.js       # Mouse, touch & keyboard events
    │
    └── Glowing_on_off_button/
        ├── index.html      # Power button markup
        ├── style.css       # Circular 3D styling
        └── script.js       # ON/OFF state management
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup with SVG graphics
- **CSS3** - Custom properties, gradients, transforms, transitions
- **JavaScript (ES6+)** - Class-based components, event handling
- **No frameworks** - Pure vanilla code for maximum performance

## 🎯 CSS Techniques Demonstrated

- 🎨 **CSS Custom Properties** (CSS Variables) for theming
- 🌈 **Linear Gradients** for depth and lighting effects
- 💫 **Transform 3D** - rotateX, rotateY, perspective
- ✨ **Box Shadows** - Multiple layers for realistic glow
- 🔄 **Cubic-bezier Transitions** - Natural, smooth animations
- 🎭 **Pseudo-elements** (::before, ::after) for layered effects
- 📐 **Flexbox** - Responsive layout system

## 💡 Use Cases

Perfect for:
- 🚗 **Automotive UI** - Dashboard controls, headlight switches
- 🎮 **Gaming Interfaces** - Power buttons, toggle switches
- 📱 **Mobile Apps** - Settings panels, control interfaces
- 🖥️ **Web Applications** - User preference toggles
- 🎨 **Design Portfolios** - Showcasing CSS skills

## 🌟 Customization Tips

Each button can be easily customized via CSS custom properties:

```css
:root {
  --hue: 223;              /* Base color hue */
  --sat: 10%;              /* Saturation level */
  --trans-dur: 0.3s;       /* Animation duration */
  --horn-hue: 38;          /* Accent color for horn button */
  --horn-sat: 95%;         /* Glow intensity */
}
```

## 📝 Code Quality

- ✓ Clean, readable code structure
- ✓ BEM-like class naming convention
- ✓ Semantic HTML5 elements
- ✓ Optimized for performance
- ✓ Cross-browser compatible
- ✓ Mobile-first approach

## 🤝 Contributing

Feel free to fork this project and create your own glowing button variations! 

Ideas for new buttons:
- 🔊 Volume slider with 3D knob
- 🎚️ Equalizer toggle switches
- 🌡️ Temperature control dial
- 🔐 Lock/Unlock button

## 📄 License

This project is open source and available for personal and commercial use.

---

<div align="center">

**Made with ❤️ and CSS3**

⭐ Star this repo if you found it helpful!

</div>
