import React from 'react';
import {Link} from 'react-router-dom';
import MileHighBottle from './Assets/mile-high-38-bottle-520x520.jpg';
import MileHighBottleBox from './Assets/mile-high-38-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const MileHigh = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={MileHighBottle}
                    alt='Mile High 38 Bottle'
                    onMouseOver={e => e.currentTarget.src=MileHighBottleBox}
                    onMouseOut={e => e.currentTarget.src=MileHighBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Mile High / 38</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Pineapple | Immortelle | Patchouli | Tonka Bean 
                </p>
                <p className='product-description'>
                Forget travelling to the end of the world, to heavenly beaches or to the top of the highest peaks. </p>
                
                <p className='product-description'>
                Mile High / 38 promises more than that: a one-way trip to the high spheres, a high altitude sniff.
                
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

export const MileHighThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/mile-high-38'>
                <img 
                className='thumbnail-img'
                src={MileHighBottle}
                alt='wakeup world bottle'
                onMouseOver = {e => e.currentTarget.src=MileHighBottleBox}
                onMouseOut = {e => e.currentTarget.src=MileHighBottle}
                />
                <h3 className='thumbnail-name'>Mile High / 38</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}