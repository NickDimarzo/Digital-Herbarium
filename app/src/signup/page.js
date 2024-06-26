"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const { user, createUser, emailSignIn } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, setLoading);
  };

  return (
    <main
      className="w-screen h-full flex-col justify-center"
      // style={{
      //   backgroundPosition: "center",
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      //   backgroundSize: "cover",
      // }}
    >
      <div className="w-screen h-screen flex justify-center text-gray-50">
        <div className="w-2/5 bg-dark-blue flex-col h-max rounded-3xl justify-center border-8 border-darker-blue mt-32 ">
          <div className="flex-col justify-center m-8 xl:text-4xl text-2xl font-mono bg-dark-green p-5 rounded-3xl">
            {loading ? (
              <div className="flex justify-center flex-col">
                <div className="flex justify-center px-8 pt-10">
                  <p>Hang tight This may take a few minutes.</p>
                </div>
                <div className="flex justify-center px-8 pt-10">
                  <p>We are building your Herbarium now!</p>
                </div>
                <div className="flex justify-center px-8 pt-10">
                  <button
                    type="button"
                    className="bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-3xl animate-pulse"
                    disabled
                  >
                    Loading...
                  </button>
                </div>
              </div>
            ) : user ? (
              <div>
                <div className="flex justify-center px-8 pt-10">
                  <h1>Thanks for creating an Account</h1>
                </div>
                <div className="flex justify-center px-8 pt-10">
                  <p>you are logged in as: </p>
                </div>
                <div className="flex justify-center px-8 pt-10">
                  <p>{user.email}</p>
                </div>
                <div className="flex justify-center px-8 pt-10">
                  <button className="flex bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-3xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110">
                    <Link href="collection">My Collection</Link>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <h1>Welcome to account</h1>
                </div>
                <div className="flex justify-center items-center">
                  <h1>sign up</h1>
                </div>
                <div className="flex justify-center">
                  <p className="px-8 pt-10">
                    please fill out the form below to create an account
                  </p>
                </div>
                <div className="flex-col justify-center px-12 pt-10">
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                      <label className="w-full">
                        Email:
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className=" text-black m-2 w-full bg-gray-50 rounded-md "
                        />
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <label className="w-full">
                        Password:
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className=" text-black m-2 w-full bg-gray-50 rounded-md"
                        />
                      </label>
                    </div>
                    <div className="flex justify-center px-8 pt-10">
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-3xl hover:bg-light-green shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110"
                      >
                        {" "}
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
