import React from 'react'

export default function PlantInfo({ plant }) {
  return (
    <div className="bg-white rounded-xl m-2 p-2 border-t-8 border-r-8 border-dark-blue">
        <h1 className="xl:text-3xl text-xl mb-2">Plant Information</h1>
        <p>Family: {plant?.family}</p>
        <p>Genus: <span className="italic">{plant?.genus}</span></p>
        <p>Species: <span className="italic">{plant?.species}</span></p>
        <p>Common Name: {plant?.commonName}</p>
        <p>Origin: {plant?.origin}</p>
    </div>
    )
}

