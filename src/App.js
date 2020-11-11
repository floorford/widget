import React from "react";

import { accordionItems } from "./options";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropdownContainer from "./components/DropdownContainer";
import Translate from "./components/Translate";

const App = () => {
  return (
    <div>
      <Accordion items={accordionItems} />
      <Search />
      <Translate />
      <DropdownContainer />
    </div>
  );
};

export default App;
