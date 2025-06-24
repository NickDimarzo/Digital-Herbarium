import { useEffect, useState } from "react";
import { fetchUserPlants } from "../_services/DbServices";
import plantsData from "../alberta-plants/new-herbarium.json";

export function usePlantData(user, plantId) {
  const [userPlants, setUserPlants] = useState([]);
  const [systemPlants, setSystemPlants] = useState(plantsData);
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (user) {
      const unsubscribe = fetchUserPlants(user.uid, setUserPlants);
      return () => unsubscribe();
    }
  }, [user]);

  useEffect(() => {
    let selectedPlant = null;

    if (userPlants.length > 0) {
      selectedPlant = userPlants.find((p) => p.elCode === plantId);
    }

    if (!selectedPlant) {
      selectedPlant = systemPlants.find((p) => p.elCode === plantId);
    }

    setPlant(selectedPlant || {});
  }, [userPlants, systemPlants, plantId]);

  return { plant, setPlant };
}
