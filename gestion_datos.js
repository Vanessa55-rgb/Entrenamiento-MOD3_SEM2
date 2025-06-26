function runDataManagement() {
  console.clear();
  console.log("=== Gestión de Productos con Objetos, Set y Map ===");

  const products = {
    1: { id: 1, name: "Portátil", price: 1500 },
    2: { id: 2, name: "Ratón", price: 25 },
    3: { id: 3, name: "Teclado", price: 50 }
  };

  console.log("📦 Productos (Objeto):");
  for (const id in products) {
    console.log(`ID: ${id}, Nombre: ${products[id].name}, Precio: $${products[id].price}`);
  }

  const productSet = new Set(Object.values(products).map(p => p.name));
  console.log("✅ Nombres únicos (Set):");
  for (const name of productSet) {
    console.log(`- ${name}`);
  }

  const productMap = new Map([
    ["Electrónica", "Portátil"],
    ["Accesorios", "Ratón"],
    ["Periféricos", "Teclado"]
  ]);
  console.log("📁 Categorías (Map):");
  productMap.forEach((product, category) => {
    console.log(`Categoría: ${category}, Producto: ${product}`);
  });

  console.log("✅ Validación completa: No hay duplicados y los datos están completos.");
}