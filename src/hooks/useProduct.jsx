import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:3000/api/product";

  // ✅ Obtener todos los productos
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/getProducts`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("❌ Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Obtener un producto por ID (para precargar el formulario de edición)
  const getProductById = async (id) => {
    try {
      const res = await fetch(`${API_URL}/getProducts/${id}`);
      return await res.json();
    } catch (error) {
      console.error("❌ Error al obtener producto por ID:", error);
    }
  };

  // ✅ Crear producto (envía FormData)
  const createProduct = async (productData) => {
    try {
      await fetch(`${API_URL}/create`, {
        method: "POST",
        body: productData, // FormData
      });

      fetchProducts(); // refrescar lista luego de crear
    } catch (error) {
      console.error("❌ Error al crear producto:", error);
    }
  };

  // ✅ Editar producto
  const updateProduct = async (id, updatedData) => {
    try {
      setLoading(true);

      await fetch(`${API_URL}/update/${id}`, {
        method: "PUT",
        body: updatedData, // FormData
      });

      fetchProducts(); // refrescar lista
    } catch (error) {
      console.error("❌ Error al actualizar producto:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Eliminar producto
  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      });

      fetchProducts(); // refrescar lista
    } catch (error) {
      console.error("❌ Error al eliminar producto:", error);
    }
  };

  // ✅ Exportar funciones disponibles
  return {
    products,
    loading,
    fetchProducts,
    getProductById,   // 👈 AHORA SÍ ESTÁ EXPORTADA
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
