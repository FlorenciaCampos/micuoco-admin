// src/pages/EditProduct.jsx

import { Link, useParams } from "react-router-dom";
import ProductForm from "../components/ProductsForm";
import useProduct from "../hooks/useProduct";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const { id } = useParams();                       // ← capturamos el :id de la URL
  const { getProductById, updateProduct } = useProduct();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id);        // ← buscamos el producto en el backend
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  return (
    <main>
      <Link to="/productos">
        <button>⬅ Volver</button>
      </Link>

      <h1>Editar producto</h1>

      {product ? (
        <ProductForm
          initialData={product}                   // ← le pasamos los datos al form
          onSubmit={(data) => updateProduct(id, data)}
        />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
}
