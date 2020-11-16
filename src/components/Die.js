import React from 'react'

 function Die(props) {
    return (
        <div style={{margin:'25px'}}>
            <h4>{props.dice1}</h4>
            <h4>{props.dice2}</h4>
        </div>
    )
}

export default Die;
