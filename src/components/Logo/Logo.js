import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

// Displays Logo and tilt effect
const Logo = () => {
    return (
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt br-100 shadow-2 o-70" options={{ max : 55 }} style={{ height: 220, width: 220 }} >
            </Tilt>
        </div>
    );
};

export default Logo;