import React, { useState } from 'react';

const Inventario = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Producto A', cantidad: 10 },
        { id: 2, nombre: 'Producto B', cantidad: 20 },
    ]);

    const handleAgregarProducto = () => {
        const nuevoProducto = { id: productos.length + 1, nombre: `Producto ${String.fromCharCode(65 + productos.length)}`, cantidad: 0 };
        setProductos([...productos, nuevoProducto]);
    };

    const handleActualizarCantidad = (id, cantidad) => {
        setProductos(productos.map(p => p.id === id ? { ...p, cantidad } : p));
    };

    return (
        <div className="container mt-4">
            <h2>Gestión de Inventario</h2>
            <button className="btn btn-success my-3" onClick={handleAgregarProducto}>Agregar Producto</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>{producto.nombre}</td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={producto.cantidad}
                                    onChange={(e) => handleActualizarCantidad(producto.id, parseInt(e.target.value))}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventario;
