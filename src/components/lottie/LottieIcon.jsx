import React, { forwardRef } from 'react';
import 'lord-icon-element';

const LottieIcon = ({
      id = "ayhtotha",
      stroke,
      style,
      color ="#d7d7d7"
   })=>{
  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${id}.json`}
      trigger="click"
      stroke = {stroke&&stroke}
      colors={`primary:${color},secondary:#7d7d7d`}
      style={style}
    ></lord-icon>
  );
};

export default LottieIcon;
