import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("resume", resume);// ✅ Must be 'file'
      formData.append("upload_preset", "Rakesh"); // ✅ Your preset
      formData.append("cloud_name", "dvy6xbobi"); // ✅ Your Cloudinary cloud name
      formData.append("resource_type", "raw"); // ✅ Required for PDF, DOC, 

      const response = await axios({
        method: "POST",
        url: `https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload`,
        data: formData,
      });

      resolve(response.data); // return only response data
    } catch (error) {
      reject(error);
    }
  });

