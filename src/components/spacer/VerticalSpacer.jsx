import React from 'react'

const VerticalSpacer = ({
   h = "10px"
}) => {
  return (
    <div className="w-full bg-inherit" style={{height:h}}>
    </div>
  )
}

export default VerticalSpacer