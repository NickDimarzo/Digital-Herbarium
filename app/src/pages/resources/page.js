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
      <main className="flex flex-col items-center justify-center">
        <section class="custom-card">
          <div className="flex-col m-2">
            <div>
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold m-2 w-3/4">
                  Starters Beginner Kit
                </h2>
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
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="How to Identify Plants"
                  img="https://m.media-amazon.com/images/I/61SFKgmgxDL._SL1235_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/How-Identify-Plants-H-D-Harrington/dp/0804001499/ref=sr_1_1?crid=3UFSFRA8UJA5G&dib=eyJ2IjoiMSJ9.yBx1TfGHjpDNkpPwZe1ZVZi-lSa-2Sto8KUO3fxkGGvxxfs1gYJDdLQ57NkR-eLVlzVu4sgAIUgt4Kv5_FkvwKb2rA2XOKWApiuOkI4DWNtRIsVHmIhffzi0mxB68halT5iXkHhhCXrl1c7Ny4L2F8JC2qNnZgrTyHGL2UtIWqzRCkkjNcIevmA-LiSDcPnJpGjf5l0lC2uDnPwXE1nbSWdjq8AxpyZFHLG0LtooyFmJXlBI2vvfg4wD_dQWs0aeHcqSq-SLeG56JIK33fGDiCo1ODOT8FsWyjVAyqH8DOA.9_8HjUnLhbxMELH59tHZ50DxA6_sCDt8qovuSpe-gHE&dib_tag=se&keywords=How+to+Identify+plants&qid=1725755315&sprefix=how+to+identify+plants%2Caps%2C119&sr=8-1 "
                />
              </div>
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="How to Identify Grasses and Grasslike Plants: Sedges and Rushes"
                  img="https://m.media-amazon.com/images/I/51Z6na1cdvL._SL1240_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/How-Identify-Grasses-Grasslike-Plants/dp/0804007462/ref=sr_1_2?crid=3UFSFRA8UJA5G&dib=eyJ2IjoiMSJ9.yBx1TfGHjpDNkpPwZe1ZVZi-lSa-2Sto8KUO3fxkGGvxxfs1gYJDdLQ57NkR-eLVlzVu4sgAIUgt4Kv5_FkvwKb2rA2XOKWApiuOkI4DWNtRIsVHmIhffzi0mxB68halT5iXkHhhCXrl1c7Ny4L2F8JC2qNnZgrTyHGL2UtIWqzRCkkjNcIevmA-LiSDcPnJpGjf5l0lC2uDnPwXE1nbSWdjq8AxpyZFHLG0LtooyFmJXlBI2vvfg4wD_dQWs0aeHcqSq-SLeG56JIK33fGDiCo1ODOT8FsWyjVAyqH8DOA.9_8HjUnLhbxMELH59tHZ50DxA6_sCDt8qovuSpe-gHE&dib_tag=se&keywords=How+to+Identify+plants&qid=1725755315&sprefix=how+to+identify+plants%2Caps%2C119&sr=8-2"
                />
              </div>
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="Plants of Alberta"
                  img="https://m.media-amazon.com/images/I/91JRpG+VBdL._SL1500_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/Plants-Alberta-Wildflowers-Aquatic-Grasses/dp/1551052830/ref=sr_1_5?crid=3HTC9FMU0RI6J&dib=eyJ2IjoiMSJ9.QOTgHKXlqh9-ZfON3XpHTPJM4J36FoWOOZb_OFFXGIhky-w3QbKrNzpkAZNnO8oMtkpN8KEiL_dsc9Be4wdoWb6eYoNF7FvKwET4QM0-PKcVG6Y_s_hj733qVV9yrZayc2ahqNiqIFcmdgCsyOXFQ_4a74hlrPeZI85YImkyucH5hPk0FAh2h7IMy00MDhtPTZ5XBnIhBgC2-NyjgN28BwOR7xFsIamw8qI8lC4FD6Lha3XiATByPV5vTvo3i_QTQXk2F_nIt5-nxDmMxj3zVpOIWKnsptHi4T0t2LNrI8w.pnP8l_2ZFtgMBV-qwFLLx-GSyPCowKHY1GXaPNPc1cQ&dib_tag=se&keywords=flora+of+alberta+book&qid=1725755146&sprefix=flora+of+%2Caps%2C110&sr=8-5"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="custom-card">
          <div className="flex-col m-2">
            <div>
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold m-2 w-3/4">
                  Intermediate Identification Tools
                </h2>
              </div>
              <div className="flex justify-center">
                <p className=" text-lg m-4 w-3/4 italic ">
                  These tools will offer more focused plant identification, you
                  will have a better chance of narrowing the specimen down to
                  genus, and species. Ensure that you are ordering the
                  appropriate guide based on the ecological region you are
                  collecting ex. Western Rangeland. The Tanna plant
                  Identification guides use vegetative keys which can be more
                  tolerant during much of the growing season. A magnifying glass
                  is required when using keying guide books. Such as Tannas
                  Conservation Guides.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex w-full md:w-1/4">
                <ResourceCard
                  desc="Plants of the Rocky Mountains"
                  img="https://m.media-amazon.com/images/I/71ZTXL8t6+L._SL1000_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/Plants-Rocky-Mountains-Linda-Kershaw/dp/177213029X/ref=sr_1_1?crid=2YRQ87MHCBCUU&dib=eyJ2IjoiMSJ9.nCjCK3PXWRB2R4Y8a6mZhFxMyHd0-iZfqVz-V25gt1N6voxLpw1UCnmG9JXcQZmNX7Dspvfnk8WUdb4AaVZD8OXCrKQM5fxjAWRGt-Tq9TCnxC2mjK_QOCGERnXVNi28yptzBpf2QWO2HWPU22FBVaArcWKZdXC6f722WNRGB6ivV9P_au8_v-h4LILa3rHojaZTGqlMRW_eCH_RNQmkC9FMgjJISUwEGZ_AWy0YYU1dTKPCfe8euUA5YlJ8jkmriFZ0Yx8fzoNHKPWZGEczaJ_Yscp-xR0o9kuq8BxAADQ.AvM482k0vjTRUTC49_ETM4kdBzH-vhBpxkgHuYSC22w&dib_tag=se&keywords=plants+of+alberta+mountain&qid=1725756286&sprefix=plants+of+alberta+mountain%2Caps%2C113&sr=8-1"
                />
              </div>
              <div className="flex w-full md:w-1/4">
                <ResourceCard
                  desc="Plants of the Western Boreal Forest and Aspen Parkland "
                  img="https://m.media-amazon.com/images/I/51G6VWFB7JL.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/Plants-Western-Boreal-Forest-Parkland/dp/1551050587/ref=sr_1_15?crid=31QABKUJUEK9J&dib=eyJ2IjoiMSJ9.MKuztRZN9VB2Fjfyw6IHg8qRhxXj40Lfkkp9rl-QFFreN9khfOBToJU8V2FC9noraPciQPSwyTVldE3XC5r9Wr82yaNz1fNlW3hGEghZbXEi5KabED28UoXUZrmRVAB8hl7PY3Wh7wf19WkldyGyyWEwRKyScz-baQD8DncgmCGSgJU1mKjEqF8DU4vwPIQP8xXKENzuyIfewfqzoWv-DxF6LgcNPNl5nnhxhjx_DAUX2jfX_brkZ94QfpaIpt2pb0zhbJHMujbN8rRq8leMQYWpU53RvA_BGcFq7hypI-c.p52QSjH6dZO_B0zxrME-u--PbKURXouXhK6jFwJvNcg&dib_tag=se&keywords=plants+of+alberta&qid=1725756245&sprefix=plants+of+alberta%2Caps%2C111&sr=8-15"
                />
              </div>
              <div className="flex w-full md:w-1/4">
                <ResourceCard
                  desc="Trees in Canada"
                  img="https://m.media-amazon.com/images/I/81+iSPlKdNS._SL1000_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/dp/1554554063/ref=sspa_dk_detail_3?psc=1&pd_rd_i=1554554063&pd_rd_w=diOKL&content-id=amzn1.sym.516c2169-755e-413a-a38a-68230f4ab66f&pf_rd_p=516c2169-755e-413a-a38a-68230f4ab66f&pf_rd_r=FDZ83384T5AH69BMN63A&pd_rd_wg=8oMma&pd_rd_r=f9314729-5304-470c-8362-1b339dc475d8&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw"
                />
              </div>
              <div className="flex w-full md:w-1/4">
                <ResourceCard
                  desc="30 X 21mm Glass Jeweler Loupe Loop Eye Magnifier "
                  img=" https://m.media-amazon.com/images/I/51nSsM1GT2L._AC_SL1024_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/iKKEGOL-Jeweler-Magnifier-Magnifying-Silver/dp/B00JDHJUDY/ref=sr_1_6_mod_primary_new?crid=GGN9QC4RWU4O&dib=eyJ2IjoiMSJ9.MhcF-lRuas8dl7PchQp3_Y0XU2gF6LwIY8FiJdMZqXYq6eNq_07jCAUrPCFReUmmqbbZ3uUFbA2zYdrDkRcC-rLo9IR5GTigb6ikE8KJAzv9W8Ly0lV3Xlp6KmdnzxmNs4M0Q-W4b2y6tUFfIqwPWAqMXcBqTDJNYBME0gk3b4EhJJT5bRI7dXZqVSokPMGYCDjeaKLq0jNpptCKPVtWGfBD-mC-a5fd2OchzZziLQ00oRS4OBQNRDKYda5Jauucfho-BU76rcZnD0KmJnfTYUReRK4TRfMv4V_0Ni7lMwQ.K7KqwXhdvJ6LbQjfCyPAqgPSWbNQrToKYKEEFkUZLV0&dib_tag=se&keywords=loop%2Bmagnifying%2Bglass&qid=1725755531&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=loop%2Bmagnifying%2Bglass%2Caps%2C186&sr=8-6&th=1"
                />
              </div>
            </div>
          </div>
        </section>
        <section class="custom-card">
          <div className="flex-col m-2">
            <div>
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold m-2 w-3/4">
                  Advanced Identifications Tools
                </h2>
              </div>
              <div className="flex justify-center">
                <p className=" text-lg m-4 w-3/4 italic ">
                  The Flora of Alberta provides keys to 1775 known vascular
                  species found in Alberta (Moss E.H., 1983). This robust guide
                  provides the plant identifier the most accurate tool for plant
                  ID however; this guide uses the plants reproductive parts
                  throughout the key which can be challenging without an
                  advanced understanding of plant biology. Using this guide, you
                  WILL be able to identify down to genus, and species. A biology
                  dissecting kit, and magnifying glass is required to use this
                  guide
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="Flora of Alberta"
                  img="https://m.media-amazon.com/images/I/81zg9krSTvL._SL1500_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/Flora-Alberta-Heritage-H-Moss-ebook/dp/B00T9ZGUVA/ref=sr_1_3?crid=3HTC9FMU0RI6J&dib=eyJ2IjoiMSJ9.QOTgHKXlqh9-ZfON3XpHTPJM4J36FoWOOZb_OFFXGIhky-w3QbKrNzpkAZNnO8oMtkpN8KEiL_dsc9Be4wdoWb6eYoNF7FvKwET4QM0-PKcVG6Y_s_hj733qVV9yrZayc2ahqNiqIFcmdgCsyOXFQ_4a74hlrPeZI85YImkyucH5hPk0FAh2h7IMy00MDhtPTZ5XBnIhBgC2-NyjgN28BwOR7xFsIamw8qI8lC4FD6Lha3XiATByPV5vTvo3i_QTQXk2F_nIt5-nxDmMxj3zVpOIWKnsptHi4T0t2LNrI8w.pnP8l_2ZFtgMBV-qwFLLx-GSyPCowKHY1GXaPNPc1cQ&dib_tag=se&keywords=flora+of+alberta+book&qid=1725755146&sprefix=flora+of+%2Caps%2C110&sr=8-3"
                />
              </div>
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="2 Pack Jewelers Loupe, 30X 60X 90X Illuminated Jewelers Eye Loupe Magnifier and Magnifying Glass Loop "
                  img="https://m.media-amazon.com/images/I/81BtUTMjmCL._AC_SL1500_.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/JARLINK-Jewelry-Illuminated-Magnifier-Foldable/dp/B08RSB7S79/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.46621be6-fabe-4126-8501-d32c96c42a24%3Aamzn1.sym.46621be6-fabe-4126-8501-d32c96c42a24&crid=GGN9QC4RWU4O&cv_ct_cx=loop%2Bmagnifying%2Bglass&dib=eyJ2IjoiMSJ9.Hbh7tN0O2nQN8hmCeFiJdfFPBi3lEF0eiMPcXlXkFgimSrOXCn3wjpDnnPLDHJUvp_vHuUbQJh42p-2_xMxLqA.szBXDgAIfVdtwdEjIPMuRdLj9v4H46Zuju8kmNHdHis&dib_tag=se&keywords=loop%2Bmagnifying%2Bglass&pd_rd_i=B08RSB7S79&pd_rd_r=20df5426-2346-436c-9849-e2b761e21ba7&pd_rd_w=RJW31&pd_rd_wg=hNlsW&pf_rd_p=46621be6-fabe-4126-8501-d32c96c42a24&pf_rd_r=C3Z833S3E73RTR6035D6&qid=1725755531&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=loop%2Bmagnifying%2Bglass%2Caps%2C186&sr=1-5-acb80629-ce74-4cc5-9423-11e8801573fb-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1"
                />
              </div>
              <div className="flex w-full md:w-1/3">
                <ResourceCard
                  desc="Biology Dissecting Kit"
                  img="https://m.media-amazon.com/images/I/51WzfIeUpAL.jpg"
                  text="Buy from Amazon"
                  link="https://www.amazon.ca/Electron-Microscopy-Sciences-72951-35-Dissecting/dp/B00K33GENG/ref=sr_1_41?crid=AMA2WIAX2UYZ&dib=eyJ2IjoiMSJ9.CZPghT5wOCZVY29jMJyabRt8n2lHv4476JGMYrJUD3pNN4KF9W43pkjaBGUldbvpPCtqIqcyd7mNp3paFeYsu5GTBKBAQF1yvBxVwOjqtGMKM_sMf3bDh_WJ2xRf0H22Su4oYtomDrJe2Zs9gTd6QqjMy0D9acQIpXj3Ipx4aPj5bzFl7ngrPry-kz9-o2kFejqMitpktZzBa67Qhs_2k3aC62RcOeBO0NLqz83oeHIVbfJmb_EjsAbItvz0V7qgNUBUEBzG_LAbcT3SokVV7gbRLY7Q4OK6VcX5_xKfwbQ.Gnufv9IIwXYaugHorHV492wuwQ3gnPDkbyC00pD8WXo&dib_tag=se&keywords=DeLuxe+Student+Dissecting+Kit&qid=1725755896&sprefix=deluxe+student+dissecting+kit%2Caps%2C147&sr=8-41"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
