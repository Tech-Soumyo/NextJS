"use client";
import { useRouter } from "next/navigation";
import { Children } from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";

interface LoginButonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/push");
  };

  if (mode === "modal") {
    return (
      <Dialog>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          {/* <LoginFrom /> */}
          Login Form
        </DialogContent>
      </Dialog>
      //   <span>TODO: Implement modal</span>
    );
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
