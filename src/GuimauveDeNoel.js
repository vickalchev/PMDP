import React from 'react';
import {Link} from 'react-router-dom';
import GuimauveDeNoelBottle from './Assets/guimauve-de-noel-31-bottle-520x520.jpg';
import GuimauveDeNoelBottleBox from './Assets/guimauve-de-noel-31-bottle-box-520x520.jpg';
import './Product-Style.css';
import {Counter} from './Counter';

export const GuimauveDeNoel = () => {
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                 <img 
                    className='product-img'
                    src={GuimauveDeNoelBottle}
                    alt='Guimauve De Noel 31'
                    onMouseOver={e => e.currentTarget.src=GuimauveDeNoelBottleBox}
                    onMouseOut={e => e.currentTarget.src=GuimauveDeNoelBottle}
                    >
                </img>         
            </div>
            <div className='product-info-container'>
                <h1 className='product-name'>Guimauve De Noel / 31</h1>
                <p className='price-range'>95,00€ - 155,00€ </p>
                <p className='perfume-notes'>
                Orange Blossom | Sugar | Vanilla
                </p>
                <p className='product-description'>
                Christmas celebrations, bursts of laughter, delicious treats to eat…
                 </p>
                
                <p className='product-description'>
                The comforting scents of childhood, immediately identifiable fragrances that take you by the hand and plunge you into your earliest memories… Carefree days, undiluted joy, immediate and absolute trust.                
                </p>
                <p className='product-description'>
                The orange blossom and vanilla-scented sugar in Guimauve de Noël (Christmas Marshmallow) offer an instant of respite, of letting go, of tender and reassuring memories.              
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
                <a className='button-link' href='https://parlemoideparfum.com/en/boutique/perfume-guimauve-de-noel-31/'>
                    <button className='buy-button'>Buy</button>
                </a>  
                </div>
            </div>
        </div>
    )
}

export const GuimauveDeNoelThumbnail = () => {
    return (
            <div className='thumbnail-container'>
        <Link className='thumbnail-link' to='/guimauve-de-noel-31'>
                <img 
                className='thumbnail-img'
                src={GuimauveDeNoelBottle}
                alt='guimauve de noel bottle'
                onMouseOver = {e => e.currentTarget.src=GuimauveDeNoelBottleBox}
                onMouseOut = {e => e.currentTarget.src=GuimauveDeNoelBottle}
                />
                <h3 className='thumbnail-name'>Guimauve de Noel / 31</h3>
        </Link>
                <p className='price-range'>95,00€ - 155,00€ </p>
            </div>
    )
}