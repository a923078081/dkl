import {createStore,combineReducers} from 'redux'
import User from './user'
const arr = combineReducers({
    user:User
})
export default createStore(arr)
