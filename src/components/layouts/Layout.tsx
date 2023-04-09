import React from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Hero from "./Hero";

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
      <Header />
      <Hero />
      <div className="mx-auto max-w-4xl">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
