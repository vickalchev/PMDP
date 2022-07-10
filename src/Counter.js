import {React, useState} from 'react';
import './Counter.css';


export const Counter = () => {
    const [counter, setCounter] = useState (0);

    const increaseCount = () => {
        setCounter(count => count +1);
    }

    const decreaseCount = () => {
        if (counter>0) {
        setCounter(count => count -1);
        }
    }
    
    return (
        <div className='counter'>
            <div className='counter-output'>{counter}</div>
            <div className='button-container'>
                <button 
                className='control-btn' 
                onClick={increaseCount}>
                    +
                </button>
                <button 
                className='control-btn'
                onClick={decreaseCount}>
                    -
                </button>
            </div>

        </div>

    )
}