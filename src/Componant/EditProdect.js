import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the product data when the component loads
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setTitle(product.title);
        setDescription(product.description);
        setPrice(product.price);
      })
      .catch((error) => {
        setError("Error fetching product data.");
        console.error(error);
      });
  }, [id]);

  const formSubmit = (event) => {
    event.preventDefault();

    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update product");
        }
        return res.json();
      })
      .then(() => {
        navigate("/products"); // Navigate back to the products list after successful update
      })
      .catch((error) => {
        setError("Error updating product.");
        console.error(error);
      });
  };

  return (
    <>
      <h1>Update Product</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product title"
            type="text"
            className="form-control"
            id="productTitle"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description"
            type="text"
            className="form-control"
            id="productDescription"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Product price"
            type="number"
            className="form-control"
            id="productPrice"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Product
        </button>
      </form>
    </>
  );
}

export default EditProduct;
