import React from "react";

export default function CollectionInfo({
  dateOfCollection,
  setDateOfCollection,
  location,
  setLocation,
  habitat,
  setHabitat,
  collector,
  setCollector,
}) {
  return (
    <div className="flex flex-col w-full h-full lg:w-1/2 lg:mr-10">
      <div className=" bg-white rounded-xl m-2 p-2 border-t-8 border-r-8 border-dark-blue">
        <div className="flex mb-2">
          <h1 className="w-max xl:text-3xl text-xl border-dark-blue">
            Collection Information
          </h1>
        </div>
        <div className="flex w-full my-2">
          <label className="w-1/2">Date of Collection:</label>
          <input
            type="date"
            value={dateOfCollection}
            onChange={(e) => setDateOfCollection(e.target.value)}
            className="ml-2 border-b-2 border-dark-blue w-full"
          />
        </div>
        <div className="flex w-full my-2 py-2">
          <label className="w-1/2">Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border-b-2 border-dark-blue w-full"
          />
        </div>
        <div className="flex w-full my-2">
          <label className="w-1/2" l>
            Habitat:
          </label>
          <input
            type="text"
            value={habitat}
            onChange={(e) => setHabitat(e.target.value)}
            className="border-b-2 border-dark-blue w-full"
          />
        </div>
        <div className="flex w-full my-2">
          <label className="w-1/2">Collector:</label>
          <input
            type="text"
            value={collector}
            onChange={(e) => setCollector(e.target.value)}
            className="border-b-2 border-dark-blue w-full"
          />
        </div>
      </div>
    </div>
  );
}
