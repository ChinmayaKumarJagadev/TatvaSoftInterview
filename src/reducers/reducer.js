const initialState={
    userInfo: []
}

const userDetails = (state= initialState, action) =>{
    switch(action.type){
        case 'GET_USER_DATA' : return {...state, userInfo: action.payload}
        default: return state
    }
}
export default userDetails