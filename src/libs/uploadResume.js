import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume); // ✅ not "resume", use "file"
      formData.append("upload_preset", "Rakesh"); // ✅ your actual Cloudinary preset
      formData.append("cloud_name", "dvy6xbobi");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload",
        formData
      );

      resolve(response.data);
    } catch (err) {
      console.error("Resume upload failed:", err);
      reject(err);
    }
  });
