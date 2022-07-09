import React from 'react';
import WakeUpWorldBottle from './Assets/wake-up-world-bottle-520x520.jpg';
import WakeUpWorldBottleBox from './Assets/wake-up-world-bottle-box-520x520.png';
import './WakeUpWorld.css';
import {Counter} from './Counter';

export const WakeUpWorld = () => {
    return (
        <div className='wake-up-world-container'>
            <div className='wake-up-world-img-container'>
                 <img 
                    className='wake-up-world-img'
                    src={WakeUpWorldBottle}
                    alt='Wake Up World Bottle'
                    onMouseOver={e => e.currentTarget.src=WakeUpWorldBottleBox}
                    onMouseOut={e => e.currentTarget.src=WakeUpWorldBottle}
                    >
                </img>         
            </div>
            <div className='wake-up-world-info-container'>
                <h1 className='perfume-name'>Wake Up World</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Bergamot | Green Apple | Turkish Rose | Vanilla | Tonka Bean | Ambroxan | Benzoin
                </p>
                <p className='product-description'>
                It's all too easy these days to feel like the entire world has gone mad. Even fragrance, our escape from the actual problems out there, has fallen victim to outlandish and unprovable claims of life-changing benefits, planet-saving virtues, or inscrutably high-minded artistry. At the risk of sounding overly simplistic, whatever happened to just smelling great?
                </p>
                <select className='sizes'>
                    <option 
                    className='size-option' value='choose-size'>
                        Choose Size
                    </option>
                    <option 
                    className='size-option'
                    value='50ml'>
                        50ml
                    </option>
                    <option
                    className='size-option'
                    value='100ml'>
                        100ml
                    </option>
                </select>
                <div className='counter-btn-container'>
                <Counter />
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/wake-up-world/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}