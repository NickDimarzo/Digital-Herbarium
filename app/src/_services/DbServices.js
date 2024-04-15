
import { db } from '../_utils/firebase'; 
import { doc, setDoc, collection, onSnapshot, query } from "firebase/firestore";
import plantsData from '../assets/new-herbarium.json';


export const createUserPlantsCollection = (userId) => {
    const userPlantsCollection = collection(db, 'users', userId, 'plants');
  
    // Create a Firestore document for each plant
    return Promise.all(plantsData.map(plant => {
      const plantDoc = doc(userPlantsCollection);
      return setDoc(plantDoc, { ...plant, notes: '', pictures: [] });
    }))
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  };


  export function fetchUserPlants(userId, setPlants) {
    const q = query(collection(db, 'users', userId, 'plants'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPlants(snapshot.docs.map(doc => doc.data()));
    });
  
    // Return the unsubscribe function to clean up the subscription
    return unsubscribe;
  }