function About() {
  return (
    <div className="container my-5 p-4 bg-light rounded shadow">
      <h1 className="text-center text-primary">Welcome to Our Shop!</h1>
      <p className="text-center text-muted mb-4">
        Discover a wide range of items crafted just for you. Our collection
        features everything from trendy fashion pieces to must-have gadgets.
      </p>
      <h2 className="text-center text-secondary">Why Shop With Us?</h2>
      <ul className="list-unstyled">
        <li className="bg-success text-white p-3 rounded mb-2">
          Quality Products: We ensure that every item meets our high standards.
        </li>
        <li className="bg-success text-white p-3 rounded mb-2">
          Great Prices: Enjoy competitive pricing and special offers.
        </li>
        <li className="bg-success text-white p-3 rounded mb-2">
          Customer Satisfaction: Your happiness is our priority.
        </li>
        <li className="bg-success text-white p-3 rounded mb-2">
          Fast Shipping: Get your items delivered quickly and reliably.
        </li>
      </ul>
      <p className="text-center text-muted">
        Join our community of satisfied shoppers and explore our latest
        arrivals!
      </p>
    </div>
  );
}

export default About;
