import React from "react";
import { render, screen } from "@testing-library/react";
import { ListPage } from "./ListPage";

test("renders ListPage placeholder", () => {
    render(<ListPage />);
    const textElement = screen.getByText(/Loading/i);
    expect(textElement).toBeInTheDocument();
});