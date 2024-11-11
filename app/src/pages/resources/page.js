"use client";

import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import NavBar from "../../components/nav-bar";

export default function Page() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main>
        <h1>Resources</h1>
        <p>Here are some resources to help you get started with your plant collection.</p>
      </main>
    </>
  );
}
