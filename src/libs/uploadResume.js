import axios from "axios";

export const apiUploadResume = async (resumeFile) => {
  try {
    const formData = new FormData();
    formData.append("file", resumeFile); // 📄 PDF or DOC
    formData.append("upload_preset", "Rakesh"); // ✅ your Cloudinary preset
    formData.append("folder", "jobportal/resumes");
    formData.append("resource_type", "raw"); // ✅ PDF/DOC/ZIP types

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dvy6xbobi/raw/upload",
      formData
    );

    return response.data; // ✅ now works correctly
  } catch (error) {
    console.error("Cloudinary upload error:", error.response?.data || error);
    throw error;
  }
};

