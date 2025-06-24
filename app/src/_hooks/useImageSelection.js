import { useState, useEffect } from "react";

export function useImageSelection(initialPlant) {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [primaryImageTitle, setPrimaryImageTitle] = useState("");
  const [primaryImageDate, setPrimaryImageDate] = useState("");
  const [primaryImageDescription, setPrimaryImageDescription] = useState("");

  const [highlightImages, setHighlightImages] = useState([
    { image: null, title: "", date: "", description: "" },
    { image: null, title: "", date: "", description: "" },
    { image: null, title: "", date: "", description: "" },
  ]);

  useEffect(() => {
    if (initialPlant) {
      setPrimaryImage(initialPlant.primaryImage || null);
      setPrimaryImageTitle(initialPlant.primaryImageTitle || "");
      setPrimaryImageDate(initialPlant.primaryImageDate || "");
      setPrimaryImageDescription(initialPlant.primaryImageDescription || "");

      setHighlightImages([
        {
          image: initialPlant.highLightImagesOne || null,
          title: initialPlant.highLightImagesOneTitle || "",
          date: initialPlant.highLightImagesOneDate || "",
          description: initialPlant.highLightImagesOneDescription || "",
        },
        {
          image: initialPlant.highLightImagesTwo || null,
          title: initialPlant.highLightImagesTwoTitle || "",
          date: initialPlant.highLightImagesTwoDate || "",
          description: initialPlant.highLightImagesTwoDescription || "",
        },
        {
          image: initialPlant.highLightImagesThree || null,
          title: initialPlant.highLightImagesThreeTitle || "",
          date: initialPlant.highLightImagesThreeDate || "",
          description: initialPlant.highLightImagesThreeDescription || "",
        },
      ]);
    }
  }, [initialPlant]);

  const setHighlightImage = (index, newImage) => {
    setHighlightImages((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, image: newImage } : item
      )
    );
  };

  return {
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
  };
}
