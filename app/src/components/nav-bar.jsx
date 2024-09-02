"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function NavBar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark-blue border-4 border-dark-blue shadow-dark-blue xl:text-2xl text-sm">
      <div className="flex justify-between">
        <div className="flex justify-center">
        <div className="bg-dark-green text-gray-50 font-mono m-2 sm:px-4 rounded-lg hover:bg-light-green transition duration-500 hover:scale-110 ">
          <button className="flex justify-center p-2 items-center">
            <Link href="/src/pages/home">Home</Link>
          </button>
        </div>
        {/* <div className="bg-dark-green text-gray-50 font-mono w-max m-2 sm:px-4 rounded-lg hover:bg-light-green transition duration-500 hover:scale-110">
          <button className="flex justify-center p-2">
            <Link href="/src/pages/collection">My Collection</Link>
          </button>
        </div> */}
        </div>
        <div className="flex justify-center">
          <div className="bg-dark-green text-gray-50 font-mono w-max m-2 px-4 rounded-lg hover:bg-light-green transition duration-500 hover:scale-110">
            <button onClick={firebaseSignOut} className="flex items-center h-full">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
