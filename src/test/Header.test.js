const { render, screen } = require("@testing-library/react");

describe("Button display test", () => {
    function MyPageButton() {
        return (
            <div>
                <p data-testid="button-text">마이페이지</p>
            </div>
        );
    };

    function LoginButton() {
        return (
            <div>
                <p data-testid="button-text">로그인</p>
            </div>
        )
    };

    test("If the myInformation data is not null then should be displayed MyPage Button", () => {
        const mock = {
            data: {
                accountId: 0,
            }
        }

        const useSelector = jest.fn().mockReturnValueOnce(mock);
        const myInformation = useSelector();
        if (myInformation.data !== null) render(<MyPageButton />);
        else render(<LoginButton />);

        const element = screen.getByTestId("button-text");
        expect(element).toHaveTextContent("마이페이지");
    });

    test("If the myInformation is null then should be diplyed Login Button", () => {
        const mock = {
            data: null,
        }

        const useSelector = jest.fn().mockReturnValueOnce(mock);
        const myInformation = useSelector();
        if (myInformation.data !== null) render(<MyPageButton />);
        else render(<LoginButton />);

        const element = screen.getByTestId("button-text");
        expect(element).toHaveTextContent("로그인");
    });
});
