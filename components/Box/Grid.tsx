import React from "react";
import styled from "styled-components";

interface IGridProps {
    columns?: string;
    rows?: string;
    gap?: string;

}

const Grid = styled.div<IGridProps>`
    display: grid;
    ${({ columns }) => columns && `grid-template-columns: repeat(${columns}, 1fr)`};
    ${({ rows }) => rows && `grid-template-rows: repeat(${rows}, 1fr)`};
    ${({ gap }) => gap && `gap: ${gap}`};
`;


export default Grid;