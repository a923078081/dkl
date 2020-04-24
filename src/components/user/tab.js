import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
const style = {
    box : 'tabs',
}
const getTab=function(props,index){
 props.Fn.setIndex(index);
}
const Saa =(props) => {
  const divs = props.tabss.map((item,index) =>
   <div className={props.stype} key={index} onClick={getTab.bind(this,props,index+1)}>
       <div className='user_icon1'></div>
       <div style={{position:'absolute',marginTop:'0.15rem'}}>11</div>
   </div>
)
  return (divs)
}
class Tab extends Component{
    constructor(...args) {
        super(...args);
        this.state={

        };
    }

    render() {
        return (
            <div className={style.box}>
              <Saa stype='flex center' tabss={this.props.tabss} Fn={this.props}></Saa>
            </div>
        );
    }

}
export default connect((state,props) =>{
          return state.user
},{
   setIndex(index){
       return {
           type : 'Tab_Index',
           keys : index
       }
   }
})(Tab)