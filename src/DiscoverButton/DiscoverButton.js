import React from 'react';
import {Link} from 'react-router-dom';
import {ProductLine} from '../ProductLine/ProductLine';
import './DiscoverButtonStyle.css';


export const DiscoverBtn = () => {
    
    
    return (
        <div className='discover-container'>
        <Link 
        className='discover-link'
        to='/perfumes'>
            <button
                className='discover-btn'>Discover More
            </button>    
        </Link>
        </div>
    )

}