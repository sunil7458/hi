import React, {  useState } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useMutation } from "react-query";

import {
  // faArrowDown,
  faA,
  faB,
  faI,
  // faU,
  faTag,
  faBars,
  // faArrowDownAZ,
  faT,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { data } from "./Sdata";
const Post = () => {
  const [t,] = useState(data);
  const [form, setform] = useState({
    name: "",
    lname: "",
    ename: "",
    sname: "",
  });

  // useEffect(()=>{

  // async function getdat(){
  // const res  = await axios.get("https://jsonplaceholder.typicode.com/todos")

  // sett(res?.data)
  // console.log(res
  //   )
  // }

  // getdat()

  // } , [])

  const fun = (form) => {
    console.log(form)
    return axios.post("https://jsonplaceholder.typicode.com/posts", form);
  };

  const { mutateAsync } = useMutation(
    fun,
    {onSuccess: (data) => {console.log(data , "data")},
    onError: (error) => {console.log(error , "error")},
  });


  const onsubmit = (e) => {
    e.preventDefault();
    console.log('khfj')
    mutateAsync({...form })
  };

  const sun = (e) => {
    const { name, value } = e.target;

    setform({ ...form, [name]: value });
  };

  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer '
  // }

  // axios.post("https://jsonplaceholder.typicode.com/posts" , form , {headers} )
  // console.log(form)
  // const mutation = useMutation(newTodo => {
  //   return axios.post('/todos', newTodo)
  // })

 console.log(form)
  return (
    <>
      <Nav />
      <div className="post_main w-full  flex items-center flex-col   ">
        <div className="post_logo flex justify-between items-center w-11/12   mt-16 ">
          <h1 onClick={onsubmit} className=" lg:text-3xl  text-sm ">
            Post a Job (Step 1 of 2) | Provide your Job specifications
          </h1>
          <span className="  bg-green-600  text-white px-3 py-2 w-1/2  md:w-1/6 rounded-2xl text-center">
            Upload a file
          </span>
        </div>

        <form
          className="post w-11/12   bg-white mt-4 shadow-lg rounded-md p-4 lg:p-10 mb-14"
          onSubmit={onsubmit}
        >
          <div className="input1 flex  justify-between items-center w-full gap-4 lg:gap-9 flex-col md:flex-row  ">
            <div className="labal lg:w-2/3  w-full flex justify-center flex-col items-start  ">
              <h4>Job title</h4>
              <select
                className="w-full p-2 bg-white border border-gray-300"
                name="name"
                value={form.name}
                onChange={sun}
              >
                {t?.map((data) => (
                  <option key={data.id}>{data.username}</option>
                ))}
              </select>
            </div>
            <div className="labal2  lg:w-1/3 w-full  flex justify-center items-start flex-col">
              <h4>Department *</h4>
              <div className="labal2arrow flex justify-between  items-center border border-gray-300 w-full">
                <select
                  className="w-full p-2 bg-white"
                  onChange={sun}
                  name="sname"
                  value={form.sname}
                >
                  {t?.map((data) => (
                    <option key={data.id}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="input2 justify-between items-center flex w-full gap-4 flex-col lg:flex-row  mt-10 ">
            <div className="labal2  lg:w-1/3 w-full  flex justify-center items-start flex-col">
              <h4>Country *</h4>
              <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
                <select
                  className="w-full p-2 bg-white "
                  onChange={sun}
                  name="lname"
                  value={form.lname}
                >
                  {t?.map((data) => (
                    <option key={data.id}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="labal2  lg:w-1/3 w-full  flex justify-center items-start flex-col">
              <h4>Location *</h4>
              <div className="labal2arrow border border-gray-300 flex justify-between items-center w-full">
                <select
                  className="w-full p-2 bg-white "
                  value={form.ename}
                  onChange={sun}
                  name="ename"
                >
                  {t?.map((data) => (
                    <option key={data.id}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="labal lg:w-1/4  w-full flex justify-center flex-col items-start  ">
              <h4>Job title</h4>
              <div className="input_buttob flex justify-between border border-gray-300 items-center w-full lg:w-11/12 ">
                <select className="w-full p-2 bg-white " onChange={sun}>
                  {t?.map((data) => (
                    <option key={data.id}>{data.username}</option>
                  ))}
                </select>
                <button className="bg-green-500 rounded-xl px-3 py-1">+</button>
              </div>
            </div>
          </div>

          <div className="input_3  flex mt-6 p-3  justify-between border border-gray-300 ">
            <div className="input_componet flex justify-between w-full lg:w-1/5">
              <FontAwesomeIcon icon={faBars} />
              <FontAwesomeIcon icon={faA} />
              <FontAwesomeIcon icon={faI} />
              <FontAwesomeIcon icon={faB} />
              <FontAwesomeIcon icon={faTag} />
              <div>normal</div>
              <FontAwesomeIcon icon={faT} />
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/* <div className="bo"></div> */}
          </div>

          <textarea
            className="bo h-28 p-3  w-full  outline-none border border-gray-300 "
            placeholder="Type a description  "
          ></textarea>
          <div className="input_head flex items-center mt-5 gap-3">
            <div className="bg-green-500 py-1 px-3 rounded-3xl text-2xl text-white  ">
              +
            </div>
            <h4>
              Do you wish to add any{" "}
              <span className="text-green-500">Additional Information ?</span>
            </h4>
          </div>

          <div className="input4 flex justify-between items-baseline flex-col md:flex-row w-full gap-4 ">
            <div className="labal5  lg:w-1/5 w-full  flex justify-center items-start flex-col ">
              <h4>Experience level *</h4>
              <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
                <select className="w-full p-2 bg-white" value="">
                  {t?.map((data) => (
                    <option value={data}>{data.username}</option>
                  ))}
                </select>
              </div>
              <div>from(years)</div>
            </div>
            <div className="labal5  lg:w-1/3 w-full  flex justify-center items-start flex-col">
              <h4>*</h4>
              <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
                <select className="w-full p-2 bg-white" value="">
                  {t?.map((data) => (
                    <option value={data}>{data.username}</option>
                  ))}
                </select>
                {/* <FontAwesomeIcon icon={faArrowDown} /> */}
              </div>
              <div>To (years)</div>
            </div>
            <div className="labal8  lg:w-2/3  w-full  flex justify-center items-start flex-col">
              <h4> qaulification *</h4>
              <div className="labal2arrow flex justify-between items-center  border border-gray-300 w-full">
                <select className="w-full p-2 bg-white" value="">
                  {t?.map((data) => (
                    <option value={data}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="input10 flex justify-between items-center mt-6 gap-7 ">
            <div className="labal12  lg:w-1/2 w-full  flex justify-center items-start flex-col">
              <h4>Manditiary skills(minimum 3 skills)*</h4>
              <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
                <select className="w-full p-2 bg-white" value="">
                  {t?.map((data) => (
                    <option value={data}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="labal2  lg:w-1/2 w-full  flex justify-center items-start flex-col">
              <h4>Additional skills(Good to have) *</h4>
              <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full ">
                <select className="w-full p-2  bg-white" value="">
                  {t?.map((data) => (
                    <option value={data}>{data.username}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="input_head flex items-center mt-5 gap-3">
            <div className="bg-green-500 py-1 px-3 rounded-3xl text-2xl text-white ">
              +
            </div>
            <h4>
              {" "}
              Any <span className="text-green-500">screening question ?</span>
            </h4>
          </div>
          <div className="input_head flex items-center mt-5 gap-3">
            <div className="bg-green-500 py-1 px-3 rounded-3xl text-2xl text-white ">
              +
            </div>
            <h4>
              Do you also have a{" "}
              <span className="text-green-500"> diversity focus ?</span>
            </h4>
          </div>
          <Button />

          <div className="form_last flex justify-center my-10 gap-6  items-center">
            <h4 className="border border-gray-500 p-2 rounded-3xl w-24 text-center  ">
              go back
            </h4>
            <button
              className="border border-green-500 p-2 rounded-3xl  w-52 bg-green-500  text-white text-center "
              type="submit"
            >
              save and continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Post;
