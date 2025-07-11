import React from "react";

export default function PrimaryImage({
  primaryImage,
  primaryImageTitle,
  setPrimaryImageTitle,
  primaryImageDescription,
  setPrimaryImageDescription,
  dateOfCollection,
}) {
  return (
    <div className="w-full lg:w-2/3 lg:pl-8 m-2">
      {primaryImage ? (
        <div className="flex flex-col">
          <div className="relative w-full h-[400px] lg:h-[835px] mr-10">
            <img
              src={primaryImage}
              alt="Primary"
              className="absolute w-full h-full object-contain rounded-lg shadow-lg p-2 bg-gray-500 bg-opacity-45 border-t-4 border-r-4 border-dark-blue"
            />
          </div>
          <div className="text-sm">
            <input
              type="text"
              value={primaryImageTitle}
              placeholder="Primary Image Title"
              onChange={(e) => setPrimaryImageTitle(e.target.value)}
              className="w-max font-semibold bg-transparent py-1 outline-none"
            />
          </div>
          <div className="text-xs">
            <input
              type="text"
              value={primaryImageDescription}
              placeholder="Primary Image Description"
              onChange={(e) => setPrimaryImageDescription(e.target.value)}
              className="w-full py-1 outline-none"
            />
          </div>
          <div className="text-xs">
            <p>Date of Collection:{dateOfCollection}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[800px] bg-gray-100 rounded-lg">
          <p className="text-gray-500">Select a primary image</p>
        </div>
      )}
    </div>
  );
}
