import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom'
import Nav from "../Nav";

const Edit = () => {
  const [ed, seted] = useState({
    role: "",
    Brief: "",
  });
  const navigate = useNavigate()

  const su = (e) => {
    const { name, value } = e.target;

    seted({ ...ed, [name]: value });
  };

      const headers = {

          'Content-Type': 'application/json',
          'Authorization': 'Bearer '
      }

      axios.post("https://jsonplaceholder.typicode.com/posts"  , ed , {
          headers: headers

  })

  
  return (
    <div className="Edit">
      <Nav />
      <div className="am flex flex-col justify-center  p-10 gap-16">
        <div className="logo ">
          <h4>Edit User Role</h4>
        </div>
        <div className="edit_form  bg-white shadow-lg lg:w-2/3 p-5">
          <div className="edit_role  flex justify-around ">
            <div className="edit_role1 space-y-3">
              <h4>Role</h4>
              <input
                type="text"
                className="border border-gray-300 w- px-16"
                value={ed.role}
                name="role"
                onChange={su}
              />
            </div>
            <div className="edit_role1  space-y-3">
              <h4>Brief Description</h4>
              <input
                type="text"
                className="border border-gray- w-full px-16"
                value={ed.BriefDescription}
                name="Brief"
                onChange={su}
              />
            </div>
          </div>
          <div className=" flex items-baseline mt-5 space-x-10 ">
            <input type="radio" />
            <h4>Active </h4>
          </div>
          <div className="butt space-x-2 flex justify-center items-center">
            <button onClick={() => navigate(-1)} className="bg-white text-green-400 border border-green-500 px-3 rounded-lg">
              cancel
            </button>
            <button
              className="bg-green-500 text-white  px-3 rounded-lg "
              type="submit"
              onClick={v}
            >
              save{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
