import React, { useState, useEffect } from "react";
import { data } from "./Sdata";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  const [button, setbutton] = useState(false);
  const [t, sett] = useState(data);
  useEffect(() => {
    async function getdat() {
      const res = fetch("https://jsonplaceholder.typicode.com/todos");

      sett(res?.data);
    }
    getdat()
  }, []);
  return (
    <div className="main_div ">
      <div className="green_button flex lg:w-1/3  w-full items-end justify-start gap-4 h-14  ">
        <div
          className={
            !button
              ? "button bg-green-500 w-2 h-2 py-4 px-8 rounded-2xl relative mt-5"
              : "w-2 h-2 py-4 px-8 rounded-2xl relative mt-5 bg-gray-500"
          }
          onClick={() => setbutton(!button)}
        >
          <div
            className={
              !button
                ? "bg-white transition-all duration-300 w-2 h-6 py-2 px-3 left-9 absolute rounded-2xl top-1 "
                : "left-1 transition-all duration-300 bg-white w-2 h-6 py-2 px-3  absolute rounded-2xl top-1"
            }
          ></div>
        </div>
        <div className="button header">
          <h1 className={!button ? "hidden" : "block"}>
            Do you want to mark this as an Urgent Job ?
          </h1>

          <h1 className={!button ? "block" : "hidden"}>
            Mark this as Urgent (Please specify your next steps)
          </h1>
        </div>
      </div>
      <div className={!button ? "block" : "hidden"}>
        <div className="button_form flex justify-between items-center mt-6 gap-7 ">
          <div className="labal12  lg:w-1/2 w-full  flex justify-center items-start flex-col">
            <h4>Next Action-1</h4>
            <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
              <select className="w-full p-2  bg-white" value="">
                {t?.map((data) => (
                  <option value={data}>{data.username}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="labal2  lg:w-1/2 w-full  flex justify-center items-start flex-col">
            <h4>Next Action-1 Date*</h4>
            <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
              <select className="w-full p-2 bg-white" value="">
                {t?.map((data) => (
                  <option value={data}>{data.username}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="button_form flex justify-between items-center mt-6 gap-7 ">
          <div className="labal12  lg:w-1/2 w-full  flex justify-center items-start flex-col">
            <h4>Next Action-2</h4>
            <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
              <select className="w-full p-2 bg-white" value="select">
                {t?.map((data) => (
                  <option value={data}>{data.username}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="labal2  lg:w-1/2 w-full  flex justify-center items-start flex-col">
            <h4>Next Action-2 Date</h4>
            <div className="labal2arrow flex justify-between items-center border border-gray-300 w-full">
              <select className="w-full p-2 bg-white" value="">
                {t?.map((data) => (
                  <option value={data}>{data.username}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
