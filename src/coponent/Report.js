import React, { useState } from "react";
import Nav from "../Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "react-query";
import axios from "axios";

const f = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return data;
  } catch {
    throw new Error("sui");
  }
};

const Report = () => {
  const { data,  } = useQuery("h", () => f());
  console.log(data);
  const [vb, setvb] = useState({
    kname: "",
    jname: "",
    hname: "",
    vname: "",
    cname: "",
  });

  const g = (e) => {
    const { name, value } = e.target;

    setvb({ ...vb, [name]: value });
  };

  return (
    <div className="">
      <Nav />
      <div className="main_Report  ">
        <div className="w-full flex justify-between  flex-col lg:flex-row" >
        <div className="w-lg:2/3 w-full mt-9 p-10   ">
          <div className="bg-white shadow-lg   flex justify-evenly p-4 w-full ">
            <div className="logo">
              <FontAwesomeIcon icon={faUser} className="text-9xl  " />
            </div>

            <div className="re capitalize">
              <h4>role</h4>
              <h4 className="mb-7">operator</h4>
              <h4>activate</h4>
              <h4>30/4/2002</h4>
            </div>
            <div className="re capitalizez">
              <h4>email</h4>
              <h4 className="mb-5"> last login</h4>
              <h4>activate</h4>
            </div>
          </div>

          {/*  */}

          <div className="report2   bg-white shadow-xl w-full mt-6 p-9 space-y-4 flex-col lg:flex-row ">
            <div className="reportd flex justify-between ">
              <h4 className="text-lg text-bold ">Advanced Filter</h4>
              <FontAwesomeIcon icon={faUmbrella} />
            </div>
            <div className="reprtf  flex justify-between flex-col 2xl:flex-row 2xl:space-x-4 w-full">
              <div className="reportf1  space-y-2">
                <h4>User</h4>
                <div className=" bg-white w-full">
                  <select
                    className=" xl:w-72 w-full  bg-white border border-gray-300 py-2   "
                    name="kname"
                    value={vb.kname}
                    onChange={g}
                  >
                    {data?.map((h) => {
                      return <option key={h.id}>{h.username}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="reportf1  space-y-2">
                <h4>Job title</h4>
                <div className=" bg-white w-full">
                  <select
                    className="xl:w-72 w-full  bg-white border border-gray-300 py-2 "
                    name="jname"
                    value={vb.jname}
                    onChange={g}
                  >
                    {data?.map((h) => {
                      return <option key={h.id}>{h.name}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="reportf1  space-y-2">
                <h4>Job status</h4>
                <div className=" bg-white w-full">
                  <select
                    className="xl:w-72 w-full  bg-white border border-gray-300 py-2 "
                    name="hname"
                    value={vb.hname}
                    onChange={g}
                  >
                    {data?.map((h) => {
                      return <option key={h.id}>{h.email}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>

            <div className="report3 flex justify-between w-full lg:space-x-4 flex-col lg:flex-row ">
              <div className="reportin  lg:space-y-2 lg:w-1/2  w-full">
                <h4>Start data</h4>
                <input
                  type="text"
                  className=" w-full border border-gray-300  py-2 "
                  name="vname"
                  value={vb.vname}
                  onChange={g}
                />
              </div>
              <div className="reportin  lg:space-y-2 lg:w-1/2 w-full">
                <h4>Start data</h4>
                <input
                  type="text"
                  className="w-full  border border-gray-300  py-2 "
                  name="cname"
                  value={vb.cname}
                  onChange={g}
                />
              </div>
            </div>

            <div className="button  bg-green-600 text-black py-2 px-5 w-24 text-center justify-center flex items-center rounded-2xl ">
              Go
            </div>
          </div>



{/*  */}
<div className="report_4 bg-white  w-full mt-6 p-6  "  >
<div className="lg:w-2/3 w-full flex justify-between">
<h4>AX Financial Consultant</h4>
<h4>active</h4>

</div>

<div className="flex justify-between mt-10">

<h4  className="text-gray-400">Posted on: 12-May-2022, At</h4>

<div  className="gh  flex justify-between space-x-4 text-xl">
<div className="hj   " >
  <h3>0</h3>
  <span>proposed</span>
</div>
<div className="hj   " >
  <h3>0</h3>
  <span>proposed</span>
</div>
<div className="hj   " >
  <h3>0</h3>
  <span>proposed</span>
</div>
<div className="hj   " >
  <h3>0</h3>
  <span>proposed</span>
</div>

</div>


</div>


</div>


        </div>
        <div className="banner_right lg:w-2/6 mt-10 p-9">
<div className=" bg-white w-full flex flex-col p-10 justify-center items-center shadow-lg rounded-md ">
<h3 className="w-40">Raise a help Ticket</h3>
<div className="bg-green-500  rounded-xl mt-4 w-24 text-center ">+Ticket</div>

</div>


</div>
</div>
      </div>
    </div>
  );
};

export default Report;
