import React, { PureComponent } from 'react';
import './Game.css';
import Dice from './Dice';
import RulesTable from './RulesTable'

const numDice = 5;
const numChance = 3;

class Game extends React.Component{

constructor(props){
super(props);
this.state = {
 dice: Array.from({length: numDice}).map(cur => 5),
 isLocked: Array.from({length: numDice}).fill(false),
 rollsLeft: numChance,
 isRolling: false,
 scores: {
   ones: undefined,
   twos: undefined,
   threes: undefined,
   fours: undefined,
   fives: undefined,
   sixes: undefined,
   threeOfKind: undefined,
   fourOfKind: undefined,
   fullHouse: undefined,
   smallStraight: undefined,
   largeStraight: undefined,
   yahtzee: undefined,
   chance: undefined

 },
 totalScore: 0
 
};


this.roll = this.roll.bind(this);
this.toggleLock = this.toggleLock.bind(this);
this.doScore = this.doScore.bind(this);
this.animateRoll = this.animateRoll.bind(this);

};




animateRoll(){
this.setState({isRolling: true}, () => {
  setTimeout(this.roll, 1000);
});

};


roll(e){
this.setState(curSt => ({
dice: curSt.dice.map((d, index) => {
return curSt.isLocked[index] === false ? Math.ceil(Math.random() * 6) : d;
}),
isLocked: curSt.rollsLeft > 1 ? curSt.isLocked : Array.from({length: numDice}).fill(true),
rollsLeft: curSt.rollsLeft - 1,
isRolling: false

}));
};


toggleLock(index){
this.setState(curSt => ({
  isLocked: [
    ...curSt.isLocked.slice(0, index), 
    !curSt.isLocked[index], 
    ...curSt.isLocked.slice(index + 1)
]
}));
};


doScore(ruleName, ruleFn){
this.setState(curSt => ({
  scores: {...curSt.scores, [ruleName]: ruleFn(this.state.dice)},
  isLocked: Array.from({length: numDice}).fill(false),
  rollsLeft: numChance
}));

this.animateRoll();
};


render() {
return (
<div className="yahtzee">
  {/* Game display and button */}
  <section className="Game-btn-content">
      <h2>YAHTZEE</h2>
      <Dice
      dice={this.state.dice}
      toggle={this.toggleLock}
      isLocked={this.state.isLocked}
      isRolling={this.state.isRolling}
      rollsLeft={this.state.rollsLeft}
      />
      <button 
      className={`Game-btn ${this.state.rollsLeft < 1 ? 'btn-disabled' : ''}`}
      onClick={this.animateRoll}
      disabled={this.state.rollsLeft < 1 || this.state.isRolling} 
      >{this.state.rollsLeft > 1 ? this.state.rollsLeft : 0} Rolls Left
      </button>
  </section> 
  {/* Table Section */}
  <section className="Game-table">
    <RulesTable scores={this.state.scores} doScore={this.doScore}/>
  </section>
</div>
)
}
};

export default Game;
