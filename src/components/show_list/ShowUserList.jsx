import React,{useEffect,useState} from 'react'
import UserList from "../searched_users/UserList.jsx"

const ShowUserList = ({
   data = []
}) => {
   
   
   
  return (
    <ul className="w-full sm:w-full md:w-[90%] lg:w-[85%] mt-1">
      {data.length?
         data.map((e, i) => 
         <UserList key={i} 
           showborder = {(data.length-1)==i?false:true}
          />):
         <UserList />
      }
    </ul>
  )
}

export default ShowUserList