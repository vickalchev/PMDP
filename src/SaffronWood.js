import React from 'react';
import {Link} from 'react-router-dom';
import SaffronWoodBottle from './Assets/saffron-wood-91-bottle-520x520.jpg';
import SaffronWoodBottleBox from './Assets/saffron-wood-91-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const SaffronWood = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={SaffronWoodBottle}
                    alt='Mile High 38 Bottle'
                    onMouseOver={e => e.currentTarget.src=SaffronWoodBottleBox}
                    onMouseOut={e => e.currentTarget.src=SaffronWoodBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Saffron Wood / 91</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Rose | Saffron | Cedar | Leather 
                </p>
                <p className='product-description'>
                London on December 19th, Big Ben rings 9 o’clock.

                 </p>
                
                <p className='product-description'>
                The hustle and bustle of the horns has subsided. A rainy mist colors the grey cobblestones of the streets of Soho and I soak up this damp and surprisingly calm atmosphere. The frenzy of the day has given way to crowded restaurants with the smells of spices merging with those of fashionable tailors.
                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/mile-high-38/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const SaffronWoodThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/saffron-wood-91'>
                <img 
                className='thumbnail-img'
                src={SaffronWoodBottle}
                alt='saffron wood bottle'
                onMouseOver = {e => e.currentTarget.src=SaffronWoodBottleBox}
                onMouseOut = {e => e.currentTarget.src=SaffronWoodBottle}
                />
                <h3 className='thumbnail-name'>Saffron Wood / 91</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}