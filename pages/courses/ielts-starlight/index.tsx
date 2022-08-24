import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { text } from "stream/consumers";
import styled from "styled-components";
import Banner from "../../../assets/images/courses/banner_1.png";
import Banner2 from "../../../assets/images/courses/banner_2.png";
import Banner3 from "../../../assets/images/courses/banner_3.png";
import Banner4 from "../../../assets/images/courses/banner_4.png";
import Banner5 from "../../../assets/images/courses/banner_5.png";

import Blob1 from "../../../assets/images/courses/blob_1.png";
import Courses1 from "../../../assets/images/courses/courses_1.png";
import ListIcon from "../../../assets/icons/list-icon-2.png";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { Text } from "../../../components/Text";
import colors from "../../../constants/colors";
const StyledBanner = styled.div`
  background: url(${Banner2.src}) no-repeat 55% 35%,
    url(${Banner.src}) no-repeat 75% center,
    url(${Blob1.src}) no-repeat left bottom;
  height: 100vh;
`;
const StyledTitle = styled.div`
  position: relative;
  padding: 16px;
  border: 1px solid ${colors.active};
  width: fit-content;
  margin-bottom: 15px;
  & > div {
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${colors.active};
  }
`;
const StyledListItem = styled.div`
  position: relative;
  padding-left: 26px;
  margin-bottom: 24px;
  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    width: 16px;
    height: 16px;
    background: url(${ListIcon.src}) no-repeat left top;
  }
`;
const IeltsStarlight: NextPage = () => {
  return (
    <>
      <StyledBanner>
        <Container
          flexDirection="column"
          justifyContent="center"
          style={{
            height: "100vh",
          }}
        >
          <StyledTitle>
            <div
              style={{
                top: "-4px",
                left: "-4px",
              }}
            ></div>
            <div
              style={{
                top: "-4px",
                right: "-4px",
              }}
            ></div>
            <div
              style={{
                bottom: "-4px",
                left: "-4px",
              }}
            ></div>
            <div
              style={{
                bottom: "-4px",
                right: "-4px",
              }}
            ></div>

            <Text
              bold
              fontSize="48px"
              style={{
                background: colors.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IELTS STARLIGHT
            </Text>
          </StyledTitle>
          <Text
            bold
            color={colors.h1}
            fontSize="48px"
            style={{
              marginBottom: "48px",
            }}
          >
            Bước chuẩn bị để tỏa sáng
          </Text>
          <Text
            fontSize="20px"
            color={colors.sub}
            style={{
              maxWidth: "60%",
              marginBottom: "48px",
            }}
          >
            Chương trình Tiếng Anh học thuật đầu tiên cho độ tuổi từ 12 giúp con
            phát triển tư duy ngôn ngữ, cầm chắc chứng chỉ IELTS, tự tin thực
            hiện giấc mơ trường quốc tế, trường chuyên và du học.{" "}
          </Text>
          <Button variant="primary">
            <Text color={colors.tertiary} bold fontSize="24px">
              Đăng ký
            </Text>
          </Button>
        </Container>
      </StyledBanner>
      <Container
        style={{
          marginBottom: "120px",
        }}
      >
        <Flex
          alignItems="center"
          style={{
            width: "50%",
          }}
        >
          <Image src={Courses1} alt="The Real English"></Image>
        </Flex>
        <Flex
          flexDirection="column"
          style={{
            width: "50%",
          }}
        >
          <Text
            bold
            fontSize="48px"
            color={colors.h1}
            style={{
              marginBottom: "16px",
            }}
          >
            HỌC IELTS TỪ ĐỘ TUỔI 12 NÊN HAY KHÔNG?
          </Text>
          <Text
            color={colors.sub}
            fontSize="20px"
            style={{
              marginBottom: "48px",
            }}
          >
            “Hãy chuẩn bị cho chọn điều kiện tốt nhất, IELTS là tấm vé để con
            tỏa sáng trên hành trình của chính mình”
          </Text>
          <StyledListItem>
            <Text color={colors.regular}>
              Tham gia xét tuyển vào các trường quốc tế, trường chuyên THPT
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Cơ hội tuyển thẳng Đại học top đầu
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>Đón cơ hội săn học bổng, du học</Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>Tăng điểm tiếng Anh</Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Tiếp xúc tài liệu nước ngoài nhờ IELTS
            </Text>
          </StyledListItem>
        </Flex>
      </Container>
      <Container flexDirection="column">
        <Text center bold color={colors.h1} fontSize="48px">
          CHƯƠNG TRÌNH IELTS STARLIGHT THIẾT KẾ DÀNH RIÊNG CHO HỌC SINH TỪ 12
          TUỔI
        </Text>
        <Flex>
          <Image src={Banner3} alt="IELTS Starlight"></Image>
        </Flex>
        <div
          style={{
            width: "100%",
            height: "500px",
            background: "#D9D9D9",
            marginBottom: "64px",
          }}
        ></div>
        <Flex
          justifyContent="center"
          gap="24px"
          style={{
            marginBottom: "90px",
          }}
        >
          <Button variant="tertiary">
            <Text color={colors.secondary}>Nhận tư vấn</Text>
          </Button>
          <Button variant="secondary">
            <Text color={colors.tertiary}>Nhận tư vấn</Text>
          </Button>
        </Flex>
        <Text
          bold
          color={colors.h1}
          fontSize="48px"
          style={{
            marginBottom: "60px",
          }}
        >
          Lộ trình học
        </Text>
        <Flex
          style={{
            marginBottom: "120px",
          }}
        >
          <Image src={Banner4} alt="IELTS Starlight"></Image>
        </Flex>

        <Flex>
          <Flex flexDirection="column" style={{
            maxWidth: "50%",
          }}>
            <Text
              bold
              color={colors.h1}
              fontSize="48px"
              style={{
                marginBottom: "60px",
              }}
            >
              THE REAL IELTS có gì?
            </Text>
            <StyledListItem>
              <Text color={colors.regular}>
                Mô hình lớp học 5in1: Cộng đồng TRI - Cố vấn học tập - Giáo viên
                8.0 - Trợ giảng 7.0 - Tester
              </Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>
                Quy mô lớp học nhỏ 8-10 học viên - cá nhân hóa từng học viên
              </Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>
                Tối ưu về thời gian: Với 120 phút phần đào tạo kỹ năng và luyện
                tập với tỉ lệ 1-1.
              </Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>
                Dạy thật chất, điểm cao ngất với lượng kiến thức cô đọng gấp 2
                lần thông thường
              </Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>Phương pháp LCLT ưu việt</Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>Lộ trình độc quyền, tinh gọn</Text>
            </StyledListItem>
            <StyledListItem>
              <Text color={colors.regular}>Cộng đồng 1 triệu thành viên</Text>
            </StyledListItem>
          </Flex>
          <Flex justifyContent="flex-end">
            <Image src={Banner5} alt="IELTS Starlight"></Image>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default IeltsStarlight;
