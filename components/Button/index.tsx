import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant: "primary" | "secondary" | "tertiary";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const StyledButton = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 240px;
  padding: 16px 20px;
  width: fit-content;
  background: ${(props) => colors[props.variant]};
  border: ${(props) =>
    props.variant === "primary" ? "none" : `1px solid ${colors.secondary}`};
  border-radius: 16px;
  cursor: pointer;
`;

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  startIcon,
  endIcon,
}: IButton) {
  return (
    <StyledButton disabled={disabled} onClick={onClick} variant={variant}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
}
