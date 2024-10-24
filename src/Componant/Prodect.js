import { Link } from "react-router-dom";

function Prodect(props) {
  const { prodect, showButton } = props;
  return (
    <div className="card">
      <img src={prodect.images} className="card-img-top" alt={prodect.title} />
      <div className="card-body">
        <h5 className="card-title">id:{prodect.id}</h5>
        <p className="card-text">{prodect.title}</p>
        <p>{prodect.price}$</p>
        {showButton && (
          <Link
            href="#"
            className="btn btn-primary "
            to={`/prodect/${prodect.id}`}
          >
            Detalis
          </Link>
        )}
      </div>
    </div>
  );
}
export default Prodect;
