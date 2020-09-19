import React from "react";
import { render } from "@testing-library/react";
import Home from "../page/Home";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
});
