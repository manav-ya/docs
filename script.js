// Spin Wheel Functionality
class SpinWheel {
    constructor() {
        this.wheel = document.getElementById('spinWheel');
        this.spinButton = document.getElementById('spinButton');
        this.isSpinning = false;
        this.prizes = [
            { name: '₹99 Burger Meal', color: '#FFD700', logo: 'McDonald\'s' },
            { name: '₹400 Off on minimum purchase of ₹1999', color: '#FF69B4', logo: 'Myntra' },
            { name: 'Free 1 Year GOLD MAX MEMBERSHIP', color: '#1E90FF', logo: 'Lenskart' },
            { name: 'Buy 3 Boxers at ₹799', color: '#32CD32', logo: 'Brand' }
        ];
        
        this.init();
    }
    
    init() {
        this.spinButton.addEventListener('click', () => this.spin());
        this.createWheelSegments();
    }
    
    createWheelSegments() {
        // Clear existing content
        this.wheel.innerHTML = '';
        
        // Create segments
        this.prizes.forEach((prize, index) => {
            const segment = document.createElement('div');
            segment.className = 'wheel-segment';
            segment.style.cssText = `
                position: absolute;
                width: 50%;
                height: 50%;
                transform-origin: 100% 100%;
                transform: rotate(${index * 90}deg);
                background: ${prize.color};
                border-radius: 100% 0 0 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-size: 10px;
                font-weight: bold;
                color: black;
                text-align: center;
                padding: 10px;
                box-sizing: border-box;
            `;
            
            // Add prize text
            const prizeText = document.createElement('div');
            prizeText.textContent = prize.name;
            prizeText.style.cssText = `
                transform: rotate(${-index * 90}deg);
                max-width: 80px;
                line-height: 1.2;
            `;
            
            // Add logo
            const logo = document.createElement('div');
            logo.textContent = prize.logo;
            logo.style.cssText = `
                transform: rotate(${-index * 90}deg);
                font-size: 8px;
                margin-top: 5px;
                opacity: 0.8;
            `;
            
            segment.appendChild(prizeText);
            segment.appendChild(logo);
            this.wheel.appendChild(segment);
        });
    }
    
    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinButton.disabled = true;
        this.spinButton.textContent = 'Spinning...';
        
        // Generate random rotation (between 2-5 full rotations + random segment)
        const minRotations = 2;
        const maxRotations = 5;
        const rotations = Math.random() * (maxRotations - minRotations) + minRotations;
        const segmentAngle = Math.floor(Math.random() * 4) * 90; // 0, 90, 180, or 270
        const totalRotation = rotations * 360 + segmentAngle;
        
        // Apply rotation
        this.wheel.style.transform = `rotate(${totalRotation}deg)`;
        
        // Determine winning prize
        const winningIndex = Math.floor((360 - (segmentAngle % 360)) / 90) % 4;
        const winningPrize = this.prizes[winningIndex];
        
        // Show result after animation
        setTimeout(() => {
            this.showResult(winningPrize);
            this.isSpinning = false;
            this.spinButton.disabled = false;
            this.spinButton.textContent = 'Spin Again';
        }, 3000);
    }
    
    showResult(prize) {
        // Create result modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            animation: fadeIn 0.3s ease;
        `;
        
        const content = document.createElement('div');
        content.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 20px;
            text-align: center;
            max-width: 300px;
            width: 90%;
            animation: slideUp 0.3s ease;
        `;
        
        content.innerHTML = `
            <h2 style="color: #333; margin-bottom: 15px;">🎉 Congratulations!</h2>
            <p style="color: #666; margin-bottom: 20px;">You won:</p>
            <div style="background: ${prize.color}; padding: 20px; border-radius: 15px; margin-bottom: 20px;">
                <h3 style="color: white; margin: 0; font-size: 16px;">${prize.name}</h3>
                <p style="color: white; margin: 5px 0 0 0; font-size: 12px; opacity: 0.9;">${prize.logo}</p>
            </div>
            <button id="closeModal" style="
                background: #4CAF50;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 20px;
                font-size: 16px;
                cursor: pointer;
                transition: background 0.3s;
            ">Claim Prize</button>
        `;
        
        modal.appendChild(content);
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = content.querySelector('#closeModal');
        closeBtn.addEventListener('click', () => {
            modal.remove();
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(30px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize the spin wheel when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SpinWheel();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to wheel
    const wheel = document.getElementById('spinWheel');
    if (wheel) {
        wheel.addEventListener('mouseenter', () => {
            if (!wheel.classList.contains('spinning')) {
                wheel.style.transform = 'scale(1.05)';
            }
        });
        
        wheel.addEventListener('mouseleave', () => {
            if (!wheel.classList.contains('spinning')) {
                wheel.style.transform = 'scale(1)';
            }
        });
    }
    
    // Add click sound effect (optional)
    const spinButton = document.getElementById('spinButton');
    if (spinButton) {
        spinButton.addEventListener('click', () => {
            // You can add a sound effect here
            console.log('Spin button clicked!');
        });
    }
});