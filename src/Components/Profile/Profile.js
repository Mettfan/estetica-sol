import React from 'react';
import './Profile.css'
import solProfile from '../../Assets/solProfile.jpg'
function Profile() {
    return ( <>
    
        <div className='profileImageContainer'>
            <img className='profileImage' src={solProfile} alt=':(' />
            <h3 className='profileName'>
                Marisol Ambríz González
                <h4 className='profileName'>
                    Estilista
                </h4>
            </h3>
        </div>
    
    </> );
}

export default Profile;