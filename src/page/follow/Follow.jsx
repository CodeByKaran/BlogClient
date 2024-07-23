import React from 'react'
import FollowSwitchBar from "../../components/follow_switch_bar/FollowSwitchBar.jsx"
import {Outlet} from "react-router-dom"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"



const Follow = () => {
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] text-white">
      <FollowSwitchBar />
      <VerticalSpacer  h="80px"/>
      <Outlet/>
    </div>
  )
}

export default Follow