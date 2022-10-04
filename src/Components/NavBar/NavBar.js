import React from 'react';
import logoSol from '../../Assets/LogoSimple.png'
import './NavBar.css'
function NavBar() {
    return ( <>
    
        <div className='navContainer'>

            <div className='logoContainer'>
                
                <img className='logoImage' src={logoSol} />

            </div>


            <h1>
                Estética Sol
            </h1>

        </div>
    
    </> );
}

export default NavBar;