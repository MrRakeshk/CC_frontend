import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume); // PDF, DOC, etc.
      formData.append("upload_preset", "Rakesh");
      formData.append("cloud_name", "dvy6xbobi");
      formData.append("resource_type", "raw");

      const response = await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload", // ✅ fixed here
        data: formData,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

