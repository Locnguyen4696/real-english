import React from "react";
import styled from "styled-components";
import Container from "../Container";
import { Text } from "../Text";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.png";
import Flex from "../Box/Flex";
import colors from "../../constants/colors";
interface IFooterProps {
  children: React.ReactNode;
  withLogo?: boolean;
}

const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const StyledFlex = styled(Flex)`
  height: 80px;
`;
const FooterHeading = ({ children, withLogo }: IFooterProps) => {
  return (
    <StyledFlex justifyContent="space-between" alignItems="center">
      {withLogo && <Image src={Logo} alt="logo" />}
      <Text color={colors.text} bold fontSize="20px">
        {children}
      </Text>
    </StyledFlex>
  );
};
const Column = styled(Flex)`
  max-width: 22%;
`;
export default function Footer() {
  return (
    <Wrapper>
      <Column gap="24px" flexDirection="column">
        <FooterHeading withLogo>VỀ The Real IELTS</FooterHeading>
        <Text color={colors.primary}>
          The Real IELTS - Hệ thống luyện thi IELTS hàng đầu cho thanh thiếu
          niên Việt Nam.
        </Text>
        <Text color={colors.primary}>
          Tại The Real IELTS, với phương châm Học thật - Thi thật - Điểm thật,
          chúng tôi cam kết sát cánh cùng học viên tới khi đạt được mục tiêu
          trình độ và điểm số đã đề ra.
        </Text>
      </Column>
      <Column gap="24px" flexDirection="column">
        <FooterHeading>LIÊN KẾT NHANH</FooterHeading>
        <Link href="#">
          <Text color={colors.text} pointer>
            Về The Real IELTS
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Cộng đồng TRI
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Khóa học
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Test online
          </Text>
        </Link>
      </Column>
      <Column gap="24px" flexDirection="column">
        <FooterHeading>KẾT NỐI</FooterHeading>
        <Link href="#">
          <Text color={colors.text} pointer>
            Facebook
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Youtube
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Instagram
          </Text>
        </Link>
        <Link href="#">
          <Text color={colors.text} pointer>
            Tiktok
          </Text>
        </Link>
      </Column>
      <Column gap="24px" flexDirection="column">
        <FooterHeading> </FooterHeading>
        <Text color={colors.primary}>Hotline: (+84) 384.161.694</Text>
        <Text color={colors.primary}>
          Tầng 2, Tòa Servin Office, Nam Đô Complex, 609 Trương Định, Hoàng Mai,
          Hà Nội
        </Text>
        <Text color={colors.primary}>
          Trung tâm The Real IELTS - Giấy phép đăng ký kinh doanh số:
        </Text>
      </Column>
    </Wrapper>
  );
}
