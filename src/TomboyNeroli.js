import React from 'react';
import TomboyNeroliBottle from './Assets/tomboy-neroli-65-bottle-520x520.jpg';
import TomboyNeroliBottleBox from './Assets/tomboy-neroli-65-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const TomboyNeroli = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={TomboyNeroliBottle}
                    alt='Tomboy Neroli'
                    onMouseOver={e => e.currentTarget.src=TomboyNeroliBottleBox}
                    onMouseOut={e => e.currentTarget.src=TomboyNeroliBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Tomboy Neroli / 65</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Neroli | Orange Blossom | Amber 
                </p>
                <p className='product-description'>
                Tousled hair, white T-shirt, faded jeans, sneakers…
                 </p>
                
                <p className='product-description'>
                Neroli and amber notes give this fragrance a careless sophistication that boys and girls adopt with the same ease.          
                </p>

                <p className='product-description'>
                A novel creation starring orange blossom. A burst of freedom and modernity that spurns all codes.         
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-tomboy-neroli-65/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}