import { useParams } from "react-router-dom";
import products from "../dataProduct/ProductData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <img src={product.images[0].url} alt={product.images[0].alt} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
