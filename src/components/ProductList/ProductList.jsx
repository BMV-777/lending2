const ProductList = ({ product }) => {
  return (
    <>
      <li>
        {/* <p>{product.title}</p> */}
        {product.name}: {product.price}$
      </li>
    </>
  );
};

export default ProductList;
