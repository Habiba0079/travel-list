import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item 
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackList
        items={items}
        onDelete={handleDeleteItem}
        toggle={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away 🌊</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [id, setID] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    setID((id) => id + 1);
    const newItem = {
      id: id,
      description,
      quantity,
      packed: false,
    };
    onAddItems(newItem);
    //console.log(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackList({ items, onDelete, toggle }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDelete={onDelete} toggle={toggle} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDelete, toggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {`${item.quantity} ${item.description}`}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have packed x items</em>
    </footer>
  );
}

export default App;
