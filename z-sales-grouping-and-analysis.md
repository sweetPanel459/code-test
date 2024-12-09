# Agrupación y análisis de ventas

## Descripcion

- El objetivo es implementar un algoritmo que procese los datos y genere un informe estructurado.

## Requisitos

**Salida**:

1. _Resumen general_:
   - Total de ingresos generados (suma de cantidad \* precio_unitario).
   - Total de unidades vendidas.
   - Cantidad de transacciones procesadas.
2. _Ventas generadas_:
   - Total de ingresos y unidades vendidas por región, ordenados de mayor a menor ingreso.
   - Región con mayor y menor ingreso.
3. _Ventas por categoria y producto_:
   - Ingresos y unidades vendidas para cada categoría.
   - Producto más vendido (en términos de unidades) dentro de cada categoría.
4. _Estacionalidad mensual_:
   - Ingresos totales generados por mes (ordenados cronológicamente).
   - Mes con mayor ingresos.
5. _Alerta de datos anomalos_:
   - Transacciones donde el precio unitario sea ≤ 0 o la cantidad sea ≤ 0.

## Concideraciones tecnicas

- Los datos pueden incluir hasta 1 millón de transacciones.
- El informe debe ser retornado como un diccionario o estructura JSON en el mismo entorno del algoritmo.
- El algoritmo debe manejar errores en los datos (campos faltantes o mal formateados). Estas transacciones
  deben ser ignoradas y registradas en un log.
- Se busca un tiempo de ejecución razonable (menos de 10 segundos para 1 millón de registros en hardware promedio).

## Ideas para desarrollo (mias)

1. Funcion que se le pasara el array de entrada y que confirme el formato de cada sub objeto.
2. Funcion para el resumen general.
3. Funcion para el ventas generadas.
4. Funcion para el ventas por categoria y producto
5. Funcion para el Estacionalidad mensual
6. Funcion para el alerta de datos anomalos

> Las funciones constructoras de output retornara su parte dada del output

## Formato (ejemplo)

**Input**:

```json
[
  {
    "id_transaccion": 1,
    "fecha": "2024-01-15",
    "categoria": "Electrónica",
    "producto": "Teléfono",
    "region": "Norte",
    "cantidad": 3,
    "precio_unitario": 300.0
  },
  {
    "id_transaccion": 2,
    "fecha": "2024-01-20",
    "categoria": "Electrónica",
    "producto": "Laptop",
    "region": "Sur",
    "cantidad": 1,
    "precio_unitario": 800.0
  },
  {
    "id_transaccion": 3,
    "fecha": "2024-02-10",
    "categoria": "Muebles",
    "producto": "Silla",
    "region": "Norte",
    "cantidad": 5,
    "precio_unitario": 50.0
  },
  {
    "id_transaccion": 4,
    "fecha": "2024-02-15",
    "categoria": "Muebles",
    "producto": "Mesa",
    "region": "Este",
    "cantidad": 2,
    "precio_unitario": 150.0
  },
  {
    "id_transaccion": 5,
    "fecha": "2024-03-01",
    "categoria": "Electrónica",
    "producto": "Teléfono",
    "region": "Norte",
    "cantidad": -1,
    "precio_unitario": 300.0
  }, // Erróneo
  {
    "id_transaccion": 6,
    "fecha": "2024-03-10",
    "categoria": "Muebles",
    "producto": "Silla",
    "region": "Sur",
    "cantidad": 3,
    "precio_unitario": 0.0
  } // Erróneo
]
```

**Output**

```json
{
  "resumen_general": {
    "total_ingresos": 2150.0,
    "total_unidades_vendidas": 11,
    "total_transacciones_procesadas": 4
  },
  "ventas_por_region": {
    "Norte": { "ingresos": 1050.0, "unidades_vendidas": 8 },
    "Sur": { "ingresos": 800.0, "unidades_vendidas": 1 },
    "Este": { "ingresos": 300.0, "unidades_vendidas": 2 },
    "region_mayor_ingreso": "Norte",
    "region_menor_ingreso": "Este"
  },
  "ventas_por_categoria_y_producto": {
    "Electrónica": {
      "ingresos": 1100.0,
      "unidades_vendidas": 4,
      "producto_mas_vendido": "Teléfono"
    },
    "Muebles": {
      "ingresos": 1050.0,
      "unidades_vendidas": 7,
      "producto_mas_vendido": "Silla"
    }
  },
  "estacionalidad_mensual": {
    "2024-01": { "ingresos": 1100.0, "mes_mayor_ingresos": false },
    "2024-02": { "ingresos": 550.0, "mes_mayor_ingresos": false },
    "2024-03": { "ingresos": 500.0, "mes_mayor_ingresos": false }
  },
  "alertas_datos_anómalos": [
    { "id_transaccion": 5, "detalle": "Cantidad negativa" },
    { "id_transaccion": 6, "detalle": "Precio unitario cero o negativo" }
  ]
}
```
