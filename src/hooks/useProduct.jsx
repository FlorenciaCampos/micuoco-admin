import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Obtener productos desde el backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/product/getProducts");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Crear producto (envía FormData con imagen)
  const createProduct = async (productData) => {
    try {
      await fetch("http://localhost:3000/api/product/create", {
        method: "POST",
        body: productData, // 👈 FormData (NO JSON.stringify ni headers)
      });

      fetchProducts(); // refresca lista luego de crear
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  // ✅ Editar producto (envía FormData con imagen opcional)
  const updateProduct = async (id, updatedData) => {
    try {
      setLoading(true);

      await fetch(`http://localhost:3000/api/product/update/${id}`, {
        method: "PUT",
        body: updatedData, // 👈 FormData también (puede incluir imagen o no)
      });

      fetchProducts(); // refresca lista
    } catch (error) {
      console.error("Error al actualizar producto:", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Eliminar un producto por ID
  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/product/delete/${id}`, {
        method: "DELETE",
      });

      fetchProducts(); // vuelve a cargar la lista sin el eliminado
    } catch (error) {
      console.error("❌ Error al eliminar producto:", error);
    }
  };

  // Exportamos todas las funciones necesarias al componente React
  return {
    products,
    loading,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
