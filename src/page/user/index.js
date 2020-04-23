import React,{Component} from 'react'
import {connect} from 'react-redux'
import upFile from '../../ulits/fileload'
import '../../assets/css/user.css'
import Tab from '../../components/user/tab'
class User  extends Component{
    constructor(...args) {
        super(...args);
        this.state={
        }
    }

    getHttp = (obj) =>{
        React.$axiosGet('/user/Info',obj).then(
             res=>{
                 console.log(res)
             }
        )
    }
    getFile = () =>{
       let file = document.getElementById('submit').files[0];
       upFile(file)
    }
    render(){
        return (
            <div className='box'>
                <Tab></Tab>
                {/*<this.NumberList numbers={this.numbers} />,*/}
                {/*<input type='button' onClick={this.getHttp.bind(this,{ab:'哈哈' , aa:'2', ac:'3' })} value='發送請求'/>*/}
                {/*<input type='file' id='submit' onChange={this.getFile.bind(this)}/>*/}
            </div>
        );
    }
}
export default connect( (state,props) => {
    return state
},{

})(User)