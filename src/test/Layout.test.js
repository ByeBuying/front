import { render, screen } from '@testing-library/react';
import Layout from '../view/pages/Layout';

beforeAll(() => {
    
})

describe("Layout component initial rendering test", () => {
    test("Renders Header component inside Layout component", () => {
        render(<Layout />);

        const headerComponent = screen.getByTestId("header-component");
        expect(headerComponent).toBeInTheDocument();
    });
})