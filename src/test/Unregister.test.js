import { fireEvent, render, screen } from '@testing-library/react';
import AccountsCode from '../model/accounts/code/AccountsCode';
import fetchAccount from '../api/fetch/fetchAccount';
import axios from '../api/fetch/lib/axios';

describe("Session test", () => {
    const requestMock = {
        loginUser: {
            accountId: 0,
            // ... //
        }
    }

    test("If session is connected then should be return SUCCESS code", () => {
        /* arrange */
        const fetchResultMock = {
            code: AccountsCode.SUCCESS, // Session is connected
            data: { // NormalAccountManagementVO
                accountId: 0,
                // ... //
            }
        }
        jest.spyOn(fetchAccount, "myInformation")
            .mockReturnValueOnce(fetchResultMock);

        /* act */
        fetchAccount.myInformation(requestMock);

        /* assert */
        expect(fetchAccount.myInformation).toBeCalledWith({
            "loginUser": {
                "accountId": 0,
            }
        });
        expect(fetchAccount.myInformation).toReturnWith({
            "code": AccountsCode.SUCCESS,
            "data": {
                "accountId": 0,
            }
        });
    });

    test("If session is disconnected then should be return NOT_AUTHORIZED code", () => {
        /* arrange */
        const fetchResultMock = {
            code: AccountsCode.NOT_AUTHORIZED, // Session is disconnected
            data: null
        }
        jest.spyOn(fetchAccount, "myInformation")
            .mockReturnValueOnce(fetchResultMock);
        
        /* act */
        fetchAccount.myInformation(requestMock);

        /* assert */
        expect(fetchAccount.myInformation).toBeCalledWith({
            "loginUser": {
                "accountId": 0,
            }
        });
        expect(fetchAccount.myInformation).toReturnWith({
            "code": AccountsCode.NOT_AUTHORIZED,
            "data": null,
        });
    });
});


describe("Unregister Button click test", () => {
    const updateActivated = async ({ loginUser, activated }) => {
        const fetchResultMock = {
            "code": AccountsCode.SUCCESS,
            "data": {
                // ... //
            }
        }
        // axios mocking
        axios.put =
            jest.spyOn(axios, "put")
                .mockImplementationOnce((url, data) => new Promise(resolve => {
                    resolve(fetchResultMock);
                }));

        return await axios.put("/v1/pub/accounts/update:activated", {
            loginUser,
            activated
        });
    }

    const Button = () => {
        const requestMock = {
            loginUser: {
                accountId: 0,
                // ... //
            },
            "": {
                activated: false
            }
        };

        const handleClick = () => {
            updateActivated(...requestMock).then((response) => {
                expect(response).toEqual({
                    code: AccountsCode.SUCCESS,
                    data: {
                        // ... //
                    }
                });
            });
        }

        return (
            <button
                data-testid="unregister-button"
                onClick={() => handleClick} />
        )
    }

    test("If the unregister button is clicked, the updateActivated API should be called", () => {
        render(<Button />);
        const unregisterButton = screen.getByTestId("unregister-button");
        fireEvent.click(unregisterButton);
    });

});

