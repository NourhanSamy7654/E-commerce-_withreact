// import "./Contact.css"; // إذا كنت تريد إضافة تنسيقات CSS إضافية

function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Get in Touch</h3>
          <p>
            Feel free to reach out to us via email, phone, or by visiting our
            office.
          </p>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-map-marker-alt me-2"></i> Address: 123 Main
              Street, City, Country
            </li>
            <li>
              <i className="fas fa-envelope me-2"></i> Email: info@example.com
            </li>
            <li>
              <i className="fas fa-phone me-2"></i> Phone: +123 456 7890
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <h3>Follow Us</h3>
          <p>Stay connected with us through social media!</p>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              className="me-3"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://twitter.com" className="me-3" aria-label="Twitter">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="https://instagram.com"
              className="me-3"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="me-3"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
