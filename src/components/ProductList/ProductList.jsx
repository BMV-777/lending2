const ProductList = ({ product, onDeleteProduct }) => {
  return (
    <>
      <li className="list-button">
        {/* <p>{product.title}</p> */}
        {product.name}: {product.price}$
        <button onClick={() => onDeleteProduct(product.id)}>❌</button>
      </li>
    </>
  );
};

export default ProductList;
