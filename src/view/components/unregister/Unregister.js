import React, { useState } from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AccountsCode from '../../../model/accounts/code/AccountsCode';
import MessageDialog from '../modal/MessageDialog';
import DialogType from '../../../model/common/messageDialog/code/DialogType';
import fetchAccount from '../../../api/fetch/fetchAccount';
import { useNavigate } from 'react-router-dom';

function Unregister() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [openMessageDialog, setOpenMessageDialog] = useState(false);
    const [dialog, setDialog] = useState({
        title: "",
        content: "",
        type: "",
        confirm: null,
        cancel: null
    });
    const myInformation = useSelector(state => state.MyInformation);

    const handleChange = (e) => {
        setPassword(e.target.value);
    }

    const requestUnregister = (e) => {
        e.preventDefault();
        fetchAccount.authorityCheck(myInformation.data.email, password)
            .then(response => {
                if (response.data.code === AccountsCode.BAD_CREDENTIALS) {
                    setOpenMessageDialog(true);
                    setDialog({
                        title: "로그인 정보 오류",
                        content: "비밀번호가 틀렸습니다.",
                        type: DialogType.CONFIRM,
                        confirm: () => setOpenMessageDialog(false)
                    });
                }
                else if(response.data.code === AccountsCode.SUCCESS) {
                    setOpenMessageDialog(true);
                    setDialog({
                        title: "회원탈퇴",
                        content: "탈퇴하시겠습니까?",
                        type: DialogType.CONFIRM_AND_CANCEL,
                        confirm: () => {
                            fetchAccount.updateActivated(false);
                            setOpenMessageDialog(false);
                            fetchAccount.logout();
                            navigate("/unregisterComplete");
                        },
                        cancel: () => setOpenMessageDialog(false)
                    });
                }
            }).catch(error => {
                debugger;
            });
    }

    return (
        <Contents data-testid="unregister-component">
            {openMessageDialog && (
                <MessageDialog
                    title={dialog.title}
                    content={dialog.content}
                    type={dialog.type}
                    confirm={dialog.confirm}
                    cancel={dialog.cancel}
                />
            )}
            <h1 className="text-xl font-semibold mb-10">회원 탈퇴</h1>
            <p>회원 탈퇴를 신청하면 30일 이후 계정이 삭제되며, 쿠폰 및 적립금이 모두 소멸됩니다.</p>
            <p className="mb-5">또한, 계정이 삭제되면 복구할 수 없습니다.</p>
            <UserInfoDiv>
                <span className="text-[8px] mr-2">{"●"}</span><span className="w-[180px]">소멸되는 쿠폰 갯수</span>
                <span className="text-xl">{10}</span><span className=" ">개</span>
            </UserInfoDiv>
            <UserInfoDiv>
                <span className="text-[8px] mr-2">{"●"}</span><span className="w-[180px]">소멸되는 쿠폰 적립금</span>
                <span className="text-xl">{13570}</span><span>p</span>
            </UserInfoDiv>
            <p className="mt-10 mb-2">계정 비밀번호를 입력하고 '탈퇴하기'버튼을 누르면 회원 탈퇴가 신청됩니다.</p>
            <FormDiv>
                <input className="w-[30rem] h-10 border rounded-md border-[#D9D9D9] px-3"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    placeholder="현재 비밀번호" />
                <button className="w-[6rem] bg-[#5223CB] border rounded-md"
                    onClick={(e) => requestUnregister(e)}>
                    <p className="text-white">탈퇴하기</p>
                </button>
            </FormDiv>
        </Contents>
    )
}

export default Unregister;

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-radius: 10px;
    border-color: #d9d9d9;
    padding: 50px 50px;
`

const UserInfoDiv = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 10px;
`

const FormDiv = styled.form`
    display: flex;
    gap: 6px;
`