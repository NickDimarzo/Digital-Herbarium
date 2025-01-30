"use client";

import Link from "next/link";
import NavBar from "../../components/nav-bar";
import Redirect from "../../components/redirect";
import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import { useEffect } from "react";
import { fetchUserPlants } from "../../_services/DbServices";
import { addUserPlant } from "../../_services/DbServices";
import plantsData from "../../alberta-plants/new-herbarium.json";
import { uploadImages } from "../../_services/DbServices";
import { fetchPlantImages } from "../../_services/DbServices";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export default function Page({ params }) {
  const { user, createUser, emailSignIn } = useUserAuth();
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [plant, setPlant] = useState({});
  const [notes, setNotes] = useState("Add your notes here!");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dateOfCollection, setDateOfCollection] = useState("");
  const [location, setLocation] = useState("");
  const [habitat, setHabitat] = useState("");
  const [collector, setCollector] = useState("");
  const [userImages, setUserImages] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);
  const [primaryImage, setPrimaryImage] = useState("");
  const [highlightImages, setHighlightImages] = useState([]);

  // Upload images to firebase storage
  const uploadImage = () => {
    if (user) {
      uploadImages(imageUpload, user.uid, plant.elCode).then(() => {
        fetchPlantImages(user.uid, plant.elCode).then((images) => {
          setUserImages(images);
        });
      });
      plant.dateOfCollection = dateOfCollection;
      plant.location = location;
      plant.habitat = habitat;
      plant.collector = collector;
      plant.notes = textAreaValue;
      plant.primaryImage = primaryImage;
      plant.highlightImages = highlightImages;
      addUserPlant(plant, user.uid);
    } else {
      alert("You must be signed in to upload images");
    }
  };

  // Fetch images from firebase storage
  const fetchImages = () => {
    if (user) {
      fetchPlantImages(user.uid, plant.elCode).then((images) => {
        setUserImages(images);
      });
    }
  };

  const handleSelectPrimaryImage = (imageUrl) => {
    setPrimaryImage(imageUrl);
  };

  const handleSelectHighlightImage = (imageUrl) => {
    if (!imageUrl) return;

    // Ensure highlightImages exists and is an array
    const currentHighlights = Array.isArray(highlightImages)
      ? highlightImages
      : [];

    if (currentHighlights.includes(imageUrl)) {
      // If the image is already selected, remove it
      setHighlightImages(currentHighlights.filter((img) => img !== imageUrl));
    } else if (currentHighlights.length < 3) {
      // Add the image to the highlights if there are fewer than 3
      setHighlightImages([...currentHighlights, imageUrl]);
    } else {
      alert("You can only select up to 3 highlight images.");
    }

    console.log(highlightImages);
  };

  // Handle text area change
  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    plant.notes = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      plant.dateOfCollection = dateOfCollection;
      plant.location = location;
      plant.habitat = habitat;
      plant.collector = collector;
      plant.notes = textAreaValue;
      plant.primaryImage = primaryImage;
      plant.highlightImages = highlightImages;
      addUserPlant(plant, user.uid);
      console.log(plant);
    }
  };

  // Fetch user plants
  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
      return () => unsubscribe();
    }
  }, [user]);

  // Set plant data
  useEffect(() => {
    if (userPlants.length > 0) {
      const plant = userPlants.find((plant) => plant.elCode === params.plantId);
      if (plant) {
        setPlant(plant);
        setTextAreaValue(plant.notes);
        setDateOfCollection(plant.dateOfCollection);
        setLocation(plant.location);
        setHabitat(plant.habitat);
        setCollector(plant.collector);
        setPrimaryImage(plant.primaryImage);
        setHighlightImages(plant.highlightImages);
      } else {
        const plant = systemPlants.find(
          (plant) => plant.elCode === params.plantId
        );
        setPlant(plant);
      }
    } else {
      const plant = systemPlants.find(
        (plant) => plant.elCode === params.plantId
      );
      setPlant(plant);
    }
  }, [userPlants, systemPlants, params.plantId]);

  // Fetch images
  useEffect(() => {
    fetchImages();
  }, [user, plant, userPlants, userImages, fetchImages]);

  return (
    <>
      {user?.emailVerified ? (
        <main className="flex-col justify-center font-mono xl:text-2xl text-lg ">
          <header>
            <NavBar />
          </header>
          <div className="flex justify-center mt-10">
            <div className=" w-full sm:w-3/4 justify-center flex flex-col">
              <div className="flex flex-col lg:flex-row w-full">
                <div className="flex flex-col w-full h-full lg:w-1/2 ml-8">
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
                <div className="flex flex-col w-full h-full lg:w-1/2 mr-10">
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
              </div>
              <div className="flex lg:flex-row justify-between w-full">
                {/* Primary Image (left side) */}
                <div className="w-full lg:w-2/3 lg:pl-8 m-2">
                  {primaryImage ? (
                    <div className="relative w-full h-[800px]">
                      <img
                        src={primaryImage}
                        alt="Primary"
                        className="absolute w-full h-full object-contain rounded-lg shadow-lg p-2 bg-gray-500 bg-opacity-45 border-t-4 border-r-4 border-dark-blue"
                      />
                      {/* <button
                        onClick={() => handleSelectPrimaryImage("")}
                        className="absolute top-1 right-1 bg-dark-blue text-white text-sm rounded-full py-1 px-2"
                      >
                        X
                      </button> */}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[800px] bg-gray-100 rounded-lg">
                      <p className="text-gray-500">Select a primary image</p>
                    </div>
                  )}
                </div>
                {/* Highlight Images (Right Side) */}
                <div className="w-full h-full lg:w-1/3 mr-10">
                  <div className="flex flex-col justify-between h-[800px]">
                    {highlightImages ? (
                      highlightImages.map((image, index) => (
                        <div key={index} className="relative flex">
                          <img
                            src={image}
                            alt={`Highlight ${index + 1}`}
                            className="w-full h-56 object-cover rounded-lg shadow-lg p-1 m-2 bg-gray-500 bg-opacity-45 border-t-4 border-r-4 border-dark-blue"
                          />
                          <button
                            onClick={() => handleSelectHighlightImage(image)}
                            className="absolute top-1 right-1 bg-dark-blue text-white text-sm rounded-full py-1 px-2"
                          >
                            X
                          </button>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-lg">
                        <p className="text-gray-500">
                          Select up to 3 highlight images
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*PHOTO UPLOADS*/}
              <div class="custom-card">
                <div className=" bg-white rounded-xl m-2 p-2">
                  <div className="flex justify-center w-full p-2 m-2">
                    <h1 className="w-max xl:text-3xl text-xl"> My Photos</h1>
                  </div>
                  <div className="sm:grid sm:grid-flow-row sm:grid-cols-3 justify-center gap-4">
                    {userImages && userImages.length > 0 ? (
                      userImages.map((image) => (
                        <div
                          key={plant.id}
                          className="flex-col p-2 justify-center relative"
                        >
                          <Link href={image}>
                            <img
                              className="border-2 border-dark-blue rounded-xl shadow-2xl shadow-black object-cover w-full h-64"
                              src={image}
                              alt="plant"
                            />
                          </Link>
                          <Menu as="div" className="absolute top-4 right-4">
                            <MenuButton className="bg-white p-2 rounded-full hover:bg-gray-100 shadow-lg">
                              <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                            </MenuButton>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectPrimaryImage(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Set as Primary
                                    </button>
                                  )}
                                </MenuItem>
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectHighlightImage(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Add to Highlights
                                    </button>
                                  )}
                                </MenuItem>
                              </MenuItems>
                            </Transition>
                          </Menu>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-center w-full col-span-3 m-2 p-2">
                        <div className="flex flex-col items-center">
                          <p>
                            Click the Choose Files button below to get started
                          </p>
                          <p>Images will be displayed here</p>
                          <p>once they have been uploaded!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
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
                </div>
              </div>

              <div class="custom-card">
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
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main>
          <Redirect />
        </main>
      )}
    </>
  );
}
