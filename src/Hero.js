import React from 'react';
import {Link} from 'react-router-dom';
import heroImage from './Assets/pmdparfum-wake-up-world-hero.jpg';
import './Hero.css';

export const Hero = () => {
    return (
        <Link to='/wake-up-world/'>
        <img className='hero-image' src={heroImage} alt=''></img>
        </Link>
    );
}