import React, { useState } from "react";
import {
  glassBottle,
  plasticBottle,
  aluminumBottle,
} from "./../../constants/products";
import Button from "./../../components/ui/Button";
import aluminumIconBlue from "./../../assets/icons/aliminum.svg";
import aluminumIconWhite from "./../../assets/icons/alimnumWhite.svg";
import plasticIconWhite from "./../../assets/icons/plastic.svg";
import plasticIconBlue from "./../../assets/icons/bottleBlue.svg";
import glassIconBlue from "./../../assets/icons/glass.svg";
import glassIconWhite from "./../../assets/icons/glassWhite.svg";
import useWindowDimensions from "../../hooks/UseWindowDimention";
import Benefits from "../../components/Benefits";

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(aluminumBottle);
  const { width } = useWindowDimensions();
  return (
    <section id="products" className="products-container">
      <article className="products-container__header">
        <div data-aos="fade-right" className="product-image__container">
          <img
            src={selectedProduct.icon}
            className="bottle-image"
            alt="product-image"
          />
          <p className="image-description">{selectedProduct.iconDescription}</p>
        </div>
        <div data-aos="fade-left" className="product-details__container">
          <h5 className="product-material">{selectedProduct.type}</h5>
          <h1 className="product-title">
            {selectedProduct.title} <br />{" "}
            <span className="title">{selectedProduct.type}</span>
            <span className="point">.</span>
          </h1>
          <p className="product-detail">
            {selectedProduct.description}
            <span>
              {selectedProduct.specialWord && selectedProduct.specialWord}
            </span>
          </p>
          <div className="buttons-action__container">
            <Button
              onClick={() => setSelectedProduct(aluminumBottle)}
              className={selectedProduct.type === "aluminum" ? "active" : ""}
              icon={aluminumIconBlue}
              text="Aluminum"
              icon={
                selectedProduct.type === "aluminum"
                  ? aluminumIconBlue
                  : aluminumIconWhite
              }
            />
            <Button
              onClick={() => setSelectedProduct(plasticBottle)}
              icon={
                selectedProduct.type === "plastic"
                  ? plasticIconBlue
                  : plasticIconWhite
              }
              text="Plastic"
              className={selectedProduct.type === "plastic" ? "active" : ""}
            />
            <Button
              onClick={() => setSelectedProduct(glassBottle)}
              icon={
                selectedProduct.type === "glass"
                  ? glassIconBlue
                  : glassIconWhite
              }
              text="Glass"
              className={selectedProduct.type === "glass" ? "active" : ""}
            />
          </div>
        </div>
      </article>
      {width > 991 && <Benefits />}
    </section>
  );
}

export default Products;
