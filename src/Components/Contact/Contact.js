import React from 'react';
import whatsappLogo from '../../Assets/whatsappLogo.png'
import mapsLogo from '../../Assets/mapsLogo.png'
import './Contact.css'
function Contact() {
    return ( <>
    
        <div className='contactContainer'>

            <a className='phoneContainer' href='tel:+52-443-244-0267'>
                <img className='whatsappLogo' src={whatsappLogo} />
                +52-443-244-0267
            </a>
            <a className='mapsContainer' href='https://maps.app.goo.gl/fdbsjDfzjsKJpP1V9' target={'_blank'}>
                <img className='mapsLogo' src={mapsLogo} />
                <h4>¡Visítanos!</h4>
            </a>

        </div>
    
    </> );
}

export default Contact;