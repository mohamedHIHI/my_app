import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {products.map((product) => (
        <div className="card" style={{ width: "18rem" }} key={product.id}>
          <div className="card-body">
            <img
              src={product.thumbnail}
              className="card-img-top"
              alt={product.title}
            />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}