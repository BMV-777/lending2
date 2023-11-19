import ProductList from "../ProductList/ProductList";

// import css from "./Product.module.css";

const Product = ({ products }) => {
  return (
    <ul className="itemList">
      <h3>Product:</h3>
      {products.map((product) => (
        <ProductList product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default Product;
