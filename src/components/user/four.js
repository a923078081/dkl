import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
class Four extends Component{
    constructor(...args) {
        super(...args);
        this.state={

        };
    }
    render() {
        return (
            <div style={this.props.keys===4?{display:'block'}:{display:'none'}}>
               4
                {console.log(this.props)}
            </div>
        );
    }

}
export default connect((state,props) =>{
    return state.user
})(Four)