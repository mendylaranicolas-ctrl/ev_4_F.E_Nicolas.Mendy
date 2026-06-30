import React, { useState, useEffect } from "react";

function Form({ addOrUpdateItem, itemToEdit }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (itemToEdit) {
            setInputValue(itemToEdit.value);
        } else {
            setInputValue("");
        }
    }, [itemToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addOrUpdateItem({ value: inputValue.trim() });
            setInputValue("");
        }
    };

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input
                className="input-texto"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingresa un elemento..."
            />
            <button className="btn btn-destacado" type="submit">
                {itemToEdit ? "Actualizar" : "Agregar"}
            </button>
        </form>
    );
}

export default Form;