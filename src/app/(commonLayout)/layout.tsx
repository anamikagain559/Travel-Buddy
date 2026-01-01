import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CommonLayoutProps = {
  children: React.ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6">{children}</main>
      <Footer />
    </>
  );
}
