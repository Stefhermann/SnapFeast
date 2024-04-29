"use client";

import { useTheme } from "next-themes";
import { useRef } from "react";

import { SignIn } from "@/components/auth/signin-button";
import { Button } from "@/components/ui/button";
import { Blob } from "@/components/blob";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


export const InitialPage = () => {

  const { theme, setTheme } = useTheme();

  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="dark:bg-slate-950">
      <div className="absolute right-0 top-16">
        <Blob />
      </div>
      <div className="absolute left-0 top-3/4">
        <Blob color="blue" />
      </div>
      <div className="flex justify-between">
        <Button variant="ghost" className="-rotate-6 text-5xl mt-10 ml-14 hover:bg-white dark:hover:bg-slate-950 font-bold" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>SF</Button>
        <div className="flex px-10 py-10 ml-5">
          <Button variant="link" onClick={() => scrollToRef(aboutUsRef)} className="text-3xl mt-2">
            about us
          </Button>
          <Button variant="link" onClick={() => scrollToRef(contactRef)} className="text-3xl mt-2 mr-3">
            contact
          </Button>
          <SignIn />
        </div>
      </div>
      <div className="text-8xl px-20 absolute left-0 top-96">
        a whole feast with
        <br />
        just a snap!
        <h1 className="text-6xl mt-10">fridge -> recipes</h1>
        <SignIn />
      </div>
      <Card className="absolute top-[1100px] left-[25%] w-[1000px] h-[300px] text-center items-center origin-center -rotate-12 bg-sky-400 dark:bg-blue-400 rounded-none text-white dark:text-black">
        <CardHeader ref={aboutUsRef} className="text-4xl font-bold mt-4">about us</CardHeader>
        <CardContent>
          <p className="text-2xl py-8">
            We are a dynamic and inventive tech enthusiast team with a passion for culinary innovation, leading the  development of an image-driven recipe generator aimed at transforming cooking experiences for food lovers everywhere.
          </p>
        </CardContent>
      </Card>
      <Card className="absolute top-[2000px] left-[25%] w-[1000px] h-[300px] text-center items-center origin-center rotate-12 bg-orange-500 dark:bg-orange-600 rounded-none text-white dark:text-black">
        <CardHeader ref={contactRef} className="text-4xl font-bold mt-4">contact us</CardHeader>
        <CardContent>
          <div className="flex justify-center text-lg">
            <h1 className="px-8">Stefan Hermann | Fullstack <br /> [Email] herma912@umn.edu <br /> [GitHub] /Stefhermann <br /> [LinkedIn] /in/stef-m-hermann</h1>
            <h1 className="px-8">Ansh Patel | Frontend <br /> [Email] <br /> [GitHub] /anshpatelcs <br /> [LinkedIn] /in/anshmpatel </h1>
            <h1 className="px-8"> Sam Roberts | Fullstack <br /> [Email] sjroberts293@gmail.com <br /> [GitHub] /sjroberts2004 <br /> [LinkedIn] /in/samuel-joshua-roberts</h1>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};
