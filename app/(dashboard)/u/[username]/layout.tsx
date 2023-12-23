import { getSelfByUsername } from "@/lib/auth-services";
import { redirect } from "next/navigation";
import React from "react";
import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { Container } from "./_components/container";

interface DashboardLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

const DashboardLayout = async ({ params, children }: DashboardLayoutProps) => {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default DashboardLayout;
