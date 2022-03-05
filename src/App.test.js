import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test('renders the app', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});