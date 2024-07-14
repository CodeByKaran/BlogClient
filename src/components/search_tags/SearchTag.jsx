import React from 'react'
import ButtonWhite  from "../buttons/ButtonWhite.jsx"

const SearchTag = ({handleClick}) => {
   
   const handleButtonClick=(type)=>{
      handleClick(type)
   }
   
  return (
    <div className="w-full sm:w-full md:w-[90%] h-fit overflow-x-auto flex pb-5 pt-3 scrollBar ">
     <ButtonWhite 
       text="Owner"
       size= "14px"
       width = "70px"
       radius = "25px"
       fun={()=>handleButtonClick("owner")}
      />
           <ButtonWhite 
       text="User"
       size= "14px"
       width = "70px"
       radius = "25px"
       fun={()=>handleButtonClick("user")}
      />
           <ButtonWhite 
       text="Most Followed"
       size= "14px"
       width = "wrap_content"
       radius = "25px"
       fun={()=>handleButtonClick("followed")}
      />
    </div>
  )
}

export default SearchTag