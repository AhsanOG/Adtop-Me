//your code is going to go here. for now

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const app = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<app />, document.getElementById("root"));
