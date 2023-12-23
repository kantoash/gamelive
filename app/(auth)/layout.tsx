import React from "react";
import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" h-full flex flex-col space-y-6 overflow-y-auto items-center justify-center py-10 ">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
