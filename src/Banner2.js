import React from 'react'
import img from "../src/empathy.png"

const Banner2 = () => {
  return (
    <div className='banner2 w-full md:w-4/12 lg:mr-8 object-contain pl-4 lg:pl-0 '>
<div className='banner_img  bg-white  flex items-center w-full px-4 py-2   '>
<img  src={img} alt = "" />




</div>
<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>Post a new Job</h1>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">post a job</span>
</div>
<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>Mobile notifications</h1>
<span>Never miss an important update</span>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">Verify</span>
</div>
<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>Add Users</h1>
<span>up to 10 Users</span>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">Add Users</span>
</div>
<div className='banner2 bg-red  bg-white mt-12 flex justify-center items-center flex-col gap-4 shadow-md rounded-md  w-full px-4 py-2 '>
<h1>226 New candidates has been proposed Assess now.</h1>
<span className="bg-green-600 text-white px-4 py-1 rounded-xl capitalize text-lg ">Rewiew</span>
</div>





    </div>
  )
}

export default Banner2