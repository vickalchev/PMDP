import React from 'react';
import wakeUpWorldBottle from './Assets/wake-up-world-bottle-520x520.jpg';

export const WakeUpWorld = () => {
    return (
        <div>
            <div className='wake-up-world-img-container'>
            <img 
                className='wake-up-world-img'
                src={wakeUpWorldBottle}
                alt='Wake Up World Bottle'></img>
            </div>
            <div className='wake-up-world-info-container'>

            </div>
        </div>
    )
}