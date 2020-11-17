import React, { Component } from 'react'
import Die from './Die'

 class RollDice extends Component {
     constructor(props){
         super(props)
         this.state = {
             dice1 : 'dice',
             dice2 : 'dice'
         }
    }

    rollDice = ()=>{
        // Generate a random number for the first and second dice 1-6
        let diceNum1 = Math.floor(Math.random() * 6) + 1;
        let diceNum2 = Math.floor(Math.random() * 6) + 1;

        // Set the first dice to the generated number
        this.setState({dice1: diceNum1})
        this.setState({dice2: diceNum2})

        // Check value of Rolled Dice
        switch(diceNum1){
            case 1:
                this.setState({dice1: "dice-one"})
            break;
            case 2:
                this.setState({dice1: "dice-two"})
            break;
            case 3:
                this.setState({dice1: "dice-three"})
            break;
            case 4:
                this.setState({dice1: "dice-four"})
            break;
            case 5:
                this.setState({dice1: "dice-five"})
            break;
            case 6:
                this.setState({dice1: "dice-six"})
            break;
            default:
                this.setState({dice1: "dice"})

        }
        switch(diceNum2){
            case 1:
                this.setState({dice2: "dice-one"})
            break;
            case 2:
                this.setState({dice2: "dice-two"})
            break;
            case 3:
                this.setState({dice2: "dice-three"})
            break;
            case 4:
                this.setState({dice2: "dice-four"})
            break;
            case 5:
                this.setState({dice2: "dice-five"})
            break;
            case 6:
                this.setState({dice2: "dice-six"})
            break;
            default:
                console.log('Roll again');

        }
    }
    render() {
        return (
            <div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Die dice1={this.state.dice1} />
                    <Die dice2={this.state.dice2}/>
                </div>
                             
                <button className="Die-button" onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;
