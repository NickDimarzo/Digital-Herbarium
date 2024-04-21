"use client";

import Link from "next/link";
import NavBar from "../components/nav-bar";
import { useState } from "react";
import { useUserAuth } from "../../src/_utils/auth-context";
import { useEffect } from "react";
import { fetchUserPlants } from "../../src/_services/DbServices";
import { addUserPlant } from "../../src/_services/DbServices";
import plantsData from "../../src/assets/new-herbarium.json";
import { uploadImages } from "../../src/_services/DbServices";
import { fetchPlantImages } from "../../src/_services/DbServices";
import Image from 'next/image';

export default function Page({ params }) {
  const { user, createUser, emailSignIn } = useUserAuth();
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [plant, setPlant] = useState({});
  const [notes, setNotes] = useState("Add your notes here!");
  const [textAreaValue, setTextAreaValue] = useState("");

  const [userImages, setUserImages] = useState([]);

  const [imageUpload, setImageUpload] = useState([]);
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

  const fetchImages = () => {
    if (user) {
      fetchPlantImages(user.uid, plant.elCode).then((images) => {
        setUserImages(images);
      });
    }
  };

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

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
      return () => unsubscribe();
    }
  }, [user]);

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

  useEffect(() => {
    fetchImages();
  }, [user, plant, userPlants, userImages, fetchImages]);

  return (
    <>
      {user ? (
        <main
          className="h-full flex-col justify-center font-mono xl:text-2xl text-lg"
          style={{
            backgroundPosition: "center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
          }}
        >
          <header>
            <NavBar />
          </header>
          <div className="flex justify-center mt-10">
            <div className=" w-3/4 justify-center flex flex-col">
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
                <div className=" bg-sand rounded-xl m-2 p-2">
                  <div className="flex justify-center">
                    <h1 className="w-max border-b-4 xl:text-3xl text-xl border-dark">
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
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
                <div className=" bg-sand rounded-xl m-2 p-2">
                  <div className="flex justify-center w-full p-2 m-2">
                    <h1 className="w-max border-b-4 xl:text-3xl text-xl border-dark">
                      {" "}
                      My Photos
                    </h1>
                  </div>
                  <div className="grid grid-flow-row grid-cols-3 justify-center">
                    {userImages && userImages.length > 0 ? (
                      userImages.map((image) => (
                        <div key={plant.id} className="flex p-2 justify-center">
                          <Link href={image}>
                            <img
                              className="border-4 border-dark rounded-xl shadow-2xl shadow-dark"
                              src={image}
                              alt="plant"
                            />
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-center w-full col-span-3 m-2 p-2">
                      <div className="flex flex-col items-center">
                        <p>Click the Choose Files button below to get started</p>
                        <p>Images will be displayed here</p>
                        <p>once they have been uploaded!</p>
                      </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex-col justify-between bg-sand rounded-xl m-2 mt-4 p-2 ">
                    <div className="flex justify-center p-4 ">
                      <input
                        type="file"
                        className=" bg-sand w-max"
                        multiple
                        onChange={(e) => {
                          setImageUpload(Array.from(e.target.files));
                        }}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-velvet text-brick px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:scale-110 "
                        onClick={uploadImage}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
                <div className=" bg-sand rounded-xl m-2 p-2">
                  <form className="text-black flex-col">
                    <div className="flex justify-center">
                      <h1 className="w-max border-b-4 xl:text-3xl text-xl border-dark">
                        Notes
                      </h1>
                    </div>
                    <div className="flex justify-center h-96 ">
                      <textarea
                        type="text"
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                        className="text-black bg-sand border-4 border-dark rounded-xl shadow-2xl shadow-dark p-2 w-full m-2 max-h-full"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-velvet text-brick px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:scale-110 "
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
        <main
          className="w-screen h-full flex-col justify-center"
          style={{
            backgroundPosition: "center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
          }}
        >
          <div className="w-screen h-screen flex justify-center">
            <div className="w-2/5 bg-moss flex-col h-max rounded-3xl justify-center border-8 border-dark mt-64 ">
              <div className="flex-col justify-center m-8 text-4xl font-mono bg-sand p-5 rounded-3xl shadow-2xl">
                <div className="flex justify-center">
                  <p>You must be signed in to access this page</p>
                </div>
                <div className="flex justify-center">
                  <button className="bg-velvet text-brick px-10  font-mono m-8 py-4 rounded-full hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110">
                    <Link href="/src">Sign In</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
