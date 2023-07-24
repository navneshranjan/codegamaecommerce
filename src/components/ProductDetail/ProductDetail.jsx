import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail-info">
        <h2 className="product-detail-title">{product.title}</h2>
        <div className="product-detail-category">
          Category: {product.category}
        </div>
        <div className="product-detail-price">Price: Rs.{product.price}</div>
        <div className="product-detail-rating">
          Rating: {product.rating.rate} ({product.rating.count} ratings)
        </div>
        <p className="product-detail-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
