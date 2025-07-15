import React from "react";

export default function NoImageMessage() {
  return (
    <div className="flex justify-center w-full col-span-3 m-2 p-2">
      <div className="flex flex-col items-center">
        <p>Click the Choose Files button below to get started</p>
        <p>Images will be displayed here</p>
        <p>once they have been uploaded!</p>
      </div>
    </div>
  );
}
