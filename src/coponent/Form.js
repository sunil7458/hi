import React from "react";
import { useQuery } from "react-query";
import Nav from "../Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";

const fetchpost = async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return data;
  } catch {
    throw Error("error");
  }
};

const Form = () => {
  const { data, } = useQuery("posts", () => fetchpost());
//   console.log(data);
  const navigate =useNavigate()

  return (
    <div className="">
      <Nav />
      {   data ? data?.map((po)=>(
<div className="form mt-8"  key={po.id}>
        <div className="main_form  flex justify-between p-5 bg-white shadow-lg">
        <div className="flex flex-col">
        <h1  onClick={()=>navigate(`/${po.id}`)} >userId:{po.userId}</h1>  
        <span>{po.title}</span>
        <h1>{po.body}</h1>
        </div>
<div>postid:{po.id}</div>

        </div>
      </div> 


)  )


     :  "null" }
    </div>
  );
};

export default Form;
