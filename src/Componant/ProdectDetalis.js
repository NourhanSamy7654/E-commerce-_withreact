import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Prodect from "./Prodect";

function ProdectDetalis() {
  const api_url = "https://dummyjson.com/products";
  const [prodect, setProdects] = useState([]);
  const parms = useParams();
  useEffect(() => {
    fetch(`${api_url}/${parms.prodectId}`)
      .then((res) => res.json())
      .then((prodect) => setProdects(prodect));
  }, []);
  return (
    <>
      {/* <h2>
        Hello hear:{prodect.title}
        {parms.prodectId}
      </h2> */}
      <Prodect prodect={prodect} showButton={false} />
    </>
  );
}
export default ProdectDetalis;
