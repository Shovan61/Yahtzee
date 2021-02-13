import React, { PureComponent } from 'react';
import './RulesTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance} from './Rules';
import RulesRow from './RulesRow';

class RulesTable extends React.Component{

getTotal(){
    const {scores} = this.props;
    let total = 0;
    for(let key in scores){
        if(scores[key]) total += scores[key] 
    }
    return total;
}

render() {
    const {doScore, scores} = this.props;
return (
    <div className="RulesTable">
        <section className="upper">
           <h1>Upper</h1>
           <table cellSpacing="0">
               <tbody>
                   <RulesRow name="Ones" scores={scores.ones} doScore={() => doScore('ones', ones.evalRoll)}/>
                   <RulesRow name="Twos" scores={scores.twos} doScore={() => doScore('twos', twos.evalRoll)}/>
                   <RulesRow name="Threes" scores={scores.threes} doScore={() => doScore('threes', threes.evalRoll)}/>
                   <RulesRow name="Fours" scores={scores.fours} doScore={() => doScore('fours', fours.evalRoll)}/>
                   <RulesRow name="Fives" scores={scores.fives} doScore={() => doScore('fives', fives.evalRoll)}/>
                   <RulesRow name="Sixes" scores={scores.sixes} doScore={() => doScore('sixes', sixes.evalRoll)}/>
               </tbody>
           </table>
        </section>

        <section className="lower"> 
        <h1>Lower</h1>
           <tbody cellSpacing="0">
           <RulesRow name="3 of Kind" scores={scores.threeOfKind} doScore={() => doScore('threeOfKind', threeOfKind.evalRoll)}/>
           <RulesRow name="4 of Kind" scores={scores.fourOfKind} doScore={() => doScore('fourOfKind', fourOfKind.evalRoll)}/>
           <RulesRow name="Full House" scores={scores.fullHouse} doScore={() => doScore('fullHouse', fullHouse.evalRoll)}/>
           <RulesRow name="Small Straight" scores={scores.smallStraight} doScore={() => doScore('smallStraight', smallStraight.evalRoll)}/>
           <RulesRow name="Large Straight" scores={scores.largeStraight} doScore={() => doScore('largeStraight', largeStraight.evalRoll)}/>
           <RulesRow name="Yahtzee" scores={scores.yahtzee} doScore={() => doScore('yahtzee', yahtzee.evalRoll)}/>
           <RulesRow name="Chance" scores={scores.chance} doScore={() => doScore('chance', chance.evalRoll)}/>
           </tbody>
        </section>
        <section className="totalScore">
        <h1>Total Score: {this.getTotal()}</h1>
        </section>
    </div>
)
}
};


export default RulesTable;