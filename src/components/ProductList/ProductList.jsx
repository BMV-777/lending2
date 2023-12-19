const ProductList = ({ product, onDeleteProduct }) => {
  return (
    <>
      <li className="list-button">
        {product.name} quantity: {product.quantity} price:{product.price}$
        <button onClick={() => onDeleteProduct(product.id)}>❌</button>
      </li>
    </>
  );
};

export default ProductList;
