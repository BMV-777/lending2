import "./App.css";

import products from "./product";

import Product from "./components/Product/Product";
import FormProduct from "./components/FormProduct/FormProduct";
import { useState } from "react";
import Stats from "./components/Stats/Stats";

console.log(products);

function App() {
  const [product, setProducts] = useState([]);

  console.log(product);

  function handelAddProduct(product) {
    setProducts((products) => [...products, product]);
  }

  function handelDeleteProduct(id) {
    setProducts((products) => products.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Product products={product} onDeleteProduct={handelDeleteProduct} />

        <FormProduct onHandelAdd={handelAddProduct} />
        <Stats product={product} />
      </div>
    </div>
  );
}

export default App;
