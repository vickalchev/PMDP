import React from 'react';
import {Link} from 'react-router-dom';
import OrrisTattooBottle from './Assets/orris-tattoo-29-bottle-520x520.jpg';
import OrrisTattooBottleBox from './Assets/orris-tattoo-29-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const OrrisTattoo = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={OrrisTattooBottle}
                    alt='Orris Tattoo 29 Bottle'
                    onMouseOver={e => e.currentTarget.src=OrrisTattooBottleBox}
                    onMouseOut={e => e.currentTarget.src=OrrisTattooBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Orris Tattoo / 29</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Orris 
                </p>
                <p className='product-description'>
                A return to the hallmarks of classic perfumery, a tribute to one of its rarest natural ingredients: iris.
                 </p>
                
                <p className='product-description'>
                Florists love its gorgeous flowers, but we’re all about the root, left to grow deep underground for three years before being dried for another three years. It’s then ground up and transformed into iris butter, probably the most expensive butter you’ll ever encounter!                
                </p>
                <p className='product-description'>
                Orris Tattoo is a permanent scented reminder, a universal symbol, a unique self-expression like an invisible tattoo that withstands the test of time.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/orris-tattoo29/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const OrrisTattooThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/orris-tattoo-29'>
                <img 
                className='thumbnail-img'
                src={OrrisTattooBottle}
                alt='orris tattoo bottle'
                onMouseOver = {e => e.currentTarget.src=OrrisTattooBottleBox}
                onMouseOut = {e => e.currentTarget.src=OrrisTattooBottle}
                />
                <h3 className='thumbnail-name'>Orris Tattoo / 29</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}