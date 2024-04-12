"use client";

import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import  Link  from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, emailSignIn, firebaseSignOut } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailSignIn(email, password);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome to your account</h1>
          <p>you are logged in as {user.email}</p>
          <button onClick={firebaseSignOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to account sign in</h1>
          <p>please fill out the form below to sign in</p>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" text-black"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" text-black"
              />
            </label>
            <button type="submit" onSubmit={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </form>
          <Link href="src/signup">
            Don't have an account? Sign up
          </Link>
          
        </div>
      )}
    </div>


  );
}
