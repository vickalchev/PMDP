import React from 'react';
import MilkyMuskBottle from './Assets/milky-musk-39-bottle-520x520.jpg';
import MilkyMuskBottleBox from './Assets/milky-musk-39-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const MilkyMusk = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={MilkyMuskBottle}
                    alt='Milky Musk'
                    onMouseOver={e => e.currentTarget.src=MilkyMuskBottleBox}
                    onMouseOut={e => e.currentTarget.src=MilkyMuskBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Milky Musk / 39</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Sandalwood | Musk 
                </p>
                <p className='product-description'>
                Rare wood in a pool of musk. Supple and unctuous, musk and sandalwood hug the skin, becoming one with it.
                 </p>
                
                <p className='product-description'>
                Even the slightest movement triggers a waft of milky woody air.          
                </p>

                <p className='product-description'>
                Milky Musk becomes your olfactory shadow, flowing and elusive, evolving throughout the day.          
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-milky-musk-39/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}