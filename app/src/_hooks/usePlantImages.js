import { useEffect, useState } from "react";
import { fetchPlantImages, uploadImages, deletePlantImage } from "../_services/DbServices";

export function usePlantImages(user, plant) {
  const [userImages, setUserImages] = useState([]);

  const fetchImages = () => {
    if (user && plant?.elCode) {
      fetchPlantImages(user.uid, plant.elCode).then(setUserImages);
    }
  };

  const upload = (files) => {
    if (user && plant?.elCode) {
      uploadImages(files, user.uid, plant.elCode).then(fetchImages);
    }
  };

  const remove = (imageUrl) => {
    if (user && plant?.elCode) {
      deletePlantImage(user.uid, plant.elCode, imageUrl).then(fetchImages);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [user, plant]);

  return { userImages, upload, remove };
}
