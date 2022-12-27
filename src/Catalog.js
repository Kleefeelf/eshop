import React from "react";
import Header from "./HomeComponents/Header";
import CatalogBody from "./CatalogComponents/CatalogBody";
import Footer from "./HomeComponents/Footer";

function Catalog({ logout, ...rest }) {
  return (
    <div className="app">
      <Header />
      <CatalogBody />
      <Footer />
    </div>
  );
}

export default Catalog;
