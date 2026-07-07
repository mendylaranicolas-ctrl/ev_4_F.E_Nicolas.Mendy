import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [itemToEdit, setItemToEdit] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      setItems(items.map(item => item.id === itemToEdit.id ? { ...item, ...value } : item));
      setItemToEdit(null);
    } else {
      setItems([...items, { id: Date.now(), ...value, completed: false }]);
    }
  };

  const deleteItem = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  const toggleComplete = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteAllItems = () => {
    if (items.length === 0) return; 
    if (window.confirm("¿Estás seguro de que quieres borrar TODOS los elementos? Esta acción no se puede deshacer.")) {
      setItems([]);
    }
  };

  const filteredItems = items.filter(item => 
    item.value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App tarjeta-central">
      <h1 className="titulo-principal">CRUD con LocalStorage</h1>
      
      <p className="contador">Total: {items.length}</p>

      <input 
        type="text" 
        className="input-texto buscador" 
        placeholder="Buscar elemento..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Form 
        addOrUpdateItem={addOrUpdateItem} 
        itemToEdit={itemToEdit} 
      />
      
      <List 
        items={filteredItems} 
        deleteItem={deleteItem} 
        editItem={editItem} 
        toggleComplete={toggleComplete}
      />

      {items.length > 0 && (
        <button className="btn btn-eliminar-todo" onClick={deleteAllItems}>
          Borrar todos los elementos
        </button>
      )}
    </div>
  );
}

export default App;