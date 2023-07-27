import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingComponent from "../components/HomePageComponents/LandingComponent";
function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <LandingComponent />
      <Footer/>
    </div>
  );
}

export default Home;
