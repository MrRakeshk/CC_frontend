import axios from "axios";

export const apiUploadResume = (resume) =>
  new Promise(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("file", resume);                         // ✅ Correct
      formData.append("upload_preset", "Rakesh");              // ✅ Ensure this preset exists in Cloudinary
      formData.append("folder", "jobportal/resumes");          // ✅ Organized structure
      // ❌ This line is not needed here
      // formData.append("resource_type", "raw");

      const response = await axios({
        method: "POST",
        url: "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload", // ✅ Correct URL for raw uploads (PDFs)
        data: formData,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

