import React from 'react'
import Nav from './Nav'
import {
  faEdit
} from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useQuery } from 'react-query';


const d = async () =>{

const {data } = await axios.get("https://jsonplaceholder.typicode.com/users")
return data
}


const Table = () => {
const {data} =  useQuery("i"   , () => d() )
console.log(data)

  return (
    <div>
<Nav/>
<div  className='main_table  lg:p-10   p-2' >
<div className='main_table1 flex justify-between items-center'  >
<h4 className='text-4xl'  >Download Report</h4>

<div className='bg-green-500 text-white w-40  text-center rounded-xl  py-1'  >Add report format </div>
</div>

<div   className=' w-full bg-white shadow-xl     mt-10   p-5 ' >
<div className='w-full lg:ml-10  ml-0'  >

<div className='table_1 w-full  border border-gray-300  lg:w-11/12 flex justify-around items-center  p-2 '  >
<h4>sunil mehra</h4>
<h4>vishal@hiringplug.com</h4>

<FontAwesomeIcon   icon={faEdit } />


</div>
<div  className='sn mt-10'>
<div className='border border-gray-300  w-full lg:w-11/12'></div>
<div  className='sn1 flex justify-between items-center text-center lg:w-10/12 lg:ml-16  ml-0 w-full p-2'>
<h4>S.no</h4>
<span>rights</span>
<span>notification</span>
<span>Email</span>
<span>whatsapp</span>
<span>sm</span>
</div>
<div className='border border-gray-300 w-full lg:w-11/12'></div>

</div>

{

data?.map((vb)=>(

<div className='data mt-10  flex justify-between lg:w-10/12 lg:ml-16  ml-0 w-full '  >
<h4>{vb.id}</h4>
<h4 className='w-24' >{vb.name}</h4>
<input type="checkbox"/>
<input type="checkbox"/>
<input type="checkbox"/>
<input type="checkbox"/>


</div>

))

}
<div className='border border-gray-300 w-full lg:w-11/12'></div>
<div className='border border-gray-300 w-full lg:w-11/12  mt-10 '></div>


<div className='bg-green-500 rounded-xl  text-black w-24 mt-8 text-center' >save preview</div>
</div>



</div>


</div>

    </div>
  )
}

export default Table