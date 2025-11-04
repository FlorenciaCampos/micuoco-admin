import { useEffect } from "react";
import useProduct from "../hooks/useProduct.jsx";

export default function ProductsCrud() {
  const { products, loading, fetchProducts } = useProduct();

  // Llamamos a la API cuando se monta el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Gestión de productos</h1>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <>
          {products.length === 0 ? (
            <p>No hay productos cargados</p>
          ) : (
            <ul>
              {products.map((p) => (
                <li key={p._id || p.id}>
                  {p.nombre || p.name} — ${p.precio}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}

  