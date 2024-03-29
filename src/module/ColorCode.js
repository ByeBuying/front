/**
 * History
 ** 2023-03-25: 임주형 - 최초생성
 * 설명
 ** 색상 코드를 반환하는 함수 제공
 */

const MemberGrade = {
    LV1: "LV1",
    LV2: "LV2",
    LV3: "LV3",
    LV4: "LV4",
    LV5: "LV5"
}
Object.freeze(MemberGrade);

export const getMemberGradeColorCode = (memberGrade) => {
    switch (memberGrade) {
        case MemberGrade.LV1:
            return "#C89850";
        case MemberGrade.LV2:
            return "#888888";
        case MemberGrade.LV3:
            return "#EBB700";
        case MemberGrade.LV4:
            return "#2FEED7";
        case MemberGrade.LV5:
            return "#FF0000";
        default:
            return "#000000";
    }
}