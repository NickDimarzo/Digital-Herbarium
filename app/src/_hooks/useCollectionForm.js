import { useState, useEffect } from "react";

export function useCollectionForm(initialPlant) {
  const [dateOfCollection, setDateOfCollection] = useState("");
  const [location, setLocation] = useState("");
  const [habitat, setHabitat] = useState("");
  const [collector, setCollector] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (initialPlant) {
      setDateOfCollection(initialPlant.dateOfCollection || "");
      setLocation(initialPlant.location || "");
      setHabitat(initialPlant.habitat || "");
      setCollector(initialPlant.collector || "");
      setNotes(initialPlant.notes || "");
    }
  }, [initialPlant]);

  return {
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
  };
}
