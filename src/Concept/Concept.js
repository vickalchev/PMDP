import React from 'react';
import HeaderImg from '../Assets/concept-header-img.jpg';
import StoreImg from '../Assets/concept-store-image.jpg';
import './ConceptStyle.css';

export const Concept = () => {
    return (
        <div className='concept-container'>
            <img 
            className='concept-header-img'
            src={HeaderImg}
            alt='smelling strips on black bkg'
            />
            <div className='text-col-container'>
                <div className='text-container'>
                    <h2>All About Family</h2>
                    <p>
                    Parle Moi de Parfum is all about family. Benjamin Almairac grew up with stories about perfume that his father brought home from work. He dreamt of creating a venue right in the centre of Paris where the public could discover the finest fragrances that Michel Almairac had always dreamed of creating and staging.
                    </p>
                    <p>
                    Together with Elisabeth, his mother, and Romain, his brother, he designed a space for witnessing the creation of a perfume and discovering that combination of magic and technique, of disconcerting ease and maddening complexity, that Michel describes when talking about his work.
                    </p>
                    <h2>Evidence and Passion</h2>
                    <p>
                    “It was absolutely obvious! I was steeped in perfume when I was a boy. It was difficult to miss!” Benjamin
                    </p>
                    <p>
                    “Passion. Being sure that it’s the right formula, finding exactly the right name, moving the creative process forward… A natural extension of my everyday job.” Romain
                    </p>
                    <p>
                    “Because when you spend your life imagining and composing for others, you sooner or later want to create with your own dreams and share them. With your children first of all. And then with others.” Michel
                    </p>
                </div>
                <div className='text-container'>
                <h2>Talk About Perfume and Nothing Else  </h2>
                <p>
                In bright and relaxing retail spaces at 10 rue de Sévigné and 22 rue du Four, Benjamin has created a lab – complete with raw materials and weighing station – where a young perfumer works every day.
                </p>
                <p>
                He explains that when Michel, the in-house fragrance designer, sees a rose he immediately sketches out in his head the trail of a composition; when he slips into his leather jacket he is calculating the proportions of a future formula; and when he savours a marshmallow, eyes closed, he is uniting vanilla with orange blossom.
                </p>
                <p>
                Then follows the delicate task of selecting raw materials, rounded off by a series of weighing sessions, assessments and critiquing until the olfactory form in his imagination has been stabilised and the formula reaches a state of equilibrium.
                </p>
                <p>
                The number given to the final formula seals the product’s final name forever.
                </p>
                <p>
                A fan of fragrance blotters as a logo, an iconic bottle and a collection entirely made in France of fifteen eaux de parfum with evocative names: Une Tonne de Roses / 8, Guimauve de Noël / 31, Flavia Vanilla / 82, Totally White / 126, Cedar Woodpecker / 10, Milky Musk / 39, Tomboy Neroli / 65, Woody Perfecto / 107, Orris Tattoo / 29, Chypre Mojo / 45, Gardens of India / 79, Papyrus Oud / 71, Saffron Wood / 91, Mile High / 38 and Haute Provence / 89.
                </p>
                </div>
            </div>
            <img 
            className='concept-footer-image'
            src={StoreImg}
            alt='store shot'
             />
            

        </div>
    )
}