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

//나한테 바뀐 데이터가 들어오면 나(컴포넌트)를 어떻게 바꾸는 함수
//props는 컴포넌트에서 받는 값이다. 이 함수의 return값은 props에 적용이 된다.
const mapStateToProps = (state) => {
    console.log("BillBoard.....")
    console.log(state)

    return {color:state.color}
}

export default connect(mapStateToProps)(BillBoard)
