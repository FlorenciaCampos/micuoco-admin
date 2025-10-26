Mi Cuoco Admin

Pequeño panel de administración en React + Vite para gestionar los productos de la app Mi Cuoco.
Permite loguearse con un usuario existente y realizar un CRUD de productos conectándose al backend desarrollado en Node.js + Express + MongoDB.

Tecnologías usadas

React + Vite
Fetch
React Router DOM
Node.js / Express / MongoDB (Backend propio)
JWT (para autenticación)

Funcionalidades

Login de usuario (con token almacenado en sessionStorage)
CRUD completo de productos
Listar productos
Crear nuevos productos
Eliminar productos
Editar productos
Protección de rutas: solo usuarios logueados pueden acceder al CRUD

Backend relacionado

Este frontend se conecta con la API REST desarrollada en el proyecto:
e-commerce-tiendaBack (Node + Express + MongoDB)

Endpoints principales:
POST /api/user/login
GET /api/product/getProducts
POST /api/product/create
DELETE /api/product/delete/:id