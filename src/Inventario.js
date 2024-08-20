import React, { useState } from 'react';

const Inventario = () => {
    const [productos, setProductos] = useState([
        { id: 1, nombre: 'Producto A', cantidad: 10 },
        { id: 2, nombre: 'Producto B', cantidad: 20 },
    ]);

    const [nombreProducto, setNombreProducto] = useState('');
    const [cantidadProducto, setCantidadProducto] = useState('');

    const handleAgregarProducto = () => {
        if (nombreProducto && cantidadProducto) {
            const nuevoProducto = {
                id: productos.length + 1,
                nombre: nombreProducto,
                cantidad: parseInt(cantidadProducto),
            };
            setProductos([...productos, nuevoProducto]);
            setNombreProducto('');
            setCantidadProducto('');
        } else {
            alert('Por favor, completa todos los campos.');
        }
    };

    const handleActualizarProducto = (id, nombre, cantidad) => {
        setProductos(
            productos.map((producto) =>
                producto.id === id ? { ...producto, nombre, cantidad } : producto
            )
        );
    };

    const handleEliminarProducto = (id) => {
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2>Gestión de Inventario</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre del Producto"
                    value={nombreProducto}
                    onChange={(e) => setNombreProducto(e.target.value)}
                />
                <input
                    type="number"
                    className="form-control mt-2"
                    placeholder="Cantidad"
                    value={cantidadProducto}
                    onChange={(e) => setCantidadProducto(e.target.value)}
                />
                <button className="btn btn-success mt-2" onClick={handleAgregarProducto}>
                    Agregar Producto
                </button>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr key={producto.id}>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={producto.nombre}
                                    onChange={(e) =>
                                        handleActualizarProducto(producto.id, e.target.value, producto.cantidad)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={producto.cantidad}
                                    onChange={(e) =>
                                        handleActualizarProducto(producto.id, producto.nombre, parseInt(e.target.value))
                                    }
                                />
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleEliminarProducto(producto.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Inventario;
