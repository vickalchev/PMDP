import React from 'react';
import GardensOfIndia89Bottle from './Assets/gardens-of-india-79-bottle-520x520.jpg';
import GardensOfIndiaBottleBox from './Assets/gardens-of-india-79-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const GardensOfIndia = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={GardensOfIndia89Bottle}
                    alt='Haute Provence 89 Bottle'
                    onMouseOver={e => e.currentTarget.src=GardensOfIndiaBottleBox}
                    onMouseOut={e => e.currentTarget.src=GardensOfIndia89Bottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Gardens of India</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Indian Tuberose | Indian Jasmine | Sandalwood 
                </p>
                <p className='product-description'>
                Get up early on a morning of June. Pick a few Jasmine buds, let them blossom before extracting their Absolute.
                 </p>
                
                <p className='product-description'>
                Admire the Tuberose fields during the summer, and wait for this exceptional flower to bloom fully at the beginning of autumn.                
                </p>
                <p className='product-description'>
                You are almost done! Distill a few pieces of Sandalwood until the first drops of its essence instantly transports you into its woody and creamy universe.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/gardens-of-india-79/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}