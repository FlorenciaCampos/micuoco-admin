import { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import { Link } from "react-router-dom";

export default function ProductsCrud() {
  const { products, loading, fetchProducts, deleteProduct } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className="admin-wrapper">
      <h1>Gestión de productos</h1>

      <Link to="/productos/nuevo" className="admin-btn">
        ➕ Agregar producto
      </Link>

      <hr />

      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos cargados</p>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p._id}>
              <img
                src={`http://localhost:3000/uploads/products/${p.image}`}
                alt={p.name}
                className="product-img"
              />

              <h3>{p.name}</h3>
              <p className="price">${p.price}</p>

              <div className="product-actions">
                <Link to={`/productos/editar/${p._id}`} className="admin-btn">
                  Editar
                </Link>

                <button
                  className="admin-btn-delete"
                  onClick={() => deleteProduct(p._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
