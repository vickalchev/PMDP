import React from 'react';
import MileHigh38Bottle from './Assets/mile-high-38-bottle-520x520.jpg';
import MileHigh38BottleBox from './Assets/mile-high-38-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const MileHigh = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={MileHigh38Bottle}
                    alt='Mile High 38 Bottle'
                    onMouseOver={e => e.currentTarget.src=MileHigh38BottleBox}
                    onMouseOut={e => e.currentTarget.src=MileHigh38Bottle}
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