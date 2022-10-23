import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'

const fetchpost  =  async (userid) =>{
try{
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${userid}`)
    return data;
    // console.log(data)
}catch{

    throw Error("new error")
}

}


const Form2 = () => {
const {userid} =  useParams()
const navigate = useNavigate()

const { data,isLoading , } =  useQuery(["posts" , userid]  , ()  =>fetchpost(userid))

console.log(data)
  return (
    <div>
{
isLoading ? ("loading") :
<div className="form mt-8">
<div className="main_form  flex justify-between p-5 bg-white shadow-lg">
<div className="flex flex-col">
<h1   >userId:{data.userId}</h1>  
<span>{data.title}</span>
<h1>{data.body}</h1>
</div>
<div>postid:{data.id}</div>

</div>


</div> 

}

<div onClick={()=>navigate(-1)} >back</div>

    </div>
  )
}

export default Form2