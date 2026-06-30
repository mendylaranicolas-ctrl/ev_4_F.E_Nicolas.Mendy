import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);

  // Se ejecuta una vez al montar: Recupera los datos guardados en el navegador
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // Se ejecuta cada vez que 'items' cambia: Guarda la lista actualizada en el navegador
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función para agregar o actualizar un elemento
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, ...value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), ...value }]);
    }
  };

  // Función para eliminar
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Función para preparar la edición
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      <Form 
        addOrUpdateItem={addOrUpdateItem} 
        itemToEdit={itemToEdit} 
      />
      <List 
        items={items} 
        deleteItem={deleteItem} 
        editItem={editItem} 
      />
    </div>
  );
}

export default App;