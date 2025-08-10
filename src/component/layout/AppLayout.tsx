import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "../ui/ScrollTop";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </>
  );
};

export default AppLayout;
