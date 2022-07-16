import React from 'react';
import {Link} from 'react-router-dom';
import HauteProvenceBottle from './Assets/haute-provence-89-bottle-520x520.jpg';
import HauteProvenceBottleBox from './Assets/haute-provence-89-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const HauteProvence = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={HauteProvenceBottle}
                    alt='Haute Provence 89 Bottle'
                    onMouseOver={e => e.currentTarget.src=HauteProvenceBottleBox}
                    onMouseOut={e => e.currentTarget.src=HauteProvenceBottle}
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

export const HauteProvenceThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='./haute-provence-89'>
                <img 
                className='thumbnail-img'
                src={HauteProvenceBottle}
                alt='saffron wood bottle'
                onMouseOver = {e => e.currentTarget.src=HauteProvenceBottleBox}
                onMouseOut = {e => e.currentTarget.src=HauteProvenceBottle}
                />
                <h3 className='thumbnail-name'>Haute Provence / 89</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}