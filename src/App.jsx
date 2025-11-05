import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AddProduct from "./pages/AddProduct.jsx";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductsCrud from "./pages/ProductsCrud.jsx";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  // Si el usuario no está logueado, lo mandamos al login
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login onLoginSuccess={(newToken) => setToken(newToken)} />}
      />

      {/* DASHBOARD */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* CRUD DE PRODUCTOS */}
      <Route
        path="/productos"
        element={
          <ProtectedRoute>
            <ProductsCrud />
          </ProtectedRoute>
        }
      />

      <Route
        path="/productos/nuevo"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />

      {/* SI NO EXISTE LA RUTA */}
      <Route path="*" element={<h2>Página no encontrada</h2>} />
    </Routes>
  );
}

export default App;
