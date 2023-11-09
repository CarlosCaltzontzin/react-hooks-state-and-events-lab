import React, { useState } from 'react';
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // State variable to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle the dark mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Use the isDarkMode state to conditionally apply the 'dark' or 'light' class
  const appClass = isDarkMode ? 'App dark' : 'App light';

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
