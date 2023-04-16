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

describe("Layout component initial rendering test", () => {
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
})