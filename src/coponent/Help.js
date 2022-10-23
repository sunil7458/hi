import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Nav from "../Nav";



const fet = async () =>{
  
  try{
  const {data}= await axios.get('https://jsonplaceholder.typicode.com/users')
  return data
  
  
  }catch{
  throw new console.error("sunil");
  }
  
  
  
  }

  




const Help = () => {
  
  
const {data , isLoading} = useQuery("su" ,() =>fet() )
console.log(data)

const[ u , setu] = useState({
Name: "",
lname: "",
kname :"",
mname:""

})

const fu  = (e) => {
const {name , value} = e.target
setu({...u, [name]: value})



}
const onsubmit = (e) =>{
e.preventDefault()
}

// const header = {
//      'Content-Type': 'application/json',
//     'Authorization': 'Bearer '
// }

// axios.post("https://jsonplaceholder.typicode.com/users"  , u , {header}) 





  return (
    <div>
      <Nav />
      <div className="help_main p-5 lg:p-16">
        <div className="help_Logo">
          <h1>Help</h1>
        </div>
        <form className="banner_help w-full mt-7 flex justify-between gap-4 md:flex-row flex-col "  onSubmit={onsubmit}>
          <div className="bannerleft w-full ">
            <div className="lg:w-2/3 w-full flex justify-between flex-col lg:flex-row gap-5 lg:space-x-4">
              <div className="in border border-gray-300  w-full lg:w-11/12 text-black  bg-white ">
                <input type="text" className=" p-1 w-full outline-none" name="Name"  value={u.Name}  onChange = {fu} placeholder= "Search for everythings..." />
              </div>

              <div className=" border border-gray-300  lg:w-1/3 w-full    ">
                <select className="w-full p-2  bg-white" name="lname"  value={u.lname}  onChange = {fu}  >
                 {data?.map((h)=>{
                    return <option key={h.id} className = "text-black" >{h.name}</option>
                 })


                 }
                </select>
              </div>
            </div>

            <div className="banner_2  flex mt-7 space-x-4 ">
              <div className="bg-white lg:w-1/4 p-1 border border-gray-300  w-full  "  >
                <select className="w-full bg-white p-1" name="kname"  value={u.kname}  onChange = {fu}  >
                {
                   data?.map((h)=>{
                     return  <option key={h.id}>{h.company.name}</option>
                   })
                 }
                </select>
              </div>
              <div className="bg-white lg:w-1/4 p-1 border border-gray-300 w-full">
                <select    className="w-full bg-white p-1"  name="mname"  value={u.mname}  onChange = {fu}>
                 {
                   data?.map((h)=>{
                     return  <option key={h.id}>{h.username}</option>
                   })
                 }
                </select>
              </div>
            </div>


<div className="banner_3   w-full mt-8  ">
{

     isLoading ? "wrong " : data?.map((h)=>{

  return <div className="banner_3_w   bg-white shadow-lg p-3 mt-5 flex justify-between items-center" >
  <div className="name">
  <h4>{h.company.name}</h4>
  <h4 className="text-gray-300">posted a month ago</h4>
  </div>
  
  
  <div>Reaquest  acall back</div>
  
  <div className="text-green-500">veiw details</div>
      
  </div>
})


}



</div>


          </div>

<div className="banner_right lg:w-2/6">
<div className=" bg-white w-full flex flex-col p-10 justify-center items-center shadow-lg rounded-md ">
<h3 className="w-40">Raise a help Ticket</h3>
<div className="bg-green-500  rounded-xl mt-4 w-24">+Ticket</div>

</div>


</div>


        </form>
      </div>
    </div>
  );
};

export default Help;
