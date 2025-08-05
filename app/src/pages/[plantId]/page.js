"use client";

// React/Next Imports
import { useState, useEffect } from "react";
import { useUserAuth } from "../../_utils/auth-context";

// Components
import NavBar from "../../components/NavBar";
import Redirect from "../../components/Redirect";
import PlantInfo from "../../components/plantId/PlantInfo"; // TEST
import CollectionInfo from "../../components/plantId/CollectionInfo";
import HighlightImage from "../../components/plantId/HighlightImage";
import PrimaryImage from "../../components/plantId/PrimaryImage";
import NoImageMessage from "../../components/plantId/NoImageMessage";
import ImagesUpload from "../../components/plantId/ImagesUpload";
import PlantNotes from "../../components/plantId/PlantNotes";
import ImageCard from "../../components/plantId/ImageCard";

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
  const [plant, setPlant] = useState({
    notes: "Add your notes here!",
    dateOfCollection: "",
    location: "",
    habitat: "",
    collector: "",
    primaryImage: null,
    primaryImageTitle: "",
    primaryImageDate: "",
    primaryImageDescription: "",
    highLightImagesOne: null,
    highLightImagesOneTitle: "",
    highLightImagesOneDate: "",
    highLightImagesOneDescription: "",
    highLightImagesTwo: null,
    highLightImagesTwoTitle: "",
    highLightImagesTwoDate: "",
    highLightImagesTwoDescription: "",
    highLightImagesThree: null,
    highLightImagesThreeTitle: "",
    highLightImagesThreeDate: "",
    highLightImagesThreeDescription: "",
  });
  const [textAreaValue, setTextAreaValue] = useState("")
  const [notes, setNotes] = useState("Add your notes here!");
  const [userImages, setUserImages] = useState([]);
  const [imageUpload, setImageUpload] = useState([]);

  // Variables for image titles, dates, and descriptions
  // Primary Image
  const [primaryImage, setPrimaryImage] = useState(plant.primaryImage);
  const [primaryImageTitle, setPrimaryImageTitle] = useState(
    plant.primaryImageTitle
  );
  const [primaryImageDate, setPrimaryImageDate] = useState(plant.dateOfCollection);
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
    useState(plant.dateOfCollection);
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
    useState(plant.dateOfCollection);
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
    useState(plant.dateOfCollection);
  const [highLightImagesThreeDescription, setHighLightImagesThreeDescription] =
    useState(plant.highLightImagesThreeDescription);

  // Generic plant field updater  
  const updatePlantField = (field, value) => {
    setPlant((prev) => ({ ...prev, [field]: value }));
  };

  // Upload images to firebase storage
  const uploadImage = () => {
    if (user) {
      uploadImages(imageUpload, user.uid, plant.elCode).then(() => {
        fetchPlantImages(user.uid, plant.elCode).then((images) => {
          setUserImages(images);
        });
      });
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
  }, [user, plant, userPlants, userImages]);

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
                  plant={plant}
                  updatePlantField={updatePlantField}
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
                    dateOfCollection={plant.dateOfCollection}
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
                        <ImageCard
                          key={image}
                          plant={plant}
                          image={image}
                          handleSelectPrimaryImage={handleSelectPrimaryImage}
                          handleSelectHighlightImageOne={
                            handleSelectHighlightImageOne
                          }
                          handleSelectHighlightImageTwo={
                            handleSelectHighlightImageTwo
                          }
                          handleSelectHighlightImageThree={
                            handleSelectHighlightImageThree
                          }
                          handleDeleteImage={handleDeleteImage}
                          primaryImageTitle={primaryImageTitle}
                          highLightImagesOneTitle={highLightImagesOneTitle}
                          highLightImagesTwoTitle={highLightImagesTwoTitle}
                          highLightImagesThreeTitle={highLightImagesThreeTitle}
                        />
                      ))
                    ) : (
                      <NoImageMessage />
                    )}
                  </div>
                </div>
                <div>
                  <ImagesUpload
                    setImageUpload={setImageUpload}
                    uploadImage={uploadImage}
                  />
                </div>
              </section>
              <section class="custom-card">
                <PlantNotes
                  textAreaValue={textAreaValue}
                  handleTextAreaChange={handleTextAreaChange}
                  handleSubmit={handleSubmit}
                />
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
