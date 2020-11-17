import React from 'react';
import '../styles/Die.css'

 function Die(props) {
     let dicRoll1 = props.dice1;
     let dicRoll2 = props.dice2;
    return (
        <div className="Die">
            <i className={`fas fa-${dicRoll1} fa-4x`}></i>
            <i className={`fas fa-${dicRoll2} fa-4x`}></i>
        </div>
    )
}

export default Die;
