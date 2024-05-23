"use client";

import { useState, useEffect } from "react";
import { fetchUserPlants } from "../_services/DbServices";
import { useUserAuth } from "../_utils/auth-context";
import NavBar from "../components/nav-bar";
import Link from "next/link";
import plantsData from "../assets/new-herbarium.json";

export default function Page() {
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [familyFilter, setFamilyFilter] = useState("");
  const [genusFilter, setGenusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const { user, createUser, emailSignIn } = useUserAuth();

  // Fetch the user's plant collection from the database
  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
      return () => unsubscribe();
    }
  }, [user]); 

  // Handle the filter change
  const handleFilterChange = (event, filterType) => {
    switch (filterType) {
      case "family":
        setFamilyFilter(event.target.value);
        break;
      case "genus":
        setGenusFilter(event.target.value);
        break;
      case "species":
        setSpeciesFilter(event.target.value);
        break;
      default:
        break;
    }
  };

  // Filter and sort the plants
  const filteredAndSortedPlants = systemPlants
    .filter(
      (plant) =>
        (!familyFilter ||
          plant.family.toLowerCase().includes(familyFilter.toLowerCase())) &&
        (!genusFilter ||
          plant.genus.toLowerCase().includes(genusFilter.toLowerCase())) &&
        (!speciesFilter ||
          plant.species.toLowerCase().includes(speciesFilter.toLowerCase()))
    )
    .sort((a, b) => {
      if (a.family !== b.family) return a.family.localeCompare(b.family);
      if (a.genus !== b.genus) return a.genus.localeCompare(b.genus);
      return a.species.localeCompare(b.species);
    });

  // Update the status of the plant
  const statusUpdate = (id) => {
    const plant = userPlants.find((plant) => plant.elCode === id);
    if (plant) {
      return <span className="text-green ">collected</span>;
    } else {
      return <span className="text-brick ">not collected</span>;
    }
  };

  return (
    <>
      {user ? (
        <main
          className="font-mono flex flex-col h-screen border-b-8 border-dark shadow-xl shadow-dark"
          style={{
            backgroundPosition: "center",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1591113574684-35f608ff0772?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
          }}
        >
          <header>
            <NavBar />
          </header>
          <div className="flex justify-center mt-10">
            <div className=" w-3/4 justify-center flex flex-col">
              <div className="p-2 m-2 bg-dark-blue border-4 border-darker-blue rounded-xl shadow-2xl shadow-darker-blue">
                <div className=" bg-light-sand rounded-xl m-2 p-2">
                  <div className="flex justify-center">
                    <h1 className="w-max border-b-4 xl:text-5xl text-3xl border-dark pb-2">
                      My Collection
                    </h1>
                  </div>
                  <div className="p-4 xl:text-xl text-md">
                    <p>
                      Welcome to your collection! Here you can add and view all
                      the plants you have collected. Use the filter to search
                      for a specific plant. The filter will return results in alphabetical order beginning with Family, then Genus and Species. Click on a plant to access the
                      plants entry. From there you can add notes and images about that plant to
                      your collection.
                    </p>
                    <p>
                      These plants are all from Alberta and were generated from this website. <Link className=" underline hover:text-green hover:underline " href="https://www.albertaparks.ca/albertaparksca/management-land-use/alberta-conservation-information-management-system-acims/download-data/">Alberta Conservation Information Management System (ACIMS)</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 m-2 bg-dark-blue border-4 border-darker-blue rounded-xl shadow-2xl shadow-dark-blue xl:text-2xl text-lg">
                <div className=" bg-light-sand m-2">
                  <div className="xl:text-3xl text-xl p-2 m-2">
                    <h1>Filter</h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="p-2 m-2">
                      <label>
                        Family:
                        <input
                          type="text"
                          className="bg-light-sand border-b-2 border-dark w-full"
                          onChange={(event) =>
                            handleFilterChange(event, "family")
                          }
                        />
                      </label>
                    </div>
                    <div className="p-2 m-2 ">
                      <label>
                        Genus:
                        <input
                          type="text"
                          className="bg-light-sand border-b-2 border-dark w-full"
                          onChange={(event) =>
                            handleFilterChange(event, "genus")
                          }
                        />
                      </label>
                    </div>
                    <div className="p-2 m-2">
                      <label>
                        Species:
                        <input
                          type="text"
                          className="bg-light-sand border-b-2 border-dark w-full"
                          onChange={(event) =>
                            handleFilterChange(event, "species")
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 m-2 bg-dark-blue border-4 border-darker-blue rounded-xl shadow-2xl shadow-dark-blue text-xs m:text-sm xl:text-base">
                <ul className=" bg-light-sand m-2 p-2">
                  {filteredAndSortedPlants.map((plant) => (
                    <li key={plant.id} className="">
                      <Link
                        className="p-2 m-2 bg-light-sand flex border-b-2 border-dark hover:text-dark-green hover:border-dark-green "
                        href={`./${plant.elCode}`}
                      >
                        <div className="w-3/4 flex justify-start m:justify-between">
                          <span className="w-1/3">{plant.family}</span>|{" "}
                          <span className="w-1/3">{plant.genus} </span>|{" "}
                          <span className="w-1/3">{plant.species}</span>
                        </div>
                        <div>
                          |<span>{statusUpdate(plant.elCode)}</span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
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
          <div className="w-screen h-screen flex justify-center text-gray-50">
            <div className="w-2/5 bg-dark-blue flex-col h-max rounded-3xl justify-center border-8 border-darker-blue mt-64 ">
              <div className="flex-col justify-center m-8 text-4xl font-mono bg-dark-green p-5 rounded-3xl shadow-2xl">
                <div className="flex justify-center">
                  <p>You must be signed in to access this page</p>
                </div>
                <div className="flex justify-center">
                  <button className="bg-darker-blue text-gray-50 px-10  font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-darker-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
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
