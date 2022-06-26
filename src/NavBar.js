import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

export const NavBar = () => {
   const pages = ['Concept', 'Shops', 'Perfumes', 'Find Us', 'Contact' ];
   
   return (
    <div>
        <ul className="NavBar-ul">
            {pages.map(page => 
                <li className="NavBar-li" key={page}>
                    <NavLink to ={`/${page}`}>
                    {page}
                    </NavLink>
                    </li>
                )}
        </ul>
    </div>
   );

}

