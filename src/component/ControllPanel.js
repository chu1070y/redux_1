import React, {Component} from 'react'
import {connect} from 'react-redux'

class ControllPanel extends Component{

    changeColor = (e) => {
        const codeValue = e.target.getAttribute("data-code");
        console.log(codeValue)
    }

    render() {
        return (
            <div>
                <h3>ControllPanel</h3>
                <button data-code="red" onClick={this.changeColor}>Red</button>
                <button data-code="green" onClick={this.changeColor}>Green</button>
                <button data-code="blue" onClick={this.changeColor}>Blue</button>
            </div>
        )
    }
}

export default connect()(ControllPanel)
