import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { SizeIcon } from "@radix-ui/react-icons";
import LoginButton from "@/components/auth/login-button";
// import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <>
      <main
        className="flex h-full flex-col items-center justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-600 to-neutral-900 "
      >
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              "text-6xl font-semibold text-gray-300 drop-shadow-md",
              font.className
            )}
          >
            🔐 Auth
          </h1>
          <p className="text-white text-lg">A Simple Authentication Service</p>

          <div>
            <LoginButton mode="modal">
              <Button variant="secondary" size="lg">
                Sign-In
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
    </>
  );
}
