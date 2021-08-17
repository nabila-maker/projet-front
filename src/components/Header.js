import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
          <>
        <Logo/>
      
        <div>
            <h1>First Leaf</h1>
        </div>

        <Navigation/>
        </>
    );
}

export default Header;