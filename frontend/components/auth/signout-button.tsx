"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const SignOut = () => {
  return (
    <Button
      className="bg-sky-500 text-white hover:bg-sky-300 dark:bg-orange-500 dark:hover:bg-orange-300 text-lg text-center px-5 size-15"
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};
