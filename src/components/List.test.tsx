import React from "react";
import { List } from "./List";
import { render, screen } from "@testing-library/react";

test("Render List with fake data", () => {
    render(<List
        title="My test list"
        items={[{ label: "Item 1" }, { label: "Item 2" }]}
        mode="edit"
        toggleMode={() => { }}
    />);

    const liElement = screen.getByText("Item 1");
    expect(liElement).toBeInTheDocument();
});