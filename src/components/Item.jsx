import React from "react";

function Item({ item, deleteItem, editItem, toggleComplete }) {
    return (
        <li className="item-fila">
            <div className="item-contenido">
                <input 
                    type="checkbox" 
                    className="checkbox-completado"
                    checked={item.completed || false} 
                    onChange={() => toggleComplete(item.id)} 
                />
                <span className={`item-texto ${item.completed ? 'tachado' : ''}`}>
                    {item.value}
                </span>
            </div>
            
            <div className="item-botones">
                <button className="btn btn-editar" onClick={() => editItem(item)}>Editar</button>
                <button className="btn btn-eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;