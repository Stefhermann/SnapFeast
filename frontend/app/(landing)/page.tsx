import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { InitialPage } from "@/components/initial-page";

const LandingPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/dashboard");
  }
  return <InitialPage />;
};

export default LandingPage;
