import React, { PureComponent } from 'react'
import './Dice.css';
import Die from './Die'

class Dice extends React.Component{
render() {
    const {dice, toggle, isLocked, isRolling, rollsLeft} = this.props;
    return (
        <div className="Dice">
            {dice.map((d , index) => {
                return (
                    <Die
                    value={d}
                    idx={index}
                    toggleLock={toggle}
                    isLocked={isLocked[index]}
                    isRolling = {isRolling && !isLocked[index]}
                    rollsLeft = {rollsLeft}
                    />
                )
            })}
        </div>
    )
}
};

export default Dice;