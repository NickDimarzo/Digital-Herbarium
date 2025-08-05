"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, emailSignIn, firebaseSignOut } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignIn(email, password);
  };

  const checkUserEmailVerification = () => {
    if (user.emailVerified) {
      return (
        <div>
          <p>
            {user.email}: <span className="text-green">Verified</span>
          </p>
          <Link
            className="w-full flex justify-center p-4"
            href="/src/pages/home"
          >
            {" "}
            <a className="bg-dark-green text-white rounded-xl py-4 px-8 mt-6  hover:bg-light-green transition duration-500 hover:scale-110">
              Continue
            </a>{" "}
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            {user.email}: <span className="text-brick">Not Verified</span>
          </p>
        </div>
      );
    }
  };

  return (
    <main className="w-full h-full flex-col justify-center">
      <NavBar />
      <div className=" h-screen flex justify-center text-white">
        <div className="flex-col h-max rounded-3xl justify-center xl:mt-16 m-8 ">
          <div className="flex-col justify-center m-4 xl:m-8 text-sm  m:text-lg lg:text-2xl xl:text-2xl font-mono p-2 xl:p-5 ">
            {user ? (
              <div className="bg-white text-black p-4 rounded-2xl border-t-8 border-r-8 border-dark-blue shadow-2xl shadow-black">
                <div className="p-4 flex-col justify-center">
                  <div className="w-full flex justify-center m-2">
                    <h1>You have successfully logged in</h1>
                  </div>
                  <div className="w-full flex justify-center m-2">
                    <h1>Verify your email to continue</h1>
                  </div>
                </div>
                <div className="p-4 flex justify-center ">
                  {checkUserEmailVerification()}
                </div>
              </div>
            ) : (
              <div class="custom-card">
                <div className="flex-col items-center bg-white p-4 rounded-3xl text-black ">
                  <div className="flex justify-center w-full items-center">
                    <h1>Welcome to account</h1>
                  </div>
                  <div className="flex justify-center w-full items-center">
                    <h1>Sign in!</h1>
                  </div>
                  <div className="flex justify-center w-full">
                    <p className="px-8 pt-10">
                      
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
                            className=" text-black m-2 w-full border-b-2 border-dark-blue outline-none"
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
                            className=" text-black m-2 w-full border-b-2 border-dark-blue outline-none"
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
                      className="underline hover:text-light-green"
                      href="src/pages/signup"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
