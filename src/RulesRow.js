import React, { PureComponent } from 'react'
import './RulesRow.css';

class RulesRow extends React.Component{
render() {
    const {name, scores, doScore} = this.props;
    let trClass = "table-row "
    if(scores === undefined ) {
        trClass += ""
    } else {
        trClass += 'table-row-disabled'
    }
return (
    <div className="RulesRow">
        <tr className={trClass} onClick={scores === undefined ? () => doScore() : null}>
            <td>{name}</td>
            <td>{scores}</td>
        </tr>
    </div>
)
}
};

export default RulesRow;