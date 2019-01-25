import React, {Component} from 'react'
import {connect} from 'react-redux'

class BillBoard extends Component{

    render() {
        return (
            <div>
                <h3>BillBoard - {this.props.area}</h3>
                <h4>{this.props.color}</h4>
                <hr></hr>
            </div>
        )
    }
}

export default connect()(BillBoard)
