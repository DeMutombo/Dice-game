import React, { Component } from 'react'
import Die from './Die'

 class RollDice extends Component {
     constructor(props){
         super(props)
         this.state = {
             dice1 : 1,
             dice2 : 6,
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
                this.setState({})
                this.setState({dice1: 1})
            break;
            case 2:
                this.setState({dice1:  2})
            break;
            case 3:
                this.setState({dice1: 3})
            break;
            case 4:
                this.setState({dice1: 4})
            break;
            case 5:
                this.setState({dice1: 5})
            break;
            case 6:
                this.setState({dice1: 6})
            break;
            default:
                console.log('Roll again');

        }
        switch(diceNum2){
            case 1:
                this.setState({dice2: 1})
            break;
            case 2:
                this.setState({dice2: 2})
            break;
            case 3:
                this.setState({dice2: 3})
            break;
            case 4:
                this.setState({dice2: 4})
            break;
            case 5:
                this.setState({dice2: 5})
            break;
            case 6:
                this.setState({dice2: 6})
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
                    <Die dice1={this.state.dice2}/>
                </div>
                             
                <button onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;
