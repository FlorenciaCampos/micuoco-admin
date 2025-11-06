import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductsCrud from "./pages/ProductsCrud.jsx";
import AddProduct from "./pages/AddProduct.jsx"; // mismo formulario para crear y editar

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // Middleware de protección de rutas
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

      {/* ✅ EDITAR PRODUCTO - <---- ESTA TE FALTABA */}
      <Route
        path="/productos/editar/:id"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      {/* ✅ SI NO EXISTE LA RUTA */}
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
}

export default App;
