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

  // Retornamos los datos y la función para usarlos en el componente
  return { products, loading, fetchProducts };
}
