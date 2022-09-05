import { NextPage } from "next";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import Grid from "../../components/Box/Grid";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { Text } from "../../components/Text";
import colors from "../../constants/colors";
const StyledInput = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  color: #ced3e0;
  border-bottom: 1px solid #ced3e0;
`;
const TestItem = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  color: ${colors.active};
  &:hover {
    border: 1px solid ${colors.active};
  }
`;
const Test: NextPage = () => {
  return (
    <>
      <div
        style={{
          height: "810px",
          width: "100%",
          backgroundColor: "#D9d9d9",
          marginBottom: "80px",
        }}
      ></div>
      <Container
        gap="120px"
        style={{
          marginBottom: "80px",
        }}
      >
        <Flex
          flexDirection="column"
          style={{
            width: "50%",
          }}
        >
          <Text
            bold
            fontSize="48px"
            lineHeight="58px"
            color={colors.h1}
            style={{
              marginBottom: "48px",
            }}
          >
            Đăng ký thi thử Ielts miễn phí
          </Text>
          <Flex
            flexDirection="column"
            gap="16px"
            style={{
              width: "100%",
            }}
          >
            <Text bold fontSize="20px" color={colors.sub}>
              Đăng ký thi thử IELTS miễn phí cùng giám khảo The Real IELTS
            </Text>
            <Text color={colors.regular}>
              Bài thi thiết kế chuẩn theo British Coucil
            </Text>
            <Text color={colors.regular}>
              Hệ thống tính thời gian và cảnh báo giờ cho thí sinh
            </Text>

            <Text color={colors.regular}>
              Giám khảo chấm thi có trình độ IELTS 8.0+, Kinh nghiệm dạy IELTS 3
              năm trở lên
            </Text>

            <Text color={colors.regular}>Trả kết quả trong vòng 24h</Text>

            <Text color={colors.regular}>
              Chữa bài chi tiết 1-1 với giáo viên TRI
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gap="32px"
          style={{
            width: "50%",
          }}
        >
          <Text
            bold
            fontSize="24px"
            lineHeight="32px"
            color={colors.h1}
            center
            style={{
              marginBottom: "16px",
            }}
          >
            ĐĂNG KÝ THI THỬ NGAY
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
          <StyledInput
            type="email"
            id="Email"
            name="Email"
            placeholder="Email"
          />
          <StyledInput
            type="text"
            id="Time"
            name="Time"
            placeholder="Khung giờ test"
          />
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
      <Container flexDirection="column">
        <Text
          bold
          fontSize="48px"
          lineHeight="58px"
          color={colors.h1}
          style={{
            marginBottom: "32px",
          }}
        >
          Làm bài thi Online
        </Text>
        <Grid gap="30px" columns="2" style={{
            marginBottom: "100px"
        }}>
          <TestItem>Bài thi 1</TestItem>
          <TestItem>Bài thi 2</TestItem>

          <TestItem>Bài thi 3</TestItem>
          <TestItem>Bài thi 4</TestItem>
        </Grid>
      </Container>
    </>
  );
};
export default Test;
