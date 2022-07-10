import React from 'react';
import HauteProvence89Bottle from './Assets/haute-provence-89-bottle-520x520.jpg';
import HauteProvence89BottleBox from './Assets/haute-provence-89-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const HauteProvence = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={HauteProvence89Bottle}
                    alt='Haute Provence 89 Bottle'
                    onMouseOver={e => e.currentTarget.src=HauteProvence89BottleBox}
                    onMouseOut={e => e.currentTarget.src=HauteProvence89Bottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Haute Provence / 89</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Lavender | Melon | Watermelon | Narcissus 
                </p>
                <p className='product-description'>
                We all have a memory in Provence, child or adult, this region is synonymous with lightness, letting go and holidays. Haute Provence / 89 is our tribute to it.
                 </p>
                
                <p className='product-description'>
                The beauty of its lavender fields perfectly aligned as far as the eye can see. A plant which by its flower alone floods a region and colors it for eternity. It is the most beautiful thing, its simplicity renders the superfluous old-fashioned and makes it an icon which crosses the world.
                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/haute-provence-89/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}