import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume);
      formData.append("upload_preset", "Rakesh");
      formData.append("folder", "jobportal/resumes");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload",
        formData
      );

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

