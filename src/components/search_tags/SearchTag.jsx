import React from 'react'
import ButtonWhite  from "../buttons/ButtonWhite.jsx"

const SearchTag = () => {
  return (
    <div className="w-full sm:w-full md:w-[90%] h-fit overflow-x-auto flex pb-5 pt-3 scrollBar ">
     <ButtonWhite 
       text="User"
       size= "14px"
       width = "70px"
       radius = "25px"
      />
           <ButtonWhite 
       text="Trending"
       size= "14px"
       width = "wrap-content"
       radius = "25px"
      />
           <ButtonWhite 
       text="Most Liked"
       size= "14px"
       width = "wrap-content"
       radius = "25px"
      />
           <ButtonWhite 
       text="Most Comment"
       size= "14px"
       width = "wrap-content"
       radius = "25px"
      />
           <ButtonWhite 
       text="Most Followed"
       size= "14px"
       width = "wrap-content"
       radius = "25px"
      />
    </div>
  )
}

export default SearchTag