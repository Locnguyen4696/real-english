import { NextPage } from "next";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { Text } from "../../components/Text";
import colors from "../../constants/colors";

const ContactItem = styled(Flex)`
  p {
    min-width: 40%;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  color: #ced3e0;
  border-bottom: 1px solid #ced3e0;
`;
const Contact: NextPage = () => {
  return (
    <Container
      gap="90px"
      style={{
        margin: "200px auto",
      }}
    >
      <Flex
        flexDirection="column"
        style={{
          width: "40%",
        }}
      >
        <Text
          bold
          fontSize="48px"
          lineHeight="58px"
          color={colors.h1}
          style={{
            minHeight: "120px",
          }}
        >
          Thông tin liên hệ
        </Text>
        <Flex
          flexDirection="column"
          gap="24px"
          style={{
            width: "100%",
          }}
        >
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Hotline
            </Text>
            <Text color={colors.regular}>(+84) 384.161.694</Text>
          </ContactItem>
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Email
            </Text>
            <Text color={colors.regular}>therealielts@gmail.com</Text>
          </ContactItem>
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Địa chỉ
            </Text>
            <Text color={colors.regular}>
              Tầng 2, Tòa Servin Office, Nam Đô Complex, 609 Trương Định, Hoàng
              Mai, Hà Nội
            </Text>
          </ContactItem>
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Facebook
            </Text>
            <Text color={colors.regular}>The Real IELTS</Text>
          </ContactItem>
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Instagram
            </Text>
            <Text color={colors.regular}>english_not_crusty</Text>
          </ContactItem>
          <ContactItem alignItems="center">
            <Text bold fontSize="20px" color={colors.sub}>
              Tiktok
            </Text>
            <Text color={colors.regular}>@thereal.ielts</Text>
          </ContactItem>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        gap="32px"
        style={{
          width: "60%",
        }}
      >
        <Text
          bold
          fontSize="48px"
          lineHeight="58px"
          color={colors.h1}
          center
          style={{
            minHeight: "120px",
          }}
        >
          Đăng ký nhận tư vấn <br />
          và ưu đãi
        </Text>
        <StyledInput
          type="text"
          id="Name"
          name="Name"
          placeholder="Họ và tên"
        />
        <StyledInput
          type="tel"
          id="Tel"
          name="Tel"
          placeholder="Số điện thoại"
        />
        <StyledInput type="email" id="Email" name="Email" placeholder="Email" />
        <StyledInput type="text" id="Notes" name="Notes" placeholder="Để lại lời nhắn cho chúng tôi" /> 
        <Button
          variant="secondary"
          style={{
            margin: "0 auto",
          }}
        >
          <Text color={colors.tertiary} bold>
            Đăng ký
          </Text>
        </Button>
      </Flex>
    </Container>
  );
};
export default Contact;
