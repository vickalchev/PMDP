import React from 'react';
import {Link} from 'react-router-dom';
import PapyrusOudBottle from './Assets/papyrus-oud-71-bottle-520x520.jpg';
import PapyrusOudBottleBox from './Assets/papyrus-oud-71-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const PapyrusOud = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={PapyrusOudBottle}
                    alt='Papyrus Oud 71 Bottle'
                    onMouseOver={e => e.currentTarget.src=PapyrusOudBottleBox}
                    onMouseOut={e => e.currentTarget.src=PapyrusOudBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Papyrus Oud / 71</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Papyrus | Ginger | Cedar | Vanilla | Leather 
                </p>
                <p className='product-description'>
                Reminiscence of the past ? Rather of the future. Papyrus Oud / 71 is a meeting point between two spaces of time.
                 </p>
                
                <p className='product-description'>
                A reminder of a major success that our perfumer released in 2003, Papyrus Oud / 71 is the future of this accord, the modernized past, the student surpassing the master, an inimitable neo-retro by none other than Michel Almairac.                
                </p>
                <p className='product-description'>
                A stroll on the Nile with a view of the Eiffel Tower. An oriental palace in the heart of Hyde Park. Let your mind transport you into this unique journey.                
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/papyrus-oud-71/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const PapyrusOudThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/papyrus-oud-71'>
                <img 
                className='thumbnail-img'
                src={PapyrusOudBottle}
                alt='papyrus oud bottle'
                onMouseOver = {e => e.currentTarget.src=PapyrusOudBottleBox}
                onMouseOut = {e => e.currentTarget.src=PapyrusOudBottle}
                />
                <h3 className='thumbnail-name'>Papyrus Oud / 71</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}