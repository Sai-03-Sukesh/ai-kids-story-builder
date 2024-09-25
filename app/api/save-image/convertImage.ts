// convertImage.ts

import axios from "axios";

export const convertImage = async (imageUrl: string) => {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Detect the content type from the response headers
    const contentType = response.headers['content-type'] || 'image/png';  // Default to PNG if content type is missing

    // Convert image to base64
    const base64Image = Buffer.from(response.data).toString('base64');
    return base64Image;
  } catch (error) {
    console.error("Error converting image to base64:", error);
    throw new Error('Image conversion failed');
  }
};
