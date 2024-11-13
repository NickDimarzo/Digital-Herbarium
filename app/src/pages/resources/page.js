"use client";

import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import NavBar from "../../components/nav-bar";
import ResourceCard from "../../components/resource-card";

export default function Page() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className="flex flex-col items-center">
        <div className="flex justify-center m-4">
          <h1 className="text-3xl font-bold">Resources</h1>
        </div>
        <section class="custom-card">
          <div className="flex-col">
            <div>
            <div className="flex justify-center">
              <h2 className="text-2xl font-bold m-2 w-3/4">Starters Beginner Kit</h2>
            </div>
              <div className="flex justify-center">
              <p className=" text-lg m-4 w-3/4 italic ">
                This Kit will give plant enthusiasts the tools needed to learn
                the proper terminology used for keying out plant species. As
                well as a visual guide to help identify the correct family of
                plant species.
              </p>
             </div>
            </div>
            <div className="flex justify-between">
              <ResourceCard
                desc="How to Identify Plants"
                img="https://m.media-amazon.com/images/I/61SFKgmgxDL._SL1235_.jpg"
                text="Buy from Amazon"
                link="https://www.amazon.ca/How-Identify-Plants-H-D-Harrington/dp/0804001499/ref=sr_1_1?crid=3UFSFRA8UJA5G&dib=eyJ2IjoiMSJ9.yBx1TfGHjpDNkpPwZe1ZVZi-lSa-2Sto8KUO3fxkGGvxxfs1gYJDdLQ57NkR-eLVlzVu4sgAIUgt4Kv5_FkvwKb2rA2XOKWApiuOkI4DWNtRIsVHmIhffzi0mxB68halT5iXkHhhCXrl1c7Ny4L2F8JC2qNnZgrTyHGL2UtIWqzRCkkjNcIevmA-LiSDcPnJpGjf5l0lC2uDnPwXE1nbSWdjq8AxpyZFHLG0LtooyFmJXlBI2vvfg4wD_dQWs0aeHcqSq-SLeG56JIK33fGDiCo1ODOT8FsWyjVAyqH8DOA.9_8HjUnLhbxMELH59tHZ50DxA6_sCDt8qovuSpe-gHE&dib_tag=se&keywords=How+to+Identify+plants&qid=1725755315&sprefix=how+to+identify+plants%2Caps%2C119&sr=8-1 "
              />
              <ResourceCard
                desc="How to Identify Grasses and Grasslike Plants: Sedges and Rushes"
                img="https://m.media-amazon.com/images/I/51Z6na1cdvL._SL1240_.jpg"
                text="Buy from Amazon"
                link="https://www.amazon.ca/How-Identify-Grasses-Grasslike-Plants/dp/0804007462/ref=sr_1_2?crid=3UFSFRA8UJA5G&dib=eyJ2IjoiMSJ9.yBx1TfGHjpDNkpPwZe1ZVZi-lSa-2Sto8KUO3fxkGGvxxfs1gYJDdLQ57NkR-eLVlzVu4sgAIUgt4Kv5_FkvwKb2rA2XOKWApiuOkI4DWNtRIsVHmIhffzi0mxB68halT5iXkHhhCXrl1c7Ny4L2F8JC2qNnZgrTyHGL2UtIWqzRCkkjNcIevmA-LiSDcPnJpGjf5l0lC2uDnPwXE1nbSWdjq8AxpyZFHLG0LtooyFmJXlBI2vvfg4wD_dQWs0aeHcqSq-SLeG56JIK33fGDiCo1ODOT8FsWyjVAyqH8DOA.9_8HjUnLhbxMELH59tHZ50DxA6_sCDt8qovuSpe-gHE&dib_tag=se&keywords=How+to+Identify+plants&qid=1725755315&sprefix=how+to+identify+plants%2Caps%2C119&sr=8-2"
              />
              <ResourceCard
                desc="Plants of Alberta"
                img="https://m.media-amazon.com/images/I/91JRpG+VBdL._SL1500_.jpg"
                text="Buy from Amazon"
                link="https://www.amazon.ca/Plants-Alberta-Wildflowers-Aquatic-Grasses/dp/1551052830/ref=sr_1_5?crid=3HTC9FMU0RI6J&dib=eyJ2IjoiMSJ9.QOTgHKXlqh9-ZfON3XpHTPJM4J36FoWOOZb_OFFXGIhky-w3QbKrNzpkAZNnO8oMtkpN8KEiL_dsc9Be4wdoWb6eYoNF7FvKwET4QM0-PKcVG6Y_s_hj733qVV9yrZayc2ahqNiqIFcmdgCsyOXFQ_4a74hlrPeZI85YImkyucH5hPk0FAh2h7IMy00MDhtPTZ5XBnIhBgC2-NyjgN28BwOR7xFsIamw8qI8lC4FD6Lha3XiATByPV5vTvo3i_QTQXk2F_nIt5-nxDmMxj3zVpOIWKnsptHi4T0t2LNrI8w.pnP8l_2ZFtgMBV-qwFLLx-GSyPCowKHY1GXaPNPc1cQ&dib_tag=se&keywords=flora+of+alberta+book&qid=1725755146&sprefix=flora+of+%2Caps%2C110&sr=8-5"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
