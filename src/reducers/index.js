import userDetails from './reducer'
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    allUserData: userDetails
})

export default rootReducer