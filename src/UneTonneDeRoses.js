import React from 'react';
import UneTonneDeRosesBottle from './Assets/une-tonne-de-roses-8-bottle-520x520.jpg';
import UneTonneDeRosesBottleBox from './Assets/une-tonne-de-roses-8-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const UneTonneDeRoses = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={UneTonneDeRosesBottle}
                    alt='Une Tonne De Roses 8 Bottle'
                    onMouseOver={e => e.currentTarget.src=UneTonneDeRosesBottleBox}
                    onMouseOut={e => e.currentTarget.src=UneTonneDeRosesBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Une Tonne de Roses / 8</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Rose | Patchouli 
                </p>
                <p className='product-description'>
                Loves me, loves me not… Rose blooms unrestrainedly in this fragrance. Masses and armfuls of roses, a crazy shower of petals to celebrate the rose in a joyful olfactory fiesta.
                 </p>
                
                <p className='product-description'>
                Roses in hair, roses inhaled, roses distilled by the magic of the still, extracting just a few grams from a ton of petals.                
                </p>
                <p className='product-description'>
                The spirit of the rose is captured in those precious drops. Add a teardrop of Patchouli to give her an untamed and elegant twist.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-une-tonne-de-roses-8/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}