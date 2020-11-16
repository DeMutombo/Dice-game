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

    rollDice = ()=>{
        // Generate a random number for the first and second dice 1-6
        let diceNum1 = Math.floor(Math.random() * 6) + 1
        let diceNum2 = Math.floor(Math.random() * 6) + 1
        // Set the first dice to the generated number
        this.setState({dice1: diceNum1})
        this.setState({dice2: diceNum2})
        console.log(this.state.dice1);
    }
    render() {
        return (
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Die dice1={this.state.dice1}/>
                    <Die dice1={this.state.dice2}/>
                </div>
                             
                <button onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;
