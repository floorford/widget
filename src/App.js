import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend javascript library",
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library amongst engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
      <Search items={items} />
    </div>
  );
};

export default App;
