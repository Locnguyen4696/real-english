import React from "react";
import styled from "styled-components";

interface IHeader {
    children: React.ReactNode;
}

export default function Header({ children }: IHeader) {
    return (
        <div>
            <h1>Header</h1>
            {children}
        </div>
    )
}