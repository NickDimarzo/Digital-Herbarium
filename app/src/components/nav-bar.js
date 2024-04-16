"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function NavBar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-moss border-2 border-dark text-2xl shadow-dark">
      <div className="flex justify-between">
        <div className="bg-dark text-brick font-mono w-max m-2 px-4 rounded-lg shadow-dark">
          <h1 className="m-2">Digital Herbarium</h1>
        </div>
        <div className="flex justify-center">
          <div className="bg-dark text-brick font-mono w-max m-2 px-4 rounded-lg hover:bg-velvet transition duration-500 hover:scale-110">
            <button onClick={firebaseSignOut} className="flex items-center h-full">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
