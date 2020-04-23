import React, {Component} from "react";
import {connect} from 'react-redux'
import '../../assets/css/user.css'
const style = {
    box : 'tabs',
}
// NumberList = (props) =>{
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
const  tabss = ["a","b","c",'d']
const Saa =(props) => {
  const divs = tabss.map((item,index) =>
   <div className={props.stype} key={index}>{item}</div>
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
              <Saa stype='flex center'></Saa>
            </div>
        );
    }

}
export default connect((state,props) =>{
          return state
})(Tab)