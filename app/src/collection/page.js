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

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);

      // Clean up subscription on unmount
      return () => unsubscribe();
    }
  }, [user]); // Add user as a dependency

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

  // map through userPlants to see if plant with same id exists
  const statusUpdate = (id) => {
    const plant = userPlants.find((plant) => plant.elCode === id);
    if (plant) {
      return "collected";
    } else {
      return "not collected";
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
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
                <div className=" bg-sand rounded-xl m-2 p-2">
                  <div className="text-5xl p-2 border-b-2 border-dark">
                    <h1 className="">My Collection</h1>
                  </div>
                  <div className="p-2">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Non quos, iure optio mollitia earum hic officia debitis
                      sapiente cum iste doloremque nulla, harum beatae quisquam
                      consectetur saepe rem blanditiis. Qui? Provident esse
                      doloribus velit recusandae dolor illum blanditiis repellat
                      iure? Nihil id blanditiis corrupti porro ipsam ut
                      voluptates ducimus doloremque expedita maiores
                      consequuntur, quis dolorum in, officia reprehenderit sequi
                      eum. Corrupti assumenda nobis natus, similique incidunt
                      vero hic, deleniti iusto recusandae sit rerum modi magnam.
                      Repudiandae earum incidunt sit, vero totam ad recusandae
                      sequi aliquam, ex accusantium veniam voluptates dolor.
                      Facilis eaque nulla, sapiente inventore ad debitis
                      mollitia architecto itaque asperiores! Aut sequi non
                      numquam modi possimus tempore cum voluptatem ratione
                      corporis natus. Nam enim, quod accusantium magni labore
                      debitis! Illo, labore? Cum aspernatur nobis omnis corporis
                      corrupti unde similique, at veritatis tempora nihil
                      repudiandae placeat quia porro natus ut voluptatem
                      recusandae qui modi perspiciatis quos rem illum quam.
                      Impedit!
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark text-2xl">
                <div className=" bg-sand m-2">
                  <div className="text-3xl p-2 m-2">
                    <h1>Filter</h1>
                  </div>
                  <div className="flex justify-between">
                    <div className="p-2 m-2">
                      <label>
                        Family:
                        <input
                          type="text"
                          className="bg-sand border-b-2 border-dark w-full"
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
                          className="bg-sand border-b-2 border-dark w-full"
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
                          className="bg-sand border-b-2 border-dark w-full"
                          onChange={(event) =>
                            handleFilterChange(event, "species")
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 m-2 bg-moss border-4 border-dark rounded-xl shadow-2xl shadow-dark">
                <ul className=" bg-sand m-2 p-2">
                  {filteredAndSortedPlants.map((plant) => (
                    <li
                      key={plant.id}
                      className="p-2 m-2 bg-sand flex border-b-2 border-dark"
                    >
                      <div className="w-3/4 flex justify-between">
                        <span className="w-1/3">{plant.family}</span> |
                        <span className="w-1/3">{plant.genus} </span> |
                        <span className="w-1/3">{plant.species}</span> |
                      </div>
                      <div>
                        <span>
                          <Link
                            href={`./${plant.elCode}`}
                          >
                            {statusUpdate(plant.elCode)}
                          </Link>
                        </span>
                      </div>
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
