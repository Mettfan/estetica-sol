import React from 'react';
import Profile from '../Profile/Profile';
import './Info.css'
import Service from './Service/Service';
function Info() {
    return ( <>
    
        <div className='infoContainer'>
            <h2>
                ¡Ponte más guap@ de lo que estás!
            </h2>
            <div className='featuresContainer'>

                <Profile/>
                <div className='servicesContainerPad'>

                    <h3>
                        Ofrecemos:
                    </h3>
                    <div className='servicesContainer'>
                        <Service service = 'Corte de Hombre' />
                        <Service service = 'Corte de Mujer' />
                        <Service service = 'Corte de Niño' />
                        <Service service = 'Uñas Acrílicas' />
                        <Service service = 'Manicure' />
                        <Service service = 'Pedicure' />
                        <Service service = 'Decoloracion' />
                        <Service service = 'Rayos' />
                        <Service service = 'Tintes' />
                        <Service service = 'Mechas' />

                    </div>

                </div>

            </div>
           

        </div>
    
    </> );
}

export default Info;