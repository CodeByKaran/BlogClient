import React from 'react'
import HeroUser from "../../components/hero_user/HeroUser.jsx"
import CreatePostForm from "../../components/form_create_post/CreatePostForm.jsx"
import VerticalSpacer from "../../components/spacer/VerticalSpacer.jsx"

export default function CreatePost() {
   
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] pb-[76px] flex flex-col items-center">
     <HeroUser />
     <VerticalSpacer  h="90px" />
     <CreatePostForm />
    </div>
  )
}