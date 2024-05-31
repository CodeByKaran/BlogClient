import React from 'react'
import 'lord-icon-element';

export default function LottieIcon({
   id = "ayhtotha",
   w = "24px",
   h = "24px"
}) {
  return (
     <lord-icon
      src={`https://cdn.lordicon.com/${id}.json`}
      trigger="click"
      colors="primary:#d7d7d7,secondary:#7d7d7d"
       style={{
             width: w,
             height: h,
          }}>
     </lord-icon>
  )
}