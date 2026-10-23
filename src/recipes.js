import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
  <div className="d-flex flex-wrap justify-content-center gap-3">
    {recipes.map((recipe) => (
      <div
        className="card"
        style={{ width: "18rem" }}
        key={recipe.id}
      >
        <img
          src={recipe.image}
          className="card-img-top"
          alt={recipe.name}
          style={{ height: "180px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{recipe.name}</h5>
        </div>
      </div>
    ))}
  </div>
);
}