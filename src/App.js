import React, {useEffect,useState} from 'react'
import logo from './logo.svg';
import {useSelector,useDispatch} from 'react-redux'
import {userDataRecords} from './actions/index'
import axios from 'axios';
// import ReactTable from 'react-table'

import './App.css';

const App = () =>{
  const [searchItem, setSearchItem] =useState('')

  const userData = useSelector(state => state.allUserData.userInfo)
  console.log(userData)
  const dispatch= useDispatch()


  const fetchUserdata = () =>{
    return axios.get("https://randomuser.me/api/?results=5000")
    .then((res) =>{
      console.log(res.data.results)
      dispatch(userDataRecords(res.data.results))
    })
    .catch((err) =>{
      console.log(err)
    })
  }


  useEffect (() =>{
    fetchUserdata()
  },[])

  
const header= ["Gender","Email","City","Name"]
  return (
    <div className="App">
      <p>React</p>
     
      <input type="text" name="search"  onChange={event =>{setSearchItem(event.target.value)}}/>
      {userData.filter((data) =>{
          if(searchItem == "")
          return data
          else if(data.email.toLowerCase().includes(searchItem.toLocaleLowerCase())){
            return data
          }
      }).map((data, id) =>{

        const {first, last} = data.name
        const {gender,email,city,name} = data;
        return(
          <div>
          
            <table className="table">
              
              <td>{gender}</td>
              <td>{email}</td>
              <td>{city}</td>
              <td>{name.first}{name.last}</td>
            </table>
           
          </div>
        )
      })}
    </div>
  );
}

export default App;
