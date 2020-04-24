import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
class First extends Component{
    constructor(...args) {
        super(...args);
        this.state={

        };
    }
    render() {
        return (
            <div style={this.props.keys===1?{display:'block'}:{display:'none'}}>
                1
            </div>
        );
    }

}
export default connect((state,props) =>{
    return state.user
})(First)