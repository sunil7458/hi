import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Nav from "./Nav";

const Faq = () => {
  const { data } = useQuery("s", () =>
    axios.get("https://jsonplaceholder.typicode.com/users")
  );

  console.log(data);

  const [con, setcon] = useState(null);
  const han = (id) => {
    if (id === con) {
      setcon(null);
    } else {
      setcon(id);
    }
  };
  return (
    <div>
      <Nav />

      <div className="main_faq  mt-7 p-16 ">
        <div className="logo text-2xl"> FAQ</div>
        <div className="w-full mt-9 flex justify-between gap-6 flex-col lg:flex-row">
          <div className="faq_left lg:w-2/3 w-full">
            <div className="">
              {data?.data?.map((gh) => (
                <div
                  className=" bg-white shadow-lg  mt-10 flex flex-col  justify-between p-6  h-24"
                  key={gh.id}
                >
                  <div className="flex  justify-between">
                    <h4 className="">{gh.company.catchPhrase}</h4>
                    <span
                      className="view_details text-green-500 cursor-pointer "
                      onClick={() => han(gh.id)}
                    >
                      {" "}
                      view_details
                    </span>
                  </div>

                  <h4 className={con === gh.id ? "block  transition-all translate-x-3" : "hidden"}>
                    sunil mehra is number one contandor
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="faq_left lg:w-2/6 ">
            <div className="banner_right ">
              <div className=" bg-white w-full flex flex-col p-10 justify-center items-center shadow-lg rounded-md ">
                <h3 className="w-40">Raise a help Ticket</h3>
                <div className="bg-green-500  rounded-xl mt-4 w-24">
                  +Ticket
                </div>
              </div>
            </div>
            <div className="banner_right mt-8 ">
              <div className=" bg-white w-full flex flex-col p-10 justify-center items-center shadow-lg rounded-md ">
                <h3 className="w-40">Raise a help Ticket</h3>
                <div className="bg-green-500  rounded-xl mt-4 w-24">
                  +Ticket
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
