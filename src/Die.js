// <i class="fas fa-dice-two"></i>
import React, { PureComponent } from 'react'
import './Die.css';

class Die extends React.Component{
static defaultProps = {
    array: ['one', 'two', 'three', 'four', 'five', 'six']
};

converter(num){
return this.props.array[num - 1];
}

render() {
    
    const {value, idx, toggleLock, isLocked, isRolling, rollsLeft} = this.props;
    
    let classes = `fas fa-dice-${this.converter(value)} fa-4x `;
    if(isLocked){
        classes += `Die-locked `
    }
    if(isRolling) classes += 'Die-rolling ';
    if(rollsLeft < 1) classes += 'Die-no-cursor'
    return (
        <div className="Die" onClick={rollsLeft >= 1 ? () => toggleLock(idx) : null}>
            <i class={classes}></i>
        </div>
    )
}
};

export default Die;