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

export default function Page({ params }) {
  const { user, createUser, emailSignIn } = useUserAuth();
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [plant, setPlant] = useState({});
  const [notes, setNotes] = useState("Add your notes here!");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [userImages, setUserImages] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  // Upload images to firebase storage
  const uploadImage = () => {
    if (user) {
      uploadImages(imageUpload, user.uid, plant.elCode).then(() => {
        fetchPlantImages(user.uid, plant.elCode).then((images) => {
          setUserImages(images);
        });
      });
      plant.notes = textAreaValue;
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

  // Handle text area change
  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    plant.notes = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      addUserPlant(plant, user.uid);
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
              <div class="custom-card">
                <div className=" bg-white rounded-xl m-2 p-2">
                  <div className="flex justify-center">
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
              {/*PHOTO UPLOADS*/}
              <div class="custom-card">
                <div className=" bg-white rounded-xl m-2 p-2">
                  <div className="flex justify-center w-full p-2 m-2">
                    <h1 className="w-max xl:text-3xl text-xl"> My Photos</h1>
                  </div>
                  <div className=" sm:grid sm:grid-flow-row sm:grid-cols-3 justify-center">
                    {userImages && userImages.length > 0 ? (
                      userImages.map((image) => (
                        <div key={plant.id} className="flex p-2 justify-center">
                          <Link href={image}>
                            <img
                              className="border-2 border-dark-blue rounded-xl shadow-2xl shadow-black object-cover"
                              src={image}
                              alt="plant"
                            />
                          </Link>
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
                        className="bg-dark-green text-gray-50 px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-light-green shadow-2xl shadow-dark transition duration-500 hover:scale-110 "
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
