# Spin & Win Wheel Component

A fully functional spin wheel component that replicates the design from the mobile app screenshot. The wheel rotates when the "Spin" button is clicked and randomly selects one of four prizes.

## Features

- **Authentic Design**: Matches the exact design from the mobile app screenshot
- **Smooth Animation**: 3-second spinning animation with realistic physics
- **Random Prize Selection**: Randomly selects from 4 different prizes
- **Interactive UI**: Hover effects and responsive design
- **Result Modal**: Shows the winning prize in a beautiful modal
- **Mobile Responsive**: Works perfectly on mobile devices

## Prizes

The wheel contains 4 segments with different prizes:

1. **₹99 Burger Meal** (Yellow) - McDonald's
2. **₹400 Off on minimum purchase of ₹1999** (Pink) - Myntra
3. **Free 1 Year GOLD MAX MEMBERSHIP** (Blue) - Lenskart
4. **Buy 3 Boxers at ₹799** (Green) - Brand

## How to Use

1. Open `index.html` in a web browser
2. Click the green "Spin" button
3. Watch the wheel spin for 3 seconds
4. See your winning prize in the modal
5. Click "Claim Prize" to close the modal
6. Click "Spin Again" to spin again

## Technical Details

### Files Structure
- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - JavaScript functionality for spinning and prize selection

### Key Features

#### CSS Features
- **Conic Gradients**: Used for creating the wheel segments
- **CSS Masks**: Creates the circular wheel shape
- **Smooth Transitions**: 3-second cubic-bezier animation
- **Responsive Design**: Adapts to different screen sizes

#### JavaScript Features
- **Random Rotation**: Generates random spin angles
- **Prize Determination**: Calculates winning prize based on final position
- **Modal System**: Dynamic result display
- **State Management**: Prevents multiple spins during animation

### Customization

You can easily customize the wheel by modifying:

1. **Prizes**: Edit the `prizes` array in `script.js`
2. **Colors**: Change the color values in both CSS and JavaScript
3. **Animation Duration**: Modify the transition time in CSS
4. **Wheel Size**: Adjust the `.wheel-container` dimensions in CSS

### Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Implementation Notes

- The wheel uses CSS transforms for smooth rotation
- Prize selection is based on the final rotation angle
- The green pointer at the top indicates the winning segment
- All animations use CSS transitions for optimal performance
- The design includes the iOS-style dynamic island and status bar

## Future Enhancements

- Sound effects for spinning and winning
- Haptic feedback for mobile devices
- Prize history tracking
- Social sharing of wins
- Custom prize images/logos
- Backend integration for real prizes
