// src/pages/AddProduct.jsx

import { Link } from "react-router-dom";
import ProductForm from "../components/ProductsForm";
import useProduct from "../hooks/useProduct";

export default function AddProduct() {
  const { createProduct } = useProduct();

  return (
    <main className="form-page-container">   {/* ✅ clase para centrar y dar padding */}

      {/* BOTÓN VOLVER */}
      <Link to="/productos" className="admin-btn-back">
        ⬅ Volver
      </Link>

      <h1>Agregar producto</h1>

      {/* CARD del formulario */}
      <div className="form-card">
        <ProductForm
          initialData={null}
          onSubmit={(data) => {
            createProduct(data);
          }}
        />
      </div>
    </main>
  );
}
