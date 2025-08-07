import React from "react";

export default function PlantDescription({ plant }) {
  return (
    <div className="flex flex-col w-full h-full lg:w-1/2 lg:ml-8">
      <div className=" bg-white h-full rounded-xl m-2 p-2 flex flex-col justify-between border-t-8 border-r-8 border-dark-blue">
        <div className="flex mb-2">
          <h1 className="w-max xl:text-3xl text-xl border-dark-blue">
            Plant Information
          </h1>
        </div>
        <div>
          <p>Family: {plant.family}</p>
        </div>
        <div>
          <p>
            Genus: <span className="italic">{plant.genus}</span>
          </p>
        </div>
        <div>
          <p>
            Species: <span className="italic">{plant.species}</span>
          </p>
        </div>
        <div>
          <p>Common Name: {plant.commonName}</p>
        </div>
        <div>
          <p>Origin: {plant.origin} </p>
        </div>
      </div>
    </div>
  );
}
