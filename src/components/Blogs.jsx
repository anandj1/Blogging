import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blog.css"



const Blogs = () => {
  const{post,loading} = useContext(AppContext);

  return (
    <div className=' screen w-11/12 max-w-[800px] flex flex-col justify-center items-center min-h-screen mx-auto mb-3 gap-y-10  mt-28 
  ' >
    {
      loading?(<Spinner/>):
      (
        post.length === 0 ?
        (<div> 
          <h1>No page found</h1>
        </div>):

        (post.map((post)=>(
          <div key={post.id} >
            <p className=' font-bold text-md'>{post.title}</p>
            <p className='text-[13px] mt-2 '>
              By <span className='italic'>{post.author}</span> on <span className='underline font-semibold'>{post.category}</span>
            </p>
            <p className='text-[15px] '>
              Posted on <span className='underline'>{post.date}</span>
            </p>
            <p className='mt-4'>
              {post.content}
            </p>
            <div className='mt-4 text-[15px] cursor-pointer un text-blue-600 flex gap-x-3'>
              {post.tags.map((tag,index)=>(
               <span key={index}>{`#${tag}`}</span>

              )
              )}
            </div>
          </div>

        )))
      )
    }



    </div>
  )
}

export default Blogs