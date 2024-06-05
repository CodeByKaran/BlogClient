import React from 'react'
import HeroUserSetting from "../../components/hero_user_setting/HeroUserSetting.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"
import SettingOption from "../../components/setting_option/SettingOption.jsx"
import Profile from "../../assets/Profile.svg"
import Following from "../../assets/Following.svg"
import Saved from "../../assets/Saved.svg"
import Privacy from "../../assets/Privacy.svg"
import Blog from "../../assets/Blog.svg"
import Account from "../../assets/Account.svg"

export default function Settings() {
  return (
    <div className="text-white w-full sm:w-full md:w-[80%] lg:w-[60%] pb-[76px]">
     <HeroUserSetting />
     <VerticalSpacer  h="95px" />
     <SettingOption 
      imgsvg={Account}
      settingname="Account"
      />
     <VerticalSpacer h="15px" />
     <SettingOption 
       imgsvg={Blog}
       options = {["personal"]}
       settingname = "My Blogs"
      />
     <VerticalSpacer h="15px" />
     <SettingOption 
       imgsvg={Profile}
       options = {["username","profile photo","password"]}
       settingname = "Profile"
      />
    <VerticalSpacer h="15px" />
     <SettingOption 
       imgsvg={Following}
       options = {["following","followers"]}
       settingname = "Follows"
      />
    <VerticalSpacer h="15px" />
     <SettingOption 
       imgsvg={Saved}
       options = {["post","blog"]}
       settingname = "Saved"
      />
    <VerticalSpacer h="15px" />
     <SettingOption 
       imgsvg={Privacy}
       options = {["about","privacy"]}
       settingname = "Privacy & About"
      />
    </div>
  )
}