"use client";
import { ImageUpload } from "@/components/image-upload";
import { SignOut } from "@/components/auth/signout-button";
import { Blob } from "@/components/blob";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const UploadPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <main className="dark:bg-slate-950">
      <div className="max-h-[500px]">
        <div className="justify-between flex">
          <Button
            variant="ghost"
            className="-rotate-6 text-5xl mt-10 ml-14 hover:bg-white dark:hover:bg-slate-950 font-bold"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            SF
          </Button>
          <div className="px-10 py-10">
            <SignOut />
          </div>
        </div>
        <div className="absolute right-0 top-16 ">
          <Blob />
        </div>
        <div className="absolute left-0 top-[100px]">
          <Blob color="blue" />
        </div>
        <div className="justify-center items-center flex">
          <ImageUpload />
        </div>
      </div>
    </main>
  );
};
