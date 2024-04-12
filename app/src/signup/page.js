"use client";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, createUser, emailSignIn } = useUserAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Thanks for creating an Account</h1>
          <p>you are logged in as {user.email}</p>
          <Link href="/src">back to home page</Link>
        </div>
      ) : (
        <div>
          <h1>Welcome to account sign up</h1>
          <p>please fill out the form below to create an account</p>
          <div>
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
            <Link
              href="/src"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              Sign
              Up
            >Submit</Link>
          </div>
        </div>
      )}
    </div>
  );
}
