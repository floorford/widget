import React, { useState } from "react";

import { dropdownOptions } from "../options";
import Dropdown from "./Dropdown";

const DropdownContainer = () => {
  const [selected, setSelected] = useState(dropdownOptions[0]);

  return (
    <Dropdown
      selected={selected}
      onSelectedChange={setSelected}
      options={dropdownOptions}
      label={"Select a Colour"}
      resultText={"The text is"}
    />
  );
};

export default DropdownContainer;
