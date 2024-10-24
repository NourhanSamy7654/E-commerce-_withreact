import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addprodect() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [imageUrl, setImageUrl] = useState(""); // Field for image URL
  const navigate = useNavigate();

  const formSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    if (!title || !description || !price) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(price) || price <= 0) {
      setError("Please enter a valid positive price.");
      return;
    }

    setError(""); // Clear the error if the form is valid

    // Call the API to add the product
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        price: Number(price),
        image: imageUrl, // Send the image URL if provided
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added:", data);
        navigate("/prodects"); // Redirect to the products list after success
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to add the product. Please try again.");
      });
  };

  return (
    <>
      <h1>Add Product</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="prodectTitle" className="form-label">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product title"
            type="text"
            className="form-control"
            id="prodectTitle"
            aria-describedby="product title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prodectdescription" className="form-label">
            Description
          </label>
          <input
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Product description"
            type="text"
            className="form-control"
            id="prodectdescription"
            aria-describedby="product description"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prodectPrice" className="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Product price"
            type="number"
            className="form-control"
            id="prodectPrice"
            aria-describedby="product price"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="prodectImageUrl" className="form-label">
            Image URL
          </label>
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Product image URL"
            type="text"
            className="form-control"
            id="prodectImageUrl"
            aria-describedby="product image"
          />
        </div>

        {imageUrl && (
          <div className="mb-3">
            <img
              src={imageUrl}
              alt="Product"
              style={{ width: "200px", height: "auto" }}
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Addprodect;
