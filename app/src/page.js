"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

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
            {user ? (
              <div>
                <div className="flex justify-center py-2">
                  <h1>Welcome</h1>
                </div>
                <div className="flex justify-center py-2">
                  <p>you are logged in as</p>
                </div>
                <div className="flex justify-center py-2">
                  <p>{user.email}</p>
                </div>
                <div className="flex justify-center py-2">
                  <button
                    onClick={firebaseSignOut}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Sign Out
                  </button>
                </div>
                <div className="flex justify-center">
                <button className="bg-velvet text-brick px-10  font-mono m-8 py-4 rounded-full hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110">

                  <Link href="src/collection">My Collection</Link>
                </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center">
                  <h1>Welcome to account sign in</h1>
                </div>
                <div className="flex justify-center w-full">
                  <p className="px-8 pt-10">Please sign in with your email and password</p>
                </div>
                <div className="flex-col justify-center px-12 pt-10">
                  <form onSubmit={handleSubmit}>
                    <div className="flex justify-end">
                      <label>
                        Email:
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className=" text-black"
                        />
                      </label>
                    </div>
                    <div className="flex justify-end">
                      <label>
                        Password:
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className=" text-black"
                        />
                      </label>
                    </div>
                    <div className="flex justify-center px-8 pt-10">
                      <button
                        type="submit"
                        onSubmit={handleSubmit}
                        className="bg-velvet text-brick px-10 font-mono m-8 py-4 rounded-full hover:bg-dark shadow-2xl shadow-dark transition duration-500 hover:-translate-y-1 hover:scale-110"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center px-8 pt-10">
                <Link href="src/signup">Don't have an account? Sign up</Link>
                </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
