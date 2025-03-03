// This component is used to display the highlight images for each plant.

import { useState } from "react";
import { useEffect } from "react";

export default function HighlightImage({
  image,
  title,
  date,
  description,
  setTitle,
  setDescription,
}) {
  const handleSelectHighlightImage = (image) => {
    console.log("Selected Image: ", image);
  };

  return (
    <>
      {image ? (
        <div className="relative flex flex-col">
          <img
            src={image}
            className="w-full h-56 object-cover rounded-lg shadow-lg p-1 lg:ml-2 bg-gray-500 bg-opacity-45 border-t-4 border-r-4 border-dark-blue"
          />
          {/* <button
            onClick={() => handleSelectHighlightImage(image)}
            className="absolute top-1 right-1 bg-dark-blue text-white text-sm rounded-full py-1 px-2"
          >
            X
          </button> */}
          <div className="flex-flex-col lg:ml-4">
            <div className="text-sm">
              <input
                type="text"
                value={title}
                placeholder="Add a Title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-max font-semibold bg-transparent py-1 outline-none"
              />
            </div>
            <div className="text-xs">
              <input
                type="text"
                value={description}
                placeholder="Add a Description"
                onChange={(e) => setDescription(e.target.value)}
                className="w-full py-1 outline-none"
              />
            </div>
            <div className="text-xs">
              <p>Date of Collection:{date}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg text-sm">
          <p className="text-gray-500">Select a image</p>
        </div>
      )}
    </>
  );
}
