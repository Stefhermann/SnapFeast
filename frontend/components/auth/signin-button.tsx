"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignIn = () => {
  return (
    <Button
      className="bg-sky-500 text-white hover:bg-sky-300 dark:bg-orange-500 dark:hover:bg-orange-300 text-3xl text-center px-5 size-30"
      onClick={() => signIn("github", { redirectTo: "/dashboard" })}
    >
      start
    </Button>
  );
};
