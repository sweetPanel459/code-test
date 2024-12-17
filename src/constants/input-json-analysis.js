export const templateJson = {
  Id_transaccion: null,
  Fecha: null,
  Categoria: null,
  Producto: null,
  Region: null,
  Cantidad: null,
  Precio_unitario: null,
};

export const inputJson = [
  {
    Id_transaccion: 1,
    Fecha: "2024-01-15",
    Categoria: "Electrónica",
    Producto: "Teléfono",
    Region: "Norte",
    Cantidad: 3,
    Precio_unitario: 300.0,
  },
  {
    Id_transaccion: 2,
    Fecha: "2024-01-20",
    Categoria: "Electrónica",
    Producto: "Laptop",
    Region: "Sur",
    Cantidad: 1,
    Precio_unitario: 800.0,
  },
  {
    Id_transaccion: 3,
    Fecha: "2024-02-10",
    Categoria: "Muebles",
    Producto: "Silla",
    Region: "Norte",
    Cantidad: 5,
    Precio_unitario: 50.0,
  },
  {
    Id_transaccion: 4,
    Fecha: "2024-02-15",
    Categoria: "Muebles",
    Producto: "Mesa",
    Region: "Este",
    Cantidad: 2,
    Precio_unitario: 150.0,
  },
  {
    Id_transaccion: 5,
    Fecha: "2024-03-01",
    Categoria: "Electrónica",
    Producto: "Teléfono",
    Region: "Norte",
    Cantidad: -1,
    Precio_unitario: 300.0,
  }, // Erróneo
  {
    Id_transaccion: 6,
    Fecha: "2024-03-10",
    Categoria: "Muebles",
    Producto: "Silla",
    Region: "Sur",
    Cantidad: 0,
    Precio_unitario: 0.0,
  }, // Erróneo
];
