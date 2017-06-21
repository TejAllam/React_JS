// import ReactDOM from 'react-dom'
// import React from 'react'

const jsContainer = document.getElementById("js");
const reactContainer = document.getElementById("react");

jsContainer.innerHTML = '<div class="demo"> Hello JS <input/> </div>';

ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React"
    ),
    reactContainer
  );