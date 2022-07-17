import React from 'react';
import {Link} from 'react-router-dom';
import ChypreMojoBottle from './Assets/chypre-mojo-45-bottle-520x520.jpg';
import ChypreMojoBottleBox from './Assets/chypre-mojo-45-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const ChypreMojo = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={ChypreMojoBottle}
                    alt='Chypre Mojo 45 Bottle'
                    onMouseOver={e => e.currentTarget.src=ChypreMojoBottleBox}
                    onMouseOut={e => e.currentTarget.src=ChypreMojoBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Chypre Mojo / 45</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Mango | Patchouli | Bergamot | Carnation 
                </p>
                <p className='product-description'>
                Chypre as a concept saw the day in 1917 and our Chypre Mojo was born in 2017.
                 </p>
                
                <p className='product-description'>
                An entire century given over to researching, experimenting and formulating, on a mission to pinpoint Chypre’s most seductive facets, supernatural and as sensual as they come.                
                </p>
                <p className='product-description'>
                Chypre Mojo is the embodiment of sex appeal, triggering an instant addiction to its bergamot, carnation, mango and patchouli accord.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/chypre-mojo-45/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const ChypreMojoThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/chypre-mojo-45'>
                <img 
                className='thumbnail-img'
                src={ChypreMojoBottle}
                alt='chypre mojo bottle'
                onMouseOver = {e => e.currentTarget.src=ChypreMojoBottleBox}
                onMouseOut = {e => e.currentTarget.src=ChypreMojoBottle}
                />
                <h3 className='thumbnail-name'>Chypre Mojo / 45</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}