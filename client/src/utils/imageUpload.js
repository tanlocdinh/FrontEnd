export const checkImage = (file) => {
  let err = "";
  if (!file) {
    return (err = "File does not exist.");
  }
  //?1 mb
  if (file.size > 1024 * 1024) {
    return (err = "File size must be less than 1 Mb.");
  }

  if (file.type !== "image/jpeg" && file.type !== "image/png") {
    return (err = "Image must be jpeg or png.");
  }

  return err;
};

// export const imageUpload = async (images) => {
//   let imgArr = [];
//   for (const item of images) {
//     const formData = new FormData();

//     if (item.camera) {
//       formData.append("file", item.camera);
//     } else {
//       formData.append("file", item);
//     }

//     // formData.append("upload_preset", "ADD VALUE HERE");
//     // formData.append("cloud_name", "ADD VALUE HERE");

//     const res = await fetch("http://localhost:8080/upload", {
//       method: "POST",
//       body: formData,
//     });

//     if (!res.ok) {
//       throw new Error("Failed to upload image");
//     }

//     const data = await res.json();
//     console.log("Uploaded image data:", data);

//     imgArr.push({ public_id: data.public_id, url: data.secure_url });
//   }
//   return imgArr;
// };

// export const imageUpload = async (images) => {
//   let imgArr = [];
//   for (const item of images) {
//     const formData = new FormData();

//     if (item.camera) {
//       formData.append("file", item.camera);
//     } else {
//       formData.append("file", item);
//     }

//     try {
//       const res = await fetch("http://localhost:8080/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (!res.ok) {
//         throw new Error("Failed to upload image");
//       }

//       const data = await res.json();
//       console.log("Uploaded image data:", data);

//       // Use the filePath as the URL for the image
//       if (data && data.filePath) {
//         imgArr.push({ url: data.filePath });
//       } else {
//         console.error("Invalid image upload response:", data);
//         throw new Error("Invalid image upload response");
//       }
//     } catch (error) {
//       console.error("Image upload error:", error);
//       throw error;
//     }
//   }
//   return imgArr;
// };

export const imageUpload = async (images) => {
  let imgArr = [];
  for (const item of images) {
    const formData = new FormData();

    if (item.camera) {
      formData.append("file", item.camera);
    } else {
      formData.append("file", item);
    }

    try {
      const res = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      console.log("Uploaded image data:", data);

      if (data && data.filePath) {
        // imgArr.push({ imageId: data.imageId });
        imgArr.push({ url: data.filePath });
      } else {
        console.error("Invalid image upload response:", data);
        throw new Error("Invalid image upload response");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  }
  return imgArr;
};
