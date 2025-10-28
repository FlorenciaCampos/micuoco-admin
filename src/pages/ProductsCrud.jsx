export default function ProductsCrud() {
    return (
      <main style={{ textAlign: "center", marginTop: "60px" }}>
        <h1>Gestión de productos</h1>
        <p>Acá podrás crear, editar y eliminar productos de Mi Cuoco 🧁</p>
  
        <section style={{ marginTop: "30px" }}>
          <button style={{ padding: "8px 16px" }}>+ Agregar producto</button>
  
          <div style={{ marginTop: "40px" }}>
            <h3>Listado de productos</h3>
            <p>(Aquí se mostrarán los productos del backend)</p>
          </div>
        </section>
      </main>
    );
  }
  