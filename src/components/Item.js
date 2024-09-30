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
export default Item;
