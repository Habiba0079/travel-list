import { useState } from "react";
import Logo from "./Logo";
import PackList from "./PackList";
import Form from "./Form";
import Stats from "./Stats";

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
  function handleClear() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirm) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackList
        items={items}
        onDelete={handleDeleteItem}
        toggle={handleToggleItem}
        clear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
