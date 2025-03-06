import { db } from "../_utils/firebase";
import {
  doc,
  setDoc,
  collection,
  onSnapshot,
  query,
  addDoc,
} from "firebase/firestore";
import { storage } from "../_utils/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// Create a new collection in the database for the user
export const createUserPlantsCollection = async (userId) => {
  try {
    await addDoc(collection(db, "users", userId), {});
  } catch (error) {
    console.error("Error adding user", error);
  }
};

// Fetch the user's plant collection from the database
export function fetchUserPlants(userId, setUserPlants) {
  const q = query(collection(db, "users", userId, "plants"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setUserPlants(snapshot.docs.map((doc) => doc.data()));
  });

  return unsubscribe;
}

// Add a plant to the user's collection
export const addUserPlant = async (plant, userId) => {
  try {
    const { elCode, ...plantData } = plant;
    
    // Remove null/undefined values
    const cleanData = Object.fromEntries(
      Object.entries(plantData).filter(([_, value]) => value != null)
    );

    await setDoc(doc(db, "users", userId, "plants", elCode), {
      elCode,
      ...cleanData
    });
    alert("Your collection has been updated!");
    return elCode;
  } catch (error) {
    console.error("Error adding item", error);
  }
};

// add a plant image to firebase storage
export const uploadImages = async (files, userId, plantId) => {
  if (files.length === 0) {
    return;
  }
  files.map(async (file) => {
    const storageRef = ref(
      storage,
      `images/${userId}/${plantId}/${file.name + v4()}`
    );
    await uploadBytes(storageRef, file);
  });

  alert("Images uploaded successfully!");
};

// delete a plant from firebase storage
export const deletePlant = async (userId, plantId) => {
  const storageRef = ref(storage, `images/${userId}/${plantId}`);
  const listResult = await listAll(storageRef);

  for (let item of listResult.items) {
    await item.delete();
  }
};

// fetch plant images from firebase storage
export const fetchPlantImages = async (userId, plantId) => {
  const storageRef = ref(storage, `images/${userId}/${plantId}`);
  const listResult = await listAll(storageRef);
  const urls = [];

  for (let item of listResult.items) {
    const url = await getDownloadURL(item);
    urls.push(url);
  }

  return urls;
};
