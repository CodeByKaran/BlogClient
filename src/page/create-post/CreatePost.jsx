import React from 'react'
import HeroUser from "../../components/hero_user/HeroUser.jsx"
import CreatePostForm from "../../components/form_create_post/CreatePostForm.jsx"

export default function CreatePost() {
   
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] pb-[76px]">
     <HeroUser />
     <CreatePostForm />
    </div>
  )
}