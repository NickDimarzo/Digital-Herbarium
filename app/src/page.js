"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Card from "./components/card";
import NavBar from "./components/nav-bar";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, emailSignIn, firebaseSignOut } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignIn(email, password);
  };

  return (
    <main
      className="w-full h-full flex-col justify-center"
      // style={{
      //   backgroundPosition: "center",
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      //   backgroundSize: "cover",
      // }}
    >
      <NavBar />
      <div className="w-screen h-screen flex justify-center bg-light-sand text-white">
        <div className="flex-col h-max rounded-3xl justify-center xl:mt-16 m-8 ">
          <div className="flex-col justify-center m-4 xl:m-8 text-sm  m:text-lg lg:text-2xl xl:text-4xl font-mono p-2 xl:p-5 ">
            {user ? (
              <div>
                <div className=" text-black">
                  <div className="flex justify-center py-2">
                    <h1>Welcome</h1>
                  </div>
                  <div className="flex justify-center py-2">
                    <p>you are logged in as</p>
                  </div>
                  <div className="flex justify-center py-2">
                    <p>{user.email}</p>
                  </div>
                  <div className="flex justify-center">
                  </div>
                </div>
                <div>
                  <div className="flex flex-row">
                    <div className="w-1/2">
                      <Card
                        title="My Collection"
                        route="src/collection"
                        description="Check out your collection here"
                        buttonText="Collection"
                        image="https://images.unsplash.com/photo-1698848053125-56ffcd25c7f1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                      />
                    </div>
                    <div className="w-1/2">
                      <Card
                        title="Resources"
                        route="/src"
                        description="This feature is coming soon"
                        buttonText="Resources"
                        image="https://media.istockphoto.com/id/537599600/photo/green-is-a-way-of-life.webp?b=1&s=170667a&w=0&k=20&c=xruXkXZDKoe9A_6xcJPoL3X6zOv9fSCnUgoPj6-z1gw="
                      />
                    </div>
                  </div>
                  <div className="flex flex-row ">
                    <div className="w-1/2">
                      <Card
                        title="Share"
                        route="/src"
                        description="This feature is coming soon"
                        buttonText="Share"
                        image="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvcnJlc3R8ZW58MHx8MHx8fDA%3D"
                      />
                    </div>
                    <div className="w-1/2">
                      <Card
                        title="Discover"
                        route="/src"
                        description="This feature is coming soon"
                        buttonText="Discover"
                        image="https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGVhdmVzfGVufDB8fDB8fHww"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-col items-center ">
                <div className="flex justify-center w-full items-center">
                  <h1>Welcome to account</h1>
                </div>
                <div className="flex justify-center w-full items-center">
                  <h1>Sign in!</h1>
                </div>
                <div className="flex justify-center w-full">
                  <p className="px-8 pt-10">
                    Please sign in with your email and password
                  </p>
                </div>
                <div className="flex-col justify-center items-center px-5 pt-5 xl:px-12 xl:pt-10">
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                      <label className="w-full">
                        Email:
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className=" text-black m-2 w-full  bg-light-sand border-b-2 border-black rounded-md"
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
                          className=" text-black m-2 w-full bg-light-sand border-b-2 border-black rounded-md"
                        />
                      </label>
                    </div>
                    <div className="flex justify-center px-5 pt-5 xl:px-12 xl:pt-10">
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-2xl hover:bg-light-green shadow-2xl shadow-dark-blue transition duration-500 hover:-translate-y-1 hover:scale-110 w-max"
                      >
                        <span className="flex w-max">Sign In</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center px-5 pt-5 xl:px-12 xl:pt-10">
                  <p>Dont have an account? </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    className="underline hover:text-brick"
                    href="src/signup"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
