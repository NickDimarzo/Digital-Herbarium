"use client";

import Link from "next/link";
import NavBar from "../../components/nav-bar";
import Redirect from "../../components/redirect";
import HighlightImage from "../../components/highlight-image";
import PlantInfo from "../../components/plantId/plantInfo";
import { useState } from "react";
import { useUserAuth } from "../../_utils/auth-context";
import { addUserPlant } from "../../_services/DbServices";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import { usePlantData } from "../../_hooks/usePlantData";
import { usePlantImages } from "../../_hooks/usePlantImages";
import { useCollectionForm } from "../../_hooks/useCollectionForm";
import { useImageSelection } from "../../_hooks/useImageSelection";

export default function Page({ params }) {
  const { user } = useUserAuth();
  const { plant, setPlant } = usePlantData(user, params.plantId);
  const { userImages, upload, remove } = usePlantImages(user, plant);
  const {
    dateOfCollection,
    setDateOfCollection,
    location,
    setLocation,
    habitat,
    setHabitat,
    collector,
    setCollector,
    notes,
    setNotes,
  } = useCollectionForm(plant);
  const {
    primaryImage,
    setPrimaryImage,
    primaryImageTitle,
    setPrimaryImageTitle,
    primaryImageDate,
    setPrimaryImageDate,
    primaryImageDescription,
    setPrimaryImageDescription,
    highlightImages,
    setHighlightImage,
  } = useImageSelection(plant);

  const [imageUpload, setImageUpload] = useState([]);

  const uploadImage = () => {
    if (!user) return alert("You must be signed in to upload images");
    upload(imageUpload);
    updatePlant();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;
    updatePlant();
  };

  const updatePlant = () => {
    const updatedPlant = {
      ...plant,
      dateOfCollection,
      location,
      habitat,
      collector,
      notes,
      primaryImage,
      primaryImageTitle,
      primaryImageDate,
      primaryImageDescription,
      highLightImagesOne: highlightImages[0].image,
      highLightImagesOneTitle: highlightImages[0].title,
      highLightImagesOneDate: highlightImages[0].date,
      highLightImagesOneDescription: highlightImages[0].description,
      highLightImagesTwo: highlightImages[1].image,
      highLightImagesTwoTitle: highlightImages[1].title,
      highLightImagesTwoDate: highlightImages[1].date,
      highLightImagesTwoDescription: highlightImages[1].description,
      highLightImagesThree: highlightImages[2].image,
      highLightImagesThreeTitle: highlightImages[2].title,
      highLightImagesThreeDate: highlightImages[2].date,
      highLightImagesThreeDescription: highlightImages[2].description,
    };
    setPlant(updatedPlant);
    addUserPlant(updatedPlant, user.uid);
  };

  const handleDeleteImage = (imageUrl) => {
    remove(imageUrl);
    if (primaryImage === imageUrl) {
      setPrimaryImage(null);
      setPrimaryImageTitle("");
      setPrimaryImageDate("");
      setPrimaryImageDescription("");
    }

    highlightImages.forEach((img, index) => {
      if (img.image === imageUrl) {
        setHighlightImage(index, { image: null, title: "", date: "", description: "" });
      }
    });
  };

  return user?.emailVerified ? (
    <main className="flex-col justify-center font-mono xl:text-2xl text-lg">
      <NavBar />
      <div className="flex justify-center mt-10">
        <div className="w-full sm:w-3/4 justify-center flex flex-col">

          {/* Plant and Collection Info */}
          <div className="flex flex-col lg:flex-row w-full">
            <PlantInfo plant={plant} />
            <div className="w-full lg:w-1/2 lg:mr-10">
              <div className="bg-white rounded-xl m-2 p-2 border-t-8 border-r-8 border-dark-blue">
                <h1 className="xl:text-3xl text-xl mb-2">Collection Information</h1>
                <label>Date of Collection:
                  <input type="date" value={dateOfCollection} onChange={(e) => setDateOfCollection(e.target.value)} />
                </label>
                <label>Location:
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label>Habitat:
                  <input type="text" value={habitat} onChange={(e) => setHabitat(e.target.value)} />
                </label>
                <label>Collector:
                  <input type="text" value={collector} onChange={(e) => setCollector(e.target.value)} />
                </label>
              </div>
            </div>
          </div>

          {/* Primary and Highlight Images */}
          <div className="custom-card">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 m-2">
                {primaryImage ? (
                  <div>
                    <img src={primaryImage} alt="Primary" className="object-contain w-full h-[400px]" />
                    <input value={primaryImageTitle} onChange={(e) => setPrimaryImageTitle(e.target.value)} placeholder="Title" />
                    <input value={primaryImageDescription} onChange={(e) => setPrimaryImageDescription(e.target.value)} placeholder="Description" />
                    <p>Date: {primaryImageDate}</p>
                  </div>
                ) : (
                  <div className="h-[400px] bg-gray-100 flex items-center justify-center">Select a primary image</div>
                )}
              </div>
              <div className="w-full lg:w-1/3">
                {highlightImages.map((img, i) => (
                  <HighlightImage
                    key={i}
                    image={img.image}
                    title={img.title}
                    date={img.date}
                    description={img.description}
                    setTitle={(val) => {
                      const updated = [...highlightImages];
                      updated[i].title = val;
                      setHighlightImage(i, updated[i]);
                    }}
                    setDescription={(val) => {
                      const updated = [...highlightImages];
                      updated[i].description = val;
                      setHighlightImage(i, updated[i]);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Image Upload and Management */}
          <div className="custom-card">
            <h1 className="text-center text-xl">My Photos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {userImages.map((img, idx) => (
                <div key={idx} className="relative">
                  <Link href={img} target="_blank">
                    <img src={img} alt="User Upload" className="w-full h-64 object-cover border rounded" />
                  </Link>
                  <Menu as="div" className="absolute top-2 right-2">
                    <MenuButton className="bg-white p-2 rounded-full shadow">
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </MenuButton>
                    <Transition>
                      <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md z-10">
                        <MenuItem>
                          {({ active }) => (
                            <button className="block w-full text-left px-4 py-2 text-sm" onClick={() => setPrimaryImage(img)}>
                              Set as Primary
                            </button>
                          )}
                        </MenuItem>
                        {[0, 1, 2].map((i) => (
                          <MenuItem key={i}>
                            {({ active }) => (
                              <button
                                className="block w-full text-left px-4 py-2 text-sm"
                                onClick={() => setHighlightImage(i, { ...highlightImages[i], image: img })}
                              >
                                Set as Highlight {i + 1}
                              </button>
                            )}
                          </MenuItem>
                        ))}
                        <MenuItem>
                          {({ active }) => (
                            <button className="block w-full text-left px-4 py-2 text-sm text-red-500" onClick={() => handleDeleteImage(img)}>
                              Delete
                            </button>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <input type="file" multiple onChange={(e) => setImageUpload(Array.from(e.target.files))} />
              <button onClick={uploadImage} className="mt-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
                Upload
              </button>
            </div>
          </div>

          {/* Notes Section */}
          <div className="custom-card">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center text-xl mb-2">Notes</h1>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2 border rounded h-60"
              />
              <div className="text-center mt-2">
                <button type="submit" className="bg-dark-green text-white px-6 py-2 rounded hover:bg-light-green">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <Redirect />
  );
}
