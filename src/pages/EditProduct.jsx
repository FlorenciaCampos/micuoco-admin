// src/pages/EditProduct.jsx
import { Link, useParams } from "react-router-dom";
import ProductForm from "../components/ProductsForm";
import useProduct from "../hooks/useProduct";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const { id } = useParams();
  const { getProductById, updateProduct } = useProduct();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  return (
    <main className="form-page-container">

      <Link to="/productos" className="admin-btn-back">⬅ Volver</Link>

      <h1>Editar producto</h1>

      <div className="form-card">
        {product ? (
          <ProductForm
            initialData={product}
            onSubmit={(data) => updateProduct(id, data)}
          />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </main>
  );
}
