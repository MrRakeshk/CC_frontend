import axios from "axios";

export const apiUploadResume = (resumeFile) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resumeFile); // ✅ Correct variable
      formData.append("upload_preset", "Rakesh"); // ✅ Preset must be created in Cloudinary
      formData.append("folder", "jobportal/resumes");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvy6xbobi/upload",
        formData
      );

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });


