import React from "react";
import { render } from "@testing-library/react";
import Signin from "../page/Signin";

test("renders learn react link", () => {
  const { getByText } = render(<Signin />);
});
