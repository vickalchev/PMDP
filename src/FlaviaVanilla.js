import React from 'react';
import {Link} from 'react-router-dom';
import FlaviaVanillaBottle from './Assets/flavia-vanilla-82-bottle-520x520.jpg';
import FlaviaVanillaBottleBox from './Assets/flavia-vanilla-82-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const FlaviaVanilla = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={FlaviaVanillaBottle}
                    alt='Flavia Vanilla'
                    onMouseOver={e => e.currentTarget.src=FlaviaVanillaBottleBox}
                    onMouseOut={e => e.currentTarget.src=FlaviaVanillaBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Flavia Vanilla / 82</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Vanilla | Sugar 
                </p>
                <p className='product-description'>
                She strides long-legged through the city streets, leaving behind her a sugary trail. Her eyes are shiny and black, almost liquid.
                 </p>
                
                <p className='product-description'>
                Her irresistibly sweet and reassuring smell makes her close, almost familiar. She clings to skin, meddles with hearts and lingers in boys’ dreams.               
                </p>
                <p className='product-description'>
                Flavia is a dark and sugary vanilla. Sweet, fascinating and totally seductive.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-flavia-vanilla-82/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const FlaviaVanillaThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/flavia-vanilla-82'>
                <img 
                className='thumbnail-img'
                src={FlaviaVanillaBottle}
                alt='flavia vanilla bottle'
                onMouseOver = {e => e.currentTarget.src=FlaviaVanillaBottleBox}
                onMouseOut = {e => e.currentTarget.src=FlaviaVanillaBottle}
                />
                <h3 className='thumbnail-name'>Flavia Vanilla / 82</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}