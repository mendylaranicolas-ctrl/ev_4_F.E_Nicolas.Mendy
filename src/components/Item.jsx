import React from "react";

function Item({ item, deleteItem, editItem }) {
    return (
        <li className="item-fila">
            <span className="item-texto">{item.value}</span>
            <div className="item-botones">
                <button className="btn btn-editar" onClick={() => editItem(item)}>Editar</button>
                <button className="btn btn-eliminar" onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;