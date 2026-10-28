import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [panier, setPanier] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
  }, []);

  function ajouter(product) {
    setPanier([...panier, product]);
  }

  return (
    <div className="container-fluid p-4">
      <h2 className="text-center mb-3">Shop and ship</h2>

      <div className="row">
        <div className="col-md-6">
          <h4 className="text-center mb-3">Liste des produits</h4>

          {products.map((p) => (
            <div className="card mb-2" key={p.id}>
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <img
                    src={p.thumbnail}
                    className="img-fluid p-3"
                    alt={p.title}
                    style={{ height: "130px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-8">
                  <div className="card-body">
                    <h6>{p.title}</h6>
                    <p className="fw-bold mb-2">
                      {p.price} $
                    </p>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => ajouter(p)}
                    >
                      Ajouter au Panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-6">
          <h4 className="text-center mb-3">Panier</h4>

          {panier.map((p, index) => (
            <div className="card mb-2" key={index}>
              <div className="row g-0 align-items-center">
                <div className="col-4">
                  <img
                    src={p.thumbnail}
                    className="img-fluid p-3"
                    alt={p.title}
                    style={{ height: "130px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-8">
                  <div className="card-body">
                    <h6>{p.title}</h6>
                    <p className="fw-bold">{p.price} $</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}