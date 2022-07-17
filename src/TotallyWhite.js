import React from 'react';
import {Link} from 'react-router-dom';
import TotallyWhiteBottle from './Assets/totally-white-126-bottle-520x520.jpg';
import TotallyWhiteBottleBox from './Assets/totally-white-126-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const TotallyWhite = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={TotallyWhiteBottle}
                    alt='Totally White'
                    onMouseOver={e => e.currentTarget.src=TotallyWhiteBottleBox}
                    onMouseOut={e => e.currentTarget.src=TotallyWhiteBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Totally White / 82</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Wisteria | Hawthorn | Syringa 
                </p>
                <p className='product-description'>
                Parc Monceau, Paris, on a spring morning. Pure whites and tender pastel shades of lilac, syringa, hawthorn and wisteria mingle in the transparent light.
                 </p>
                
                <p className='product-description'>
                Insistent and unsettling, the fragrance of flowers fills the entire park, enveloping passers-by and inspiring them with the strong and fresh energy of nature reborn.             
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-totally-white-126/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const TotallyWhiteThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/totally-white-126'>
                <img 
                className='thumbnail-img'
                src={TotallyWhiteBottle}
                alt='totally white bottle'
                onMouseOver = {e => e.currentTarget.src=TotallyWhiteBottleBox}
                onMouseOut = {e => e.currentTarget.src=TotallyWhiteBottle}
                />
                <h3 className='thumbnail-name'>Totally White / 126</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}