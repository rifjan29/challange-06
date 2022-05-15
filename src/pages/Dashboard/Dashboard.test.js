import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

it("Should be display text Welcome Admin", () => {
    const initialState = { dataLogin: null };
    const mockConfigStore = configureStore();
    const mockStore  = mockConfigStore(initialState);

    render(
        <Provider store={mockStore}>
            <Dashboard />
        </Provider>
    );
    
    const titlePage = screen.getByText("Welcome Admin");
    expect(titlePage).toBeInTheDocument();
});
