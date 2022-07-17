import React from 'react';
import {Link} from 'react-router-dom';
import WoodyPerfectoBottle from './Assets/woody-perfecto-107-bottle-520x520.jpg';
import WoodyPerfectoBottleBox from './Assets/woody-perfecto-107-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const WoodyPerfecto = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={WoodyPerfectoBottle}
                    alt='Woody Perfecto'
                    onMouseOver={e => e.currentTarget.src=WoodyPerfectoBottleBox}
                    onMouseOut={e => e.currentTarget.src=WoodyPerfectoBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Woody Perfecto / 107</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Coffee | Vetiver | Leather 
                </p>
                <p className='product-description'>
                Coffee aromas, vetiver roots, infusion of leather. These three notes sketch out the unique silhouette of a Perfecto.
                 </p>
                
                <p className='product-description'>
                For a split second, just imagine being a rock idol and experiencing the passion of legendary concerts, all-night parties and adoring groupies.          
                </p>

                <p className='product-description'>
                Woody Perfecto symbolises freedom. It is the fragrant key to a horizon that knows no limits.         
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-woody-perfecto-107/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}


export const WoodyPerfectoThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/woody-perfecto-107'>
                <img 
                className='thumbnail-img'
                src={WoodyPerfectoBottle}
                alt='woody perfecto bottle'
                onMouseOver = {e => e.currentTarget.src=WoodyPerfectoBottleBox}
                onMouseOut = {e => e.currentTarget.src=WoodyPerfectoBottle}
                />
                <h3 className='thumbnail-name'>Woody Perefecto 107</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}