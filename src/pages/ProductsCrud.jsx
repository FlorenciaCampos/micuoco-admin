import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";
import ProductForm from "../components/ProductsForm";
import { Link } from "react-router-dom";


export default function ProductsCrud() {
  const {
    products,
    loading,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  } = useProduct();

  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Gestión de productos</h1>
     
<Link to="/productos/nuevo">
  <button onClick={() => setEditingProduct(null)}>➕ Agregar producto</button>
</Link>


     
      <ProductForm
        initialData={editingProduct}
        onSubmit={(data) => {
          if (editingProduct) {
            updateProduct(editingProduct._id, data); 
          } else {
            createProduct(data); 
          }

          setEditingProduct(null); 
        }}
      />

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
              <button onClick={() => setEditingProduct(p)}>Editar</button>
              <button onClick={() => deleteProduct(p._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
