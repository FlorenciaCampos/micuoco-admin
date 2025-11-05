import { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import { Link } from "react-router-dom";

export default function ProductsCrud() {
  const {
    products,
    loading,
    fetchProducts,
    deleteProduct,
  } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="admin-wrapper">
      <h1>Gestión de productos</h1>

      {/* ✅ Ahora usamos Link en lugar de botón */}
      <Link to="/productos/nuevo" className="admin-btn">
        ➕ Agregar producto
      </Link>

      <hr />

      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos cargados</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p._id}>
              {p.name} — ${p.price}

              <Link
                to={`/productos/editar/${p._id}`}
                className="admin-btn"
              >
                Editar
              </Link>

              <button
                className="admin-btn-delete"
                onClick={() => deleteProduct(p._id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
