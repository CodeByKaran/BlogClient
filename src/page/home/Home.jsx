import React from 'react'
import Card from "../../components/card/Card.jsx"
import FetchBlog from "../../components/fetch_all_blog/FetchBlog.jsx"

export default function Home() {
  return (
    <div className="w-full sm:w-full md:w-[80%] lg:w-[60%] pb-[76px] ">
     <FetchBlog />
    </div>
  )
}