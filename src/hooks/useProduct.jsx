import { useState } from "react";

export default function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Esta función va a traer los productos del backend
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

  // ✅ Crear producto (envía el formulario al backend)
const createProduct = async (productData) => {
    try {
      await fetch("http://localhost:3000/api/product/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData), // enviamos los datos del form
      });
  
      fetchProducts(); // actualiza la lista automáticamente
    } catch (error) {
      console.error("❌ Error al crear producto:", error);
    }
  };

  // ✅ Eliminar un producto por ID
const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/product/delete/${id}`, {
        method: "DELETE",
      });
  
      fetchProducts(); // vuelve a cargar la lista sin el producto eliminado
    } catch (error) {
      console.error("❌ Error al eliminar producto:", error);
    }
  };
  // 🔄 Editar producto existente
const updateProduct = async (id, updatedData) => {
    try {
      setLoading(true);
  
      const response = await fetch(`http://localhost:3000/api/product/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error al actualizar producto");
      }
  
      // Vuelvo a pedir los productos para actualizar visualmente la lista
      fetchProducts();
    } catch (error) {
      console.error("Error al editar producto:", error);
    } finally {
      setLoading(false);
    }
  };
  

  // Retornamos los datos y la función para usarlos en el componente
  return {
    products,
    loading,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    
  };
  
}
