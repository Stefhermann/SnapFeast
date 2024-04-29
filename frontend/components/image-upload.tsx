"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { useRouter } from "next/navigation";
import "@uploadthing/react/styles.css";

export const ImageUpload = () => {
  const router = useRouter();

  const handleUpload = async (res) => {
    const url = res?.[0].url.split("/").pop();
    router.push(`/recipes/${url}`);
  };
  return (
    <UploadDropzone
      className="border-solid bg-slate-50 h-[1000px] w-3/4 opacity-90 mt-[50px]"
      endpoint="imageUploader"
      onClientUploadComplete={async (res) => handleUpload(res)}
      onUploadError={(error: Error) => console.log(error)}
    />
  );
};
