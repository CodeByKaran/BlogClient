import React from 'react'

const VerticalSpacer = ({
   h = "10px",
   bg = ""
}) => {
  return (
    <div className="w-full bg-inherit" style={{height:h,background:bg&&bg}}>
    </div>
  )
}

export default VerticalSpacer