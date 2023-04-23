// 1. Session이 연결되어 있는지 확인.
// --> LoginUser 정보를 가지고 MyInformation API 호출해보기
// 2. 버튼을 눌렀을 때 /api/v1/pub/accounts/update:activated 호출
import { fireEvent, render, screen } from '@testing-library/react';
// import fetchAccount from '../api/fetch/fetchAccount';
import AccountsCode from '../model/accounts/code/AccountsCode';
import fetchAccount from '../api/fetch/fetchAccount';
import Unregister from '../view/components/Unregister';
import axios from '../api/fetch/lib/axios';
import fetchUrl from '../api/fetch/lib/fetchUrl';

test("When fetchMyInformation is called with LoginUser, SUCCESS code and data should be returned", () => {
    const requestMock = {
        loginUser: {
            accountId: 0,
            // ... //
        }
    }

    const fetchResultMock = {
        code: AccountsCode.SUCCESS, // Session is connected
        data: { // NormalAccountManagementVO
            accountId: 0,
            // ... //
        }
    }

    const spy = jest.spyOn(fetchAccount, "myInformation")
        .mockReturnValueOnce(fetchResultMock);

    fetchAccount.myInformation(requestMock);

    expect(spy).toBeCalledWith({
        "loginUser": {
            "accountId": 0,
        }
    });

    expect(spy).toReturnWith({
        "code": AccountsCode.SUCCESS,
        "data": {
            "accountId": 0,
        }
    })
});

test("If the unregister button is pressed, the updateActivated API should be called", () => {
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
    
    render(<Button />);
    const unregisterButton = screen.getByTestId("unregister-button");
    fireEvent.click(unregisterButton);
});
