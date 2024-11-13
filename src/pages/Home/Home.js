import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Main from "../../Components/Home/Home";

function Home() {
  return (
    <>
      <Header active="home" />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
