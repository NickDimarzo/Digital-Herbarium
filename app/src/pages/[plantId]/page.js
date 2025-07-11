"use client";

// React/Next Imports
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUserAuth } from "../../_utils/auth-context";

// Third-party libraries
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

// Components
import NavBar from "../../components/NavBar";
import Redirect from "../../components/Redirect";
import PlantInfo from "../../components/plantId/PlantInfo";
import CollectionInfo from "../../components/plantId/CollectionInfo";
import HighlightImage from "../../components/plantId/HighlightImage";
import PrimaryImage from "../../components/plantId/PrimaryImage";

// Database
import {
  fetchUserPlants,
  addUserPlant,
  uploadImages,
  fetchPlantImages,
  deletePlantImage,
} from "../../_services/DbServices";
import plantsData from "../../alberta-plants/new-herbarium.json";

export default function Page({ params }) {
  const { user, createUser, emailSignIn } = useUserAuth();
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [plant, setPlant] = useState({});
  const [notes, setNotes] = useState("Add your notes here!");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dateOfCollection, setDateOfCollection] = useState("");
  const [location, setLocation] = useState("");
  const [habitat, setHabitat] = useState("");
  const [collector, setCollector] = useState("");
  const [userImages, setUserImages] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  // Variables for image titles, dates, and descriptions
  // Primary Image
  const [primaryImage, setPrimaryImage] = useState(plant.primaryImage);
  const [primaryImageTitle, setPrimaryImageTitle] = useState(
    plant.primaryImageTitle
  );
  const [primaryImageDate, setPrimaryImageDate] = useState(dateOfCollection);
  const [primaryImageDescription, setPrimaryImageDescription] = useState(
    plant.primaryImageDescription
  );
  // HighlightImageOne
  const [highLightImagesOne, setHighLightImagesOne] = useState(
    plant.highLightImagesOne
  );
  const [highLightImagesOneTitle, setHighLightImagesOneTitle] = useState(
    plant.highLightImagesOneTitle
  );
  const [highLightImagesOneDate, setHighLightImagesOneDate] =
    useState(dateOfCollection);
  const [highLightImagesOneDescription, setHighLightImagesOneDescription] =
    useState(plant.highLightImagesOneDescription);
  // HighlightImageTwo
  const [highLightImagesTwo, setHighLightImagesTwo] = useState(
    plant.highLightImagesTwo
  );
  const [highLightImagesTwoTitle, setHighLightImagesTwoTitle] = useState(
    plant.highLightImagesTwoTitle
  );
  const [highLightImagesTwoDate, setHighLightImagesTwoDate] =
    useState(dateOfCollection);
  const [highLightImagesTwoDescription, setHighLightImagesTwoDescription] =
    useState(plant.highLightImagesTwoDescription);
  // HighlightImageThree
  const [highLightImagesThree, setHighLightImagesThree] = useState(
    plant.highLightImagesThree
  );
  const [highLightImagesThreeTitle, setHighLightImagesThreeTitle] = useState(
    plant.highLightImagesThreeTitle
  );
  const [highLightImagesThreeDate, setHighLightImagesThreeDate] =
    useState(dateOfCollection);
  const [highLightImagesThreeDescription, setHighLightImagesThreeDescription] =
    useState(plant.highLightImagesThreeDescription);

  // Upload images to firebase storage
  const uploadImage = () => {
    if (user) {
      uploadImages(imageUpload, user.uid, plant.elCode).then(() => {
        fetchPlantImages(user.uid, plant.elCode).then((images) => {
          setUserImages(images);
        });
      });
      plant.dateOfCollection = dateOfCollection;
      plant.location = location;
      plant.habitat = habitat;
      plant.collector = collector;
      plant.notes = textAreaValue;
      plant.primaryImage = primaryImage;
      plant.primaryImageTitle = primaryImageTitle;
      plant.primaryImageDate = primaryImageDate;
      plant.primaryImageDescription = primaryImageDescription;
      plant.highLightImagesOne = highLightImagesOne;
      plant.highLightImagesOneTitle = highLightImagesOneTitle;
      plant.highLightImagesOneDate = highLightImagesOneDate;
      plant.highLightImagesOneDescription = highLightImagesOneDescription;
      plant.highLightImagesTwo = highLightImagesTwo;
      plant.highLightImagesTwoTitle = highLightImagesTwoTitle;
      plant.highLightImagesTwoDate = highLightImagesTwoDate;
      plant.highLightImagesTwoDescription = highLightImagesTwoDescription;
      plant.highLightImagesThree = highLightImagesThree;
      plant.highLightImagesThreeTitle = highLightImagesThreeTitle;
      plant.highLightImagesThreeDate = highLightImagesThreeDate;
      plant.highLightImagesThreeDescription = highLightImagesThreeDescription;
      addUserPlant(plant, user.uid);
    } else {
      alert("You must be signed in to upload images");
    }
  };

  // Fetch images from firebase storage
  const fetchImages = () => {
    if (user) {
      fetchPlantImages(user.uid, plant.elCode).then((images) => {
        setUserImages(images);
      });
    }
  };

  const handleSelectPrimaryImage = (imageUrl) => {
    setPrimaryImage(imageUrl);
  };

  const handleSelectHighlightImageOne = (imageUrl) => {
    setHighLightImagesOne(imageUrl);
  };

  const handleSelectHighlightImageTwo = (imageUrl) => {
    setHighLightImagesTwo(imageUrl);
  };

  const handleSelectHighlightImageThree = (imageUrl) => {
    setHighLightImagesThree(imageUrl);
  };

  // Handle text area change
  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
    plant.notes = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user) {
      plant.dateOfCollection = dateOfCollection;
      plant.location = location;
      plant.habitat = habitat;
      plant.collector = collector;
      plant.notes = textAreaValue;
      plant.primaryImage = primaryImage;
      plant.primaryImageTitle = primaryImageTitle;
      plant.primaryImageDate = primaryImageDate;
      plant.primaryImageDescription = primaryImageDescription;
      plant.highLightImagesOne = highLightImagesOne;
      plant.highLightImagesOneTitle = highLightImagesOneTitle;
      plant.highLightImagesOneDate = highLightImagesOneDate;
      plant.highLightImagesOneDescription = highLightImagesOneDescription;
      plant.highLightImagesTwo = highLightImagesTwo;
      plant.highLightImagesTwoTitle = highLightImagesTwoTitle;
      plant.highLightImagesTwoDate = highLightImagesTwoDate;
      plant.highLightImagesTwoDescription = highLightImagesTwoDescription;
      plant.highLightImagesThree = highLightImagesThree;
      plant.highLightImagesThreeTitle = highLightImagesThreeTitle;
      plant.highLightImagesThreeDate = highLightImagesThreeDate;
      plant.highLightImagesThreeDescription = highLightImagesThreeDescription;
      addUserPlant(plant, user.uid);
      console.log(plant);
    }
  };

  // handle deleting and image from the database
  const handleDeleteImage = (imageUrl) => {
    deletePlantImage(user.uid, plant.elCode, imageUrl).then(() => {
      fetchPlantImages(user.uid, plant.elCode).then((images) => {
        setUserImages(images);
      });
      switch (imageUrl) {
        case primaryImage:
          setPrimaryImage(null);
          setPrimaryImageTitle("");
          setPrimaryImageDate("");
          setPrimaryImageDescription("");
          break;
        case highLightImagesOne:
          setHighLightImagesOne(null);
          setHighLightImagesOneTitle("");
          setHighLightImagesOneDate("");
          setHighLightImagesOneDescription("");
          break;
        case highLightImagesTwo:
          setHighLightImagesTwo(null);
          setHighLightImagesTwoTitle("");
          setHighLightImagesTwoDate("");
          setHighLightImagesTwoDescription("");
          break;
        case highLightImagesThree:
          setHighLightImagesThree(null);
          setHighLightImagesThreeTitle("");
          setHighLightImagesThreeDate("");
          setHighLightImagesThreeDescription("");
          break;
      }
    });
  };

  // Fetch user plants
  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
      return () => unsubscribe();
    }
  }, [user]);

  // Set plant data
  useEffect(() => {
    if (userPlants.length > 0) {
      const plant = userPlants.find((plant) => plant.elCode === params.plantId);
      if (plant) {
        setPlant(plant);
        setTextAreaValue(plant.notes);
        setDateOfCollection(plant.dateOfCollection);
        setLocation(plant.location);
        setHabitat(plant.habitat);
        setCollector(plant.collector);
        setPrimaryImage(plant.primaryImage);
        setPrimaryImageTitle(plant.primaryImageTitle);
        setPrimaryImageDate(plant.dateOfCollection);
        setPrimaryImageDescription(plant.primaryImageDescription);
        setHighLightImagesOne(plant.highLightImagesOne);
        setHighLightImagesOneTitle(plant.highLightImagesOneTitle);
        setHighLightImagesOneDate(plant.dateOfCollection);
        setHighLightImagesOneDescription(plant.highLightImagesOneDescription);
        setHighLightImagesTwo(plant.highLightImagesTwo);
        setHighLightImagesTwoTitle(plant.highLightImagesTwoTitle);
        setHighLightImagesTwoDate(plant.dateOfCollection);
        setHighLightImagesTwoDescription(plant.highLightImagesTwoDescription);
        setHighLightImagesThree(plant.highLightImagesThree);
        setHighLightImagesThreeTitle(plant.highLightImagesThreeTitle);
        setHighLightImagesThreeDate(plant.dateOfCollection);
        setHighLightImagesThreeDescription(
          plant.highLightImagesThreeDescription
        );
        console.log(plant);
      } else {
        const plant = systemPlants.find(
          (plant) => plant.elCode === params.plantId
        );
        setPlant(plant);
        console.log(plant);
      }
    } else {
      const plant = systemPlants.find(
        (plant) => plant.elCode === params.plantId
      );
      setPlant(plant);
      console.log(plant);
    }
  }, [userPlants, systemPlants, params.plantId]);

  // Fetch images
  useEffect(() => {
    fetchImages();
  }, [user, plant, userPlants, userImages, fetchImages]);

  return (
    <>
      {user?.emailVerified ? (
        <body className="flex-col justify-center font-mono xl:text-2xl text-lg ">
          <header>
            <NavBar />
          </header>
          <main className="flex justify-center mt-10">
            <div className=" w-full sm:w-3/4 justify-center flex flex-col mt-10">
              <section className="flex flex-col lg:flex-row w-full ">
                <PlantInfo plant={plant} />
                <CollectionInfo
                  dateOfCollection={dateOfCollection}
                  setDateOfCollection={setDateOfCollection}
                  location={location}
                  setLocation={setLocation}
                  habitat={habitat}
                  setHabitat={setHabitat}
                  collector={collector}
                  setCollector={setCollector}
                />
              </section>
              <section class="custom-card">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-full">
                  {/* Primary Image (left side) */}
                  <PrimaryImage
                    primaryImage={primaryImage}
                    primaryImageTitle={primaryImageTitle}
                    setPrimaryImageTitle={setPrimaryImageTitle}
                    primaryImageDescription={primaryImageDescription}
                    setPrimaryImageDescription={setPrimaryImageDescription}
                    dateOfCollection={dateOfCollection}
                  />
                  {/* Highlight Images (Right Side) */}
                  <div className="w-full h-full lg:w-1/3 lg:mr-10 ">
                    <div className="flex flex-col justify-between h-[903px]">
                      <HighlightImage
                        image={highLightImagesOne}
                        title={highLightImagesOneTitle}
                        date={highLightImagesOneDate}
                        description={highLightImagesOneDescription}
                        setTitle={setHighLightImagesOneTitle}
                        setDescription={setHighLightImagesOneDescription}
                      />
                      <HighlightImage
                        image={highLightImagesTwo}
                        title={highLightImagesTwoTitle}
                        date={highLightImagesTwoDate}
                        description={highLightImagesTwoDescription}
                        setTitle={setHighLightImagesTwoTitle}
                        setDescription={setHighLightImagesTwoDescription}
                      />
                      <HighlightImage
                        image={highLightImagesThree}
                        title={highLightImagesThreeTitle}
                        date={highLightImagesThreeDate}
                        description={highLightImagesThreeDescription}
                        setTitle={setHighLightImagesThreeTitle}
                        setDescription={setHighLightImagesThreeDescription}
                      />
                    </div>
                  </div>
                </div>
              </section>
              {/*PHOTO UPLOADS*/}
              <section class="custom-card">
                <div className=" bg-white rounded-xl m-2 p-2">
                  <div className="flex justify-center w-full p-2 m-2">
                    <h1 className="w-max xl:text-3xl text-xl"> My Photos</h1>
                  </div>
                  <div className="sm:grid sm:grid-flow-row sm:grid-cols-3 justify-center gap-4">
                    {userImages && userImages.length > 0 ? (
                      userImages.map((image) => (
                        <div
                          key={plant.id}
                          className="flex-col p-2 justify-center relative"
                        >
                          <Link
                            href={image}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="border-2 border-dark-blue rounded-xl shadow-2xl shadow-black object-cover w-full h-64"
                              src={image}
                              alt="plant"
                            />
                          </Link>
                          <Menu as="div" className="absolute top-4 right-4">
                            <MenuButton className="bg-white p-2 rounded-full hover:bg-gray-100 shadow-lg">
                              <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
                            </MenuButton>
                            <Transition
                              enter="transition duration-100 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-75 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <MenuItems className="absolute right-0 mt-2 w-64 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectPrimaryImage(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Set as{" "}
                                      {primaryImageTitle
                                        ? primaryImageTitle
                                        : "Primary Image"}
                                    </button>
                                  )}
                                </MenuItem>
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectHighlightImageOne(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Set as{" "}
                                      {highLightImagesOneTitle
                                        ? highLightImagesOneTitle
                                        : "Highlight Image One"}
                                    </button>
                                  )}
                                </MenuItem>
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectHighlightImageTwo(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Set as{" "}
                                      {highLightImagesTwoTitle
                                        ? highLightImagesTwoTitle
                                        : "Highlight Image Two"}
                                    </button>
                                  )}
                                </MenuItem>
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() =>
                                        handleSelectHighlightImageThree(image)
                                      }
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Set as{" "}
                                      {highLightImagesThreeTitle
                                        ? highLightImagesThreeTitle
                                        : "Highlight Image Three"}
                                    </button>
                                  )}
                                </MenuItem>
                                <MenuItem>
                                  {({ focus }) => (
                                    <button
                                      onClick={() => handleDeleteImage(image)}
                                      className={`${
                                        focus
                                          ? "bg-light-green text-white"
                                          : "text-gray-900"
                                      } group flex w-full items-center px-4 py-2 text-sm`}
                                    >
                                      Delete
                                    </button>
                                  )}
                                </MenuItem>
                              </MenuItems>
                            </Transition>
                          </Menu>
                        </div>
                      ))
                    ) : (
                      <div className="flex justify-center w-full col-span-3 m-2 p-2">
                        <div className="flex flex-col items-center">
                          <p>
                            Click the Choose Files button below to get started
                          </p>
                          <p>Images will be displayed here</p>
                          <p>once they have been uploaded!</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <div className="flex-col justify-between bg-white rounded-xl m-2 mt-4 p-2 ">
                    <div className="flex justify-center p-4 text-sm m:text-lg lg:text-xl xl:text-2xl ">
                      <input
                        type="file"
                        className=" bg-white w-max"
                        multiple
                        onChange={(e) => {
                          setImageUpload(Array.from(e.target.files));
                        }}
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-dark-green text-gray-50 px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-light-green shadow-2xl shadow-black transition duration-500 hover:scale-110 "
                        onClick={uploadImage}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section class="custom-card">
                <div className=" bg-white rounded-xl m-2 p-2">
                  <form className="text-black flex-col">
                    <div className="flex justify-center">
                      <h1 className="w-max xl:text-3xl text-xl">Notes</h1>
                    </div>
                    <div className="flex justify-center h-96 ">
                      <textarea
                        type="text"
                        value={textAreaValue}
                        onChange={handleTextAreaChange}
                        className="text-black bg-gray-100 border-2 border-darker-blue rounded-xl p-2 w-full m-2 max-h-full"
                      />
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="bg-dark-green text-gray-50 px-10 font-mono py-2 m-2 h-max rounded-xl hover:bg-light-green shadow-2xl shadow-black transition duration-500 hover:scale-110 "
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </main>
        </body>
      ) : (
        <body>
          <Redirect />
        </body>
      )}
    </>
  );
}
