import React from 'react';
import {Link} from 'react-router-dom';
import CedarWoodpeckerBottle from './Assets/cedar-woodpecker-10-bottle-520x520.jpg';
import CedarWoodpeckerBottleBox from './Assets/cedar-woodpecker-10-bottle-box-bottle-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const CedarWoodpecker = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={CedarWoodpeckerBottle}
                    alt='Cedar Woodpecker'
                    onMouseOver={e => e.currentTarget.src=CedarWoodpeckerBottleBox}
                    onMouseOut={e => e.currentTarget.src=CedarWoodpeckerBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Cedar Woodpecker / 10</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Cedar | Iris 
                </p>
                <p className='product-description'>
                For men who are proud of their addiction to woody notes, are crazy about them, want them, would even almost eat them!
                 </p>
                
                <p className='product-description'>
                Nothing else matters, just that intense, woody and velvety harmony.            
                </p>

                <p className='product-description'>
                A unique blend of different cedarwood essences, combined with iris to create that perfect elegance and seduction.           
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-cedar-woodpecker-10/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const CedarWoodpeckerThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/cedar-woodpecker-10'>
                <img 
                className='thumbnail-img'
                src={CedarWoodpeckerBottle}
                alt='cedar woodpecker bottle'
                onMouseOver = {e => e.currentTarget.src=CedarWoodpeckerBottleBox}
                onMouseOut = {e => e.currentTarget.src=CedarWoodpeckerBottle}
                />
                <h3 className='thumbnail-name'>Cedar Woodpecker / 10</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}