import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
class Three extends Component{
    constructor(...args) {
        super(...args);
        this.state={

        };
    }
    render() {
        return (
            <div style={this.props.keys===3?{display:'block'}:{display:'none'}}>
              3
            </div>
        );
    }

}
export default connect((state,props) =>{
    return state.user
})(Three)