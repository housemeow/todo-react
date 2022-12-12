import React from "react";
import HelloWorld from "./HelloWorld.js"
import { render, screen } from "@testing-library/react";

describe("HelloWorld.js", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"

    const div = document.createElement("div");
    render(<HelloWorld msg={msg} />, div);
    expect(screen.getByText(msg)).toBeInTheDocument();
  })
})
