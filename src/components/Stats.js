function Stats({ items }) {
  const numItems = items.length;
  if (!numItems) {
    return (
      <footer className="stats">
        <p>Start add some items to your packing list 🚀</p>
      </footer>
    );
  }

  const packedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        You have packed <span style={{ color: "#0f4c89" }}>{numItems} </span>
        items in your list, you've packed
        <span style={{ color: "#0f4c89" }}> {packedItems} </span>
        of them 💼
        <span style={{ color: "#0f4c89" }}>
          {` (${
            percentage === 100
              ? "you got everything! Ready to go ✈"
              : percentage + "%"
          })`}
        </span>
      </em>
    </footer>
  );
}

export default Stats;
