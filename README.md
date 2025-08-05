# Spin & Win Wheel Component

A beautiful, interactive spin wheel component that replicates the design from the mobile app screenshot. The wheel rotates smoothly when the spin button is clicked and determines a random winner.

## Features

- 🎯 **Smooth Animation**: CSS-based rotation with easing for realistic spinning motion
- 🎨 **Faithful Design**: Matches the original mobile app design with gradient backgrounds and proper styling
- 📱 **Responsive**: Works on both desktop and mobile devices
- 🎁 **Prize Detection**: Automatically detects which segment the wheel lands on
- ⚡ **Performance**: Lightweight implementation using vanilla JavaScript/React

## Files

- `SpinWheel.jsx` - React component version
- `SpinWheel.css` - CSS styles for the React component
- `index.html` - Standalone HTML version with embedded CSS and JavaScript

## How It Works

1. **Click the Spin Button**: The wheel starts rotating with a random number of rotations (4-6 full spins)
2. **Smooth Animation**: Uses CSS transitions with cubic-bezier easing for realistic deceleration
3. **Winner Detection**: Calculates which segment the pointer lands on based on final rotation
4. **Prize Display**: Shows an alert with the winning prize

## Prizes

The wheel contains 4 segments with different offers:
- 🍔 ₹99 Burger Meal
- 💳 ₹400 Off on minimum purchase of ₹1999  
- ⭐ Free 1 Year GOLD MAX MEMBERSHIP
- 👕 Buy 3 Boxers at ₹799

## Usage

### Standalone HTML Version
Simply open `index.html` in a web browser to see the component in action.

### React Component Version
```jsx
import SpinWheel from './SpinWheel';
import './SpinWheel.css';

function App() {
  return (
    <div className="App">
      <SpinWheel />
    </div>
  );
}
```

## Customization

You can easily customize the component by:

1. **Changing Colors**: Modify the segment colors in the CSS or component
2. **Adding More Segments**: Update the segments array and adjust the CSS accordingly
3. **Different Prizes**: Change the prize text and emojis in the segments array
4. **Animation Duration**: Adjust the transition duration in the CSS
5. **Rotation Amount**: Modify the min/max rotation values in the JavaScript

## Technical Details

- **Animation**: Uses CSS `transform: rotate()` with smooth transitions
- **Random Generation**: JavaScript `Math.random()` for unpredictable results
- **Responsive Design**: CSS media queries for mobile optimization
- **Cross-browser**: Compatible with modern browsers supporting CSS transforms

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Full support

The component uses modern CSS features like `clip-path` and CSS gradients, so it requires relatively recent browser versions.
