import React from 'react';
import './ShopsStyle.css';
import LeMaraisShop from '../Assets/le-marais.JPG';
import SaintGermainShop from '../Assets/st-germain-store.jpg';


export const Shops = () => {
    return (
        <div className='shops-container'>
            <div className='single-shop-container'>
                <div className='shop-img-container'>
                    <img
                        className='shop-img' 
                        src={LeMaraisShop}
                        alt='Le Marais Shop'
                    />
                </div>
                <div className='shop-info-container'>
                    <h3>Le Marais</h3>
                    <p className='address'>
                        10 rue de Savigne, 75004, Paris, France
                    </p>
                    <p className='shop-description'>
                    Parle Moi de Parfum is an opportunity to discover the work of a perfumer, and the different stages involved in creating a fragrance – all within clear and calm retail spaces.
                    </p>
                    <p className='shop-description'>
                    Perfumery is constantly evolving and this shop is breaking new ground. The laboratories are located right in the centre of Paris and give directly onto the street. It’s a first ! Showcasing such authenticity is a display of confidence: no more secrets; it’s all on show to fill you and your eyes with wonder.
                    </p>
                    <p className='shop-description'>
                    A workbench, weighing scales, a collection of beakers. Plus over two hundred natural and synthetic raw materials arranged on translucent shelves against a grey-blue glass background. These essences and absolutes are used every day to compose the future formulae.
                    </p>
                    <p className='shop-description'>
                    The focal point is in the centre of the shop, where bottles and blotters are arranged to smell the different olfactory signatures – and dream as you listen to the sources of inspiration that drive the exclusive perfumer, Michel Almairac.
                    </p>

                </div>
            </div>
            <div className='single-shop-container'>
                <div className='shop-info-container'>
                <h3>St Germain des Pres</h3>
                    <p className='address'>
                        22 rue du Four, 75006, Paris, France
                    </p>
                    <p className='shop-description'>
                    Parle Moi de Parfum is an opportunity to discover the work of a perfumer, and the different stages involved in creating a fragrance – all within clear and calm retail spaces.
                    </p>
                    <p className='shop-description'>
                    Perfumery is constantly evolving and this shop is breaking new ground. The laboratories are located right in the centre of Paris and give directly onto the street. It’s a first ! Showcasing such authenticity is a display of confidence: no more secrets; it’s all on show to fill you and your eyes with wonder.
                    </p>
                    <p className='shop-description'>
                    A workbench, weighing scales, a collection of beakers. Plus over two hundred natural and synthetic raw materials arranged on translucent shelves against a grey-blue glass background. These essences and absolutes are used every day to compose the future formulae.
                    </p>
                    <p className='shop-description'>
                    The focal point is in the centre of the shop, where bottles and blotters are arranged to smell the different olfactory signatures – and dream as you listen to the sources of inspiration that drive the exclusive perfumer, Michel Almairac.
                    </p>
                </div>
                <div className='shop-img-container'>
                    <img    
                        className='shop-img'    
                        src={SaintGermainShop}
                        alt='Saint Germain Shop'
                        />
                </div>
            </div>

        </div>

    )
}
