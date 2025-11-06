// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductsCrud from "./pages/ProductsCrud.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import EditProduct from "./pages/EditProduct.jsx";   // ✅ IMPORTANTE

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // ✅ Middleware de protección de rutas
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* ✅ LOGIN */}
      <Route
        path="/login"
        element={<Login onLoginSuccess={(newToken) => setToken(newToken)} />}
      />

      {/* ✅ DASHBOARD */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* ✅ LISTA DE PRODUCTOS */}
      <Route
        path="/productos"
        element={
          <ProtectedRoute>
            <ProductsCrud />
          </ProtectedRoute>
        }
      />

      {/* ✅ CREAR PRODUCTO */}
      <Route
        path="/productos/nuevo"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      {/* ✅ EDITAR PRODUCTO */}
      <Route
        path="/productos/editar/:id"
        element={
          <ProtectedRoute>
            <EditProduct />     {/* <---- AQUÍ ESTABA EL ERROR */}
          </ProtectedRoute>
        }
      />

      {/* ✅ SI NO EXISTE LA RUTA */}
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
}

export default App;
