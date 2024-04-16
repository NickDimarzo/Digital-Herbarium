"use client";

import { useState, useEffect } from "react";
import { fetchUserPlants } from "../_services/DbServices";
import { useUserAuth } from "../_utils/auth-context";
import NavBar from "../components/nav-bar";
import Link from "next/link";

export default function Page() {
  const [plants, setPlants] = useState([]);
  const [filter, setFilter] = useState("");
  const { user, createUser, emailSignIn } = useUserAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setPlants);

      // Clean up subscription on unmount
      return () => unsubscribe();
    }
  }, [user]); // Add user as a dependency

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredAndSortedPlants = plants
    .filter(
      (plant) =>
        !filter || plant.family.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.family.localeCompare(b.family));

  return (
    <>
      {user ? (
        <main className="font-mono flex flex-col">
          <header>
            <NavBar />
          </header>
          <div className="flex justify-center mt-10">
            <div className=" w-3/4 justify-center flex flex-col">
              <div className=" bg-gray-100 m-2">
                <div className="text-5xl p-2">
                  <h1>My Collection</h1>
                </div>
                <div className="p-2">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Non quos, iure optio mollitia earum hic officia debitis
                    sapiente cum iste doloremque nulla, harum beatae quisquam
                    consectetur saepe rem blanditiis. Qui? Provident esse
                    doloribus velit recusandae dolor illum blanditiis repellat
                    iure? Nihil id blanditiis corrupti porro ipsam ut voluptates
                    ducimus doloremque expedita maiores consequuntur, quis
                    dolorum in, officia reprehenderit sequi eum. Corrupti
                    assumenda nobis natus, similique incidunt vero hic, deleniti
                    iusto recusandae sit rerum modi magnam. Repudiandae earum
                    incidunt sit, vero totam ad recusandae sequi aliquam, ex
                    accusantium veniam voluptates dolor. Facilis eaque nulla,
                    sapiente inventore ad debitis mollitia architecto itaque
                    asperiores! Aut sequi non numquam modi possimus tempore cum
                    voluptatem ratione corporis natus. Nam enim, quod
                    accusantium magni labore debitis! Illo, labore? Cum
                    aspernatur nobis omnis corporis corrupti unde similique, at
                    veritatis tempora nihil repudiandae placeat quia porro natus
                    ut voluptatem recusandae qui modi perspiciatis quos rem
                    illum quam. Impedit!
                  </p>
                </div>
              </div>
              <div className=" bg-gray-100 m-2">
                <div className="text-3xl p-2">
                  <h1>Filter</h1>
                </div>
                <div className="flex justify-between">
                  <div>
                    <label>
                      Family:
                      <input
                        type="text"
                        className=""
                        onChange={handleFilterChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Genus:
                      <input
                        type="text"
                        className=""
                        onChange={handleFilterChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Species:
                      <input
                        type="text"
                        className=""
                        onChange={handleFilterChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <ul className=" bg-gray-100 m-2">
                {filteredAndSortedPlants.map((plant) => (
                  <li key={plant.id} className="p-2 m-2 bg-brick">
                    <p>
                      <span>{plant.family}</span> |
                      <span>{plant.genus} </span> |
                      <span>{plant.species}</span> |
                    </p>
                    {/* Add more plant details here */}
                  </li>
                ))}
              </ul>
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
