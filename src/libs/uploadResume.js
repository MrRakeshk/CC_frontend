import axios from "axios";

export const apiUploadResume = (resumeFile) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume); // the resume file
      formData.append("upload_preset", "Rakesh"); // your preset name
      formData.append("folder", "jobportal/resumes"); // for organized uploads
      formData.append("resource_type", "raw"); // because PDFs are raw files


      const response = await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload",
        data: formData,
      });

      resolve(response); // ✅ returns { secure_url, etc. }
    } catch (error) {
      reject(error);
    }
  }); 

