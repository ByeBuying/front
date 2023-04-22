import { render, screen } from '@testing-library/react';
import Layout from '../view/pages/Layout';
import { Provider } from 'react-redux';
import store from '../model/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';

let persistor;

beforeAll(() => {
    persistor = persistStore(store);
})

describe("Children components rendering test", () => {
    test("Renders Header component inside Layout component", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Layout />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        );

        const headerComponent = screen.getByTestId("header-component");
        expect(headerComponent).toBeInTheDocument();
    });

    test("Renders Footer component inside Layout component", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Layout />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        );

        const footerComponent = screen.getByTestId("footer-component");
        expect(footerComponent).toBeInTheDocument();
    });

    test("MessageToast should display Layout component", () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Layout />
                    </PersistGate>
                </Provider>
            </BrowserRouter>
        );

        const messageToast = screen.getByTestId("message-toast");
        expect(messageToast).toBeInTheDocument();
    })
})