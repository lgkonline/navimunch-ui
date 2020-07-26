import React from "react";
import { ListItem } from "./ListItem";
import { render, screen } from "@testing-library/react";

test("Render ListItem with fake data", () => {
    render(<ListItem
        label="My item entry!"
        mode="edit"
    />);

    const liElement = screen.getByText("My item entry!");
    expect(liElement).toBeInTheDocument();
});

test("Show delete icon when in edit mode", () => {
    render(<ListItem
        label="My item entry!"
        mode="edit"
    />);

    const iconElement = screen.getByTestId("delete-icon");
    expect(iconElement).toBeInTheDocument();
});

test("Show check icon when in shopping mode", () => {
    render(<ListItem
        label="My item entry!"
        mode="shopping"
    />);

    const iconElement = screen.getByTestId("uncheck-icon");
    expect(iconElement).toBeInTheDocument();
});

test("Change checkbox when clicking on it", () => {
    render(<ListItem
        label="My item entry!"
        mode="shopping"
    />);

    const uncheckIconElement = screen.getByTestId("uncheck-icon");
    expect(uncheckIconElement).toBeInTheDocument();

    const btnElement = screen.getByTestId("check-btn");

    btnElement.click();

    const checkIconElement = screen.getByTestId("check-icon");
    expect(checkIconElement).toBeInTheDocument();
});