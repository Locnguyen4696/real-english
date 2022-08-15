import React from "react";
import styled from "styled-components";

interface IFlexProps {
    children: React.ReactNode;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around";
    alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    gap?: string;
}

const Flex = styled.div<IFlexProps>`
    display: flex;
    ${({ flexDirection }) =>
        flexDirection && `flex-direction: ${flexDirection}`};
    ${({ justifyContent }) =>
        justifyContent && `justify-content: ${justifyContent}`};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
    ${({ gap }) => gap && `gap: ${gap}`};
`;


export default Flex;