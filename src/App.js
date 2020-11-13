import React from "react";

import { accordionItems } from "./options";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropdownContainer from "./components/DropdownContainer";
import Translate from "./components/Translate";

import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={accordionItems} />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/dropdown'>
        <DropdownContainer />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
    </div>
  );
};

export default App;
