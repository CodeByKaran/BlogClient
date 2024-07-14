import React,{useEffect,useState} from 'react'
import UserList from "../searched_users/UserList.jsx"
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../spinner/Spinner.jsx"

const ShowUserList = ({
   users = [],
   totalUser,
   fetchNext=()=>{},
   loading = false
}) => {
   
   console.log(loading)
   
  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchNext}
      hasMore={users?.length !== totalUser}
      className="w-full"
    >
      {users.length?
         users.map((e, i) => 
         <UserList key={i} 
           showborder = {(users.length-1)==i?false:true}
           user = {e}
          />):<div className="h-[120px] my-6 w-full">
           {loading&&
           <Spinner />
           }
          </div>
      }
    </InfiniteScroll>
  )
}

export default ShowUserList