import styled from "styled-components";

interface IText {
    color?: string;
    fontSize?: string;
    bold?: boolean;
    small?: boolean;
    ellipsis?: boolean;
    textTransform?: "uppercase" | "lowercase" | "capitalize";
}
const getFontSize = ({ fontSize, small }: IText) => {
    return small ? "14px" : fontSize || "16px";
};
export const Text = styled.div<IText>`
    ${({ color }) => color && `color: ${color}`};
    font-size: ${getFontSize};
    font-weight: ${({ bold }) => (bold ? "600" : "400")};
    line-height: 1.5;
    ${({ textTransform }) =>
        textTransform && `text-transform: ${textTransform}`};
    ${({ ellipsis }) =>
        ellipsis &&
        `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`};
`;