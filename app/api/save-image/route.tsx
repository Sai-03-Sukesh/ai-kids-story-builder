import { storage } from "@/config/firebaseConfig";
import axios from "axios";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";
import { convertImage } from "@/lib/convertImage";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { url } = data;

    // Convert the image to base64
    const base64Image = "data:image/png;base64," + await convertImage(url);
    console.log(base64Image);

    const fileName = '/ai-story/' + Date.now() + ".png";
    const imageRef = ref(storage, fileName);

    // Upload the base64 string to Firebase
    await uploadString(imageRef, base64Image, 'data_url').then((snapshot) => {
      console.log('File Uploaded');
    });

    // Get the download URL for the uploaded image
    const downloadUrl = await getDownloadURL(imageRef);
    console.log(downloadUrl);

    // Respond with the download URL
    return NextResponse.json({ imageUrl: downloadUrl });
  } catch (error) {
    console.error("Error in image upload or conversion:", error);
    return NextResponse.json({ error: "Image upload failed" }, { status: 500 });
  }
}


