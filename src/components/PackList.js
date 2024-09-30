import { useState } from "react";
import Item from ".//Item";

function PackList({ items, onDelete, toggle, clear }) {
  const [sortBy, setSortBy] = useState("input");

  let sorted = [];
  if (sortBy === "input") sorted = items;
  else if (sortBy === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item item={item} onDelete={onDelete} toggle={toggle} key={item.id} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input order</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>

        <button onClick={clear}>Clear list</button>
      </div>
    </div>
  );
}

export default PackList;
