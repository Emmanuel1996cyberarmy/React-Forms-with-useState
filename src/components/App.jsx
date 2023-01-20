import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  const [color, setColor] = useState(false);
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeading("Hello" + " " + name);

    event.preventDefault();
  }
  function darkBgColor() {
    setColor(true);
  }
  function whBgColor() {
    setColor(false);
  }

  return (
    <div className="container">
      <h1> {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: color ? "black" : "white" }}
          onMouseOver={darkBgColor}
          onMouseOut={whBgColor}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
