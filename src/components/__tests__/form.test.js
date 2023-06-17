import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";

describe('Check Email Component', () => {
  it("Should render value in input", () => {
    render(<Footer />);
    const inputElement = screen.getByPlaceholderText("Your Email");
    fireEvent.change(inputElement, { target: { value: "jankowalski60@gmail.com" } });
    expect(inputElement.value).toBe("jankowalski60@gmail.com");
  });
});
