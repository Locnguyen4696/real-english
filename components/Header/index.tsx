import React from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import Image from "next/image";
import Container from "../Container";
import Flex from "../Box/Flex";
import Link from "next/link";
import colors from "../../constants/colors";
const Wrapper = styled(Container)`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  color: ${colors.text};

  a {
    text-decoration: none;
    color: inherit;
    &:hover,
    &:active {
      color: ${colors.active};
    }
  }
`;

const Nav = styled(Flex)``;

export default function Header() {
  return (
    <Wrapper>
      <Image src={Logo} alt="logo" />
      <Nav gap="32px">
        <Link href="#">Trang chủ</Link>
        <Link href="#">Giới thiệu</Link>
        <Link href="#">Khoá học</Link>
        <Link href="#">Ôn luyện Ielts</Link>
        <Link href="#">Tin tức</Link>
        <Link href="#">Liên hệ</Link>
      </Nav>
    </Wrapper>
  );
}
