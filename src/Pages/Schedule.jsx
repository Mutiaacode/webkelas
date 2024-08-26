import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const GalleryKelas = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    listImages();
  }, []);

  const listImages = () => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef)
      .then((response) => {
        const imagePromises = response.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImageList(urls);
          })
          .catch((error) => {
            console.error("Error getting image URLs:", error);
          });
      })
      .catch((error) => {
        console.error("Error listing images:", error);
      });
  };

  return (
    <div className="flex flex-col items-center p-4  min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6"></h1>
      {imageList.length === 0 ? (
        <p className="text-white">No images found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imageList.map((url, index) => (
            <div key={index} className="relative group">
              <img
                src={url}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
        
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryKelas;
