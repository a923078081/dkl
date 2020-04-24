import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
class Two extends Component{
    constructor(...args) {
        super(...args);
        this.state={

        };
    }
    render() {
        return (
            <div style={this.props.keys===2?{display:'block'}:{display:'none'}}>
               2
            </div>
        );
    }

}
export default connect((state,props) =>{
    return state.user
})(Two)