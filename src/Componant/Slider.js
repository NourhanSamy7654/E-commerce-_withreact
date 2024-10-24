import "./SliderStyle.css";
// import img from "/public/im.jpg";
// import image from "/public/image.jpg";
function Slider(params) {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/premium-photo/3d-image-shopping-cart-with-word-e-express-it_713888-25954.jpg"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/premium-photo/3d-man-with-cart-shopping-concept_441797-7457.jpg"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg"
            className="d-block w-100 height-600"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
