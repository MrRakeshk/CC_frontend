import axios from "axios";

export const apiUploadResume = (resumeFile) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resumeFile); // 📄 PDF or DOC
      formData.append("upload_preset", "Rakesh"); // ✅ your preset name
      formData.append("folder", "jobportal/resumes"); 
      formData.append("resource_type", "raw"); // ✅ for PDF/DOC
     // ✅ optional but matches your asset folder

      const response = await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload",
        data: formData,
      });

      return response;
    } catch (error) {
      reject(error);
    }
  });
