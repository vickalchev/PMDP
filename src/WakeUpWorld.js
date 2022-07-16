import React from 'react';
import {Link} from 'react-router-dom';
import WakeUpWorldBottle from './Assets/wake-up-world-bottle-520x520.jpg';
import WakeUpWorldBottleBox from './Assets/wake-up-world-bottle-box-520x520.png';
import './Product-Style.css';
import {Counter} from './Counter';


export const WakeUpWorld = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={WakeUpWorldBottle}
                    alt='Wake Up World Bottle'
                    onMouseOver={e => e.currentTarget.src=WakeUpWorldBottleBox}
                    onMouseOut={e => e.currentTarget.src=WakeUpWorldBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Wake Up World</h1>
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

 export const WakeUpWorldThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='./wake-up-world'>
                <img 
                className='thumbnail-img'
                src={WakeUpWorldBottle}
                alt='wakeup world bottle'
                onMouseOver = {e => e.currentTarget.src=WakeUpWorldBottleBox}
                onMouseOut = {e => e.currentTarget.src=WakeUpWorldBottle}
                />
                <h3 className='thumbnail-name'>Wake Up World</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}