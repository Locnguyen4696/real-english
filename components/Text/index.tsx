import styled from "styled-components";

interface IText {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  pointer?: boolean;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
  center?: boolean;
}
const getFontSize = ({ fontSize, small }: IText) => {
  return small ? "14px" : fontSize || "16px";
};
export const Text = styled.p<IText>`
  ${({ color }) => color && `color: ${color}`};
  font-size: ${getFontSize};
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.6")};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform}`};
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap; overflow: hidden; text-overflow: ellipsis`};
  ${({ pointer }) => pointer && "cursor: pointer"};
  ${({ center }) => center && "text-align: center"};
`;
