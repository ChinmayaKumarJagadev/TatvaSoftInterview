export const userDataRecords = (userData) =>{
    return{
        type: 'GET_USER_DATA',
        payload: userData
    }
}