import "./App.css";

import products from "./product";

import Product from "./components/Product/Product";
import FormProduct from "./components/FormProduct/FormProduct";
import { useState } from "react";

console.log(products);

function App() {
  const [product, setProducts] = useState(products);
  const [sum, setSum] = useState(0);

  console.log(product);

  function handelAddProduct(product) {
    setProducts((products) => [...products, product]);
    setSum(console.log("ddd"));
  }
  //  setSum((item) =>
  //    item.reduce(
  //      (acc, curr) => acc + curr.product.price * curr.product.price,
  //      0
  //    )
  //  );

  function handelDeleteProduct(id) {
    setProducts((products) => products.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Product products={product} onDeleteProduct={handelDeleteProduct} />

        <FormProduct onHandelAdd={handelAddProduct} />
        <p>{sum}</p>
      </div>
    </div>
  );
}

export default App;
