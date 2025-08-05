"use client";

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";
import { useState } from "react";

export default function NavBar() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark-blue border-4 border-dark-blue shadow-dark-blue xl:text-2xl text-sm">
      <div className="flex justify-between">
        <div className="flex justify-center">
          <div className=" text-gray-50 font-mono m-2 sm:px-4 rounded-lg ">
            <button className="flex justify-center p-2 items-center">
              <Link href="/src/pages/home">Digital Herbarium</Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div
            className="bg-dark-blue text-gray-50 font-mono w-max my-2 px-4 rounded-lg cursor-pointer flex items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <p className="flex items-center h-full">Menu</p>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {dropdownOpen && (
            <div className="absolute left-2 top-10 mt-2 w-full bg-dark-blue rounded-lg shadow-lg z-10 text-white text-sm">
              <ul className="py-2">
                <li>
                  <Link
                    href="/src/pages/home"
                    className="block px-4 py-2 hover:bg-dark-green rounded"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/src/pages/collection"
                    className="block px-4 py-2 hover:bg-dark-green rounded"
                  >
                    My Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/src/pages/resources"
                    className="block px-4 py-2 hover:bg-dark-green rounded"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <button
                    onClick={firebaseSignOut}
                    className="w-full text-left px-4 py-2 hover:bg-dark-green rounded"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
