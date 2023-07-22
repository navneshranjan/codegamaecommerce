import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
