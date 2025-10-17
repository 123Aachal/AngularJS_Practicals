import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);
  const [newItem, setNewItem] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Advanced Dynamic Site</h1>

      <input
        type="text"
        value={newItem}
        placeholder="New Item"
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => {
        if(newItem) { setItems([...items, newItem]); setNewItem(""); }
      }}>Add</button>

      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => setItems(items.filter((_, idx) => idx !== i))}>Remove</button>
          </li>
        ))}
      </ul>

      {items.length === 0 && <p>No items!</p>}
    </div>
  );
}


// Run Instructions

// Create React app:

// npx create-react-app advanced-site
// cd advanced-site


// Replace src/App.js with the above code.

// Run the app:

// npm start


// Open http://localhost:3000