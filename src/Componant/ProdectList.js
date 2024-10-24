import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProdectList.css";

function ProdectList({ addToCart }) {
  // استلام دالة الإضافة كسجل
  const api_url = "https://dummyjson.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.error("Error fetching products by category:", error)
      );
  };

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="mb-3">
          <select
            className="btn btn-info me-2"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "all") {
                getProducts();
              } else {
                getProductInCategory(value);
              }
            }}
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.images[0]} // Assuming multiple images, show the first one
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info btn-sm"
                    >
                      <i className="fas fa-info-circle me-2"></i> Details
                    </Link>

                    <button
                      onClick={() => addToCart(product)} // إضافة إلى السلة
                      className="btn btn-success btn-sm d-flex align-items-center"
                    >
                      <i className="fas fa-shopping-cart me-2"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProdectList;
