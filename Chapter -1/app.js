// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React


//  part -1
// const heading = React.createElement(
//     "h1",
//     { },
//     "heading"
//   );

//   // create root using createRoot
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   // passing react element inside root
//   root.render(heading);

// Create nested React Elements
// part 2

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);




  