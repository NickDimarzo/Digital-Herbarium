"use client";

import Link from "next/link";
import NavBar from "../components/nav-bar";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserAuth } from "../../src/_utils/auth-context";
import { useEffect } from "react";
import { fetchUserPlants } from "../../src/_services/DbServices";
import plantsData from "../../src/assets/new-herbarium.json";

export default function Page({ params }) {
  const { user, createUser, emailSignIn } = useUserAuth();
    const [userPlants, setUserPlants] = useState([]);
    const [systemPlants, setSystemPlants] = useState(plantsData);
    const [plant, setPlant] = useState({});

    // check if the params.id exits in the userPlants array where the plant.elCode === params.id
    // if it does, return the plant object
    // if it doesn't, return the plant from the systemPlants array where the plant.elCode === params.id

    

    useEffect(() => {
        if (user) {
            const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
    
            // Clean up subscription on unmount
            return () => unsubscribe();
        }
        }, [user]); // Add user as a dependency

    useEffect(() => {
        if (userPlants.length > 0) {
            const plant = userPlants.find(plant => plant.elCode === params.plantId);
            if (plant) {
                setPlant(plant);
            } else {
                const plant = systemPlants.find(plant => plant.elCode === params.plantId);
                setPlant(plant);
            }
        } else {
            const plant = systemPlants.find(plant => plant.elCode === params.plantId);
            setPlant(plant);
        }
    }, [userPlants]);

    

  return (
    <>
      {user ? (
        <main
          className="w-screen h-full flex-col justify-center"
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
                <h1>Plant Page</h1>
                <p>Plant ID: {plant.elCode}</p>
                <p>Plant Name: {plant.genus} {plant.species}</p>
                <p>Family: {plant.family}</p>
                </div>
              </div>
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
              <div className=" bg-sand rounded-xl m-2 p-2">
                <h1>Plant Page</h1>
                
                </div>
            </div> 
            <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
              <div className=" bg-sand rounded-xl m-2 p-2">
                <h1>Plant Page</h1>
                
                </div>
            </div>  
            <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
              <div className=" bg-sand rounded-xl m-2 p-2">
                <h1>Plant Page</h1>
                
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
