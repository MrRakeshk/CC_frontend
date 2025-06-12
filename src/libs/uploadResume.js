import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume); // 📄 PDF or DOC
      formData.append("upload_preset", "Rakesh"); // ✅ your preset name
      formData.append("resource_type", "raw"); // ✅ for PDF/DOC
      formData.append("folder", "jobportal/resumes"); // ✅ optional but matches your asset folder

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

