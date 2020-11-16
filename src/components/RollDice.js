import React, { Component } from 'react'
import Die from './Die'

 class RollDice extends Component {
     constructor(props){
         super(props)
         this.state = {
             dice1 : 1,
             dice2 : 6
         }
     }
    render() {
        return (
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Die />
                    <Die />
                </div>
                             
                <button>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;
