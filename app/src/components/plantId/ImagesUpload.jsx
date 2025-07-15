import React from "react";

export default function ImagesUpload({ setImageUpload, uploadImage}) {
  return (
    <div className="flex-col justify-between bg-white rounded-xl m-2 mt-4 p-2 ">
      <div className="flex justify-center p-4 text-sm m:text-lg lg:text-xl xl:text-2xl ">
        <input
          type="file"
          className=" bg-white w-max"
          multiple
          onChange={(e) => {
            setImageUpload(Array.from(e.target.files));
          }}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-dark-green text-gray-50 px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-light-green shadow-2xl shadow-black transition duration-500 hover:scale-110 "
          onClick={uploadImage}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
