// src/pages/AddProduct.jsx

import { Link } from "react-router-dom";        // 👈 IMPORTANTE
import ProductForm from "../components/ProductsForm";
import useProduct from "../hooks/useProduct";

export default function AddProduct() {
  const { createProduct } = useProduct();

  return (
    <main>

      {/* BOTON VOLVER */}
      <Link to="/productos">
        <button>⬅ Volver</button>
      </Link>

      <h1>Agregar producto</h1>

      <ProductForm
        initialData={null}
        onSubmit={(data) => {
          createProduct(data);
        }}
      />
    </main>
  );
}
