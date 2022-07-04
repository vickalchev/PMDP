import React from 'react';
import heroImage from './Assets/pmdparfum-wake-up-world-hero.jpg';
import './Hero.css';

export const Hero = () => {
    return (
        <img className='hero-image' src={heroImage} alt=''></img>
    );
}