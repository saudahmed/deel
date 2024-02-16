import { useState } from "react";

import { Filesystem, Directory } from "@capacitor/filesystem";

export const useDownloadFile = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  const saveFile = async (file: string) => {
    try {
      // Convert the file data to base64
      const fileData = await fetch(file);
      const blob = await fileData.blob();

      const base64Data = (await convertBlobToBase64(blob)) as string;
      const fileName = Date.now() + ".png";

      // Write the file
      await Filesystem.writeFile({
        path: fileName,
        data: base64Data,
        directory: Directory.Documents,
      });

      setIsSuccess(true);
    } catch (error) {
      setIsFailure(true);
    }
  };

  return {
    saveFile,
    isFailure,
    isSuccess,
    setIsSuccess,
    setIsFailure,
  };
};
