import React from 'react';
import './Service.css'
function Service(props) {
    return ( <>
    
        <div className='serviceContainer'>
            {' - ' + props.service + ' - '}
        </div>
    
    </> );
}

export default Service;