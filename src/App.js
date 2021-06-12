import React, {useEffect,useState} from 'react'
import logo from './logo.svg';
import {useSelector,useDispatch} from 'react-redux'
import {userDataRecords} from './actions/index'
import axios from 'axios';
// import ReactTable from 'react-table'
import Pagination from './Pagination/Pagination'
import './App.css';

const App = () =>{
  const [searchItem, setSearchItem] =useState('')
  const [pageCount, setPageCount] = useState(0)
  const userPerPage = 10;
  const pageVisit = pageCount * userPerPage
    
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



//setting up the Headers
const allheader = () =>{
  const header = ['Gender', 'Email', 'Name','City', 'State', 'Picture']
  return header.map((headers,index) =>{
    return (
      <th key={index}>{headers.toUpperCase()}</th>
    )
  })
}



 // For rendering Pagenumber for all Pages
 const totalPageCount = Math.ceil(userData.length / userPerPage) 
 const handlePagination = ({selected}) =>{
    setPageCount(selected)
  }

  return (
    <div className="App">
      <p>React</p>
     
       <input type="text" name="search" onChange={(e) =>setSearchItem(e.target.value)}/>
          <div>
          
            <table className="table">
              <thead>
                <tr>{allheader()}</tr>
              </thead>

              <tbody>              
                 {userData.slice(pageVisit, pageVisit + userPerPage)
                          .filter((data) =>{
                            //console.log(data)
                             if(searchItem == "")
                                 return data
                             else if(data.email.toLowerCase().includes(searchItem.toLowerCase())){
                                 return data
                           }else if(data.name.first.toLowerCase().includes(searchItem.toLowerCase())){
                             return data
                           }
                        }).map(({gender,email,name,location,picture}) =>{
   
                    return(
                         <tr>
                         <td>{gender}</td>
                         <td>{email}</td>
                         <td>{name.first} {name.last}</td>
                         <td>{location.city}</td>
                         <td>{location.state}</td>
                         <td><img src={picture.medium} /></td>
                         </tr>
                        )
                    })
                 }
            </tbody>             
            </table>
           
           <Pagination pageCount={totalPageCount} onClick={handlePagination}/>
          </div>
        </div>
  );
}

export default App;
