import WelcomePage from "@/components/WelcomePage";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense>
      <WelcomePage/>
      </Suspense>
    </main>
  );
}
