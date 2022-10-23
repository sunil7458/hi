import React from "react";

function PopUp({ setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {open && (
        <React.Fragment>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-primary bg-pop-up">
            <div className="relative  my-6 mx-auto lg:w-6/12 w-80 -top-28">
              <div className="border-0 rounded-lg shadow-lg relative flex gap-5 p-4 flex-col w-full bg-white outline-none focus:outline-none ">
                <h5 className="text-[16px] font-primary w-full text-center">
                  Add a note
                </h5>
                <textarea
                  name=""
                  placeholder="Add a note"
                  id=""
                  rows="3"
                  className="border font-primary p-4 border-border-col rounded-md w-full"
                ></textarea>
                <div className="flex w-full items-center gap-3 justify-end">
                  <button
                    onClick={handleClose}
                    className="text-sm inline-block px-5 py-1 rounded-full font-primary text-green bg-white border border-green"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleClose}
                    className="text-sm inline-block px-5 py-1 rounded-full font-primary text-white bg-green border border-green"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      )}
    </>
  );
}

export default PopUp;
