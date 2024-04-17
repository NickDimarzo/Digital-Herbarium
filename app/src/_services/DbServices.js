import { db } from "../_utils/firebase";
import { doc, setDoc, collection, onSnapshot, query, addDoc } from "firebase/firestore";
import plantsData from "../assets/new-herbarium.json";

export const createUserPlantsCollection = async (userId) => {
  try {
    await addDoc(collection(db, "users", id, "plants"));
  } catch (error) {
    console.error("Error adding user", error);
  }
};

export function fetchUserPlants(userId, setUserPlants) {
  const q = query(collection(db, "users", userId, "plants"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setUserPlants(snapshot.docs.map((doc) => doc.data()));
  });

  return unsubscribe;
}

export const addUserPlant = async (plant, id) => {
  try{
    const docRef = await addDoc (collection(db, "users", id, "plants"),
    {
        elCode: plant.elCode,
        family: plant.family,
        commonName: plant.commonName,
        genus: plant.genus,
        species: plant.species,
        variationSubspeices: plant.variationSubspeices,
        origin: plant.origin,
        notes: plant.notes,
    });
    return docRef.id;
  }
  catch(error){
    console.error("Error adding item", error);
  }
}
