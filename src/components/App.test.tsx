import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

// test("full app rendering/navigating", () => {
//     const history = createMemoryHistory();
//     const { container, getByText } = render(
//         <Router history={history}>
//             <App />
//         </Router>
//     );
//     // verify page content for expected route
//     // often you"d use a data-testid or role query, but this is also possible
//     expect(container.innerHTML).toMatch("You are home");

//     fireEvent.click(getByText(/about/i));

//     // check that the content changed to the new page
//     expect(container.innerHTML).toMatch("You are on the about page");
// });

test("landing on a bad page shows 404 page", () => {
    const history = createMemoryHistory();
    history.push("/some/bad/route");
    const { getByRole } = render(
        <Router history={history}>
            <App />
        </Router>
    );
    expect(getByRole("heading")).toHaveTextContent("404 - Not found");
});