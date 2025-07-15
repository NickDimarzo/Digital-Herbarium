import React from "react";

export default function PlantNotes({textAreaValue, handleTextAreaChange, handleSubmit}) {
  return (
    <div className=" bg-white rounded-xl m-2 p-2">
      <form className="text-black flex-col">
        <div className="flex justify-center">
          <h1 className="w-max xl:text-3xl text-xl">Notes</h1>
        </div>
        <div className="flex justify-center h-96 ">
          <textarea
            type="text"
            value={textAreaValue}
            onChange={handleTextAreaChange}
            className="text-black bg-gray-100 border-2 border-darker-blue rounded-xl p-2 w-full m-2 max-h-full"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-dark-green text-gray-50 px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-light-green shadow-2xl shadow-black transition duration-500 hover:scale-110 "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
