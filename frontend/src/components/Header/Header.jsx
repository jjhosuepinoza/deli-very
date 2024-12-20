import React, { useEffect } from 'react';
import './Header.css';
import 'flowbite'; // Ensure Flowbite is installed and imported

const Header = () => {
    useEffect(() => {
        // Initialize the carousel if using a library like Flowbite
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <header>
            <div className='header'>
                <div className='header-contents'>
                    <h2>Order your favourite food here</h2>
                    <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                    <button>View Menu</button>
                </div>
            </div>

          
        </header>
    );
};

export default Header;
