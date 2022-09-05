import { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Banner from "../../../assets/images/courses/banner_1.png";
import Banner2 from "../../../assets/images/courses/banner_2.png";
import Banner3 from "../../../assets/images/courses/banner_3.png";
import Banner4 from "../../../assets/images/courses/banner_4.png";
import Banner5 from "../../../assets/images/courses/banner_5.png";
import Banner6 from "../../../assets/images/courses/banner_6.png";
import Blob1 from "../../../assets/images/courses/blob_1.png";
import Courses1 from "../../../assets/images/courses/courses_1.png";
import Quote from "../../../assets/images/home/quote.png";
import Teacher1 from "../../../assets/images/home/teacher_1.png";
import ListIcon from "../../../assets/icons/list-icon-2.png";
import IconGetFile from "../../../assets/icons/get-file.png";

import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import { Text } from "../../../components/Text";
import colors from "../../../constants/colors";
import Grid from "../../../components/Box/Grid";
import Slider from "react-slick";
import Accordion from "../../../components/Accordion";

const StyledBanner = styled.div`
  background: url(${Banner2.src}) no-repeat 55% 35%,
    url(${Banner.src}) no-repeat 75% center,
    url(${Blob1.src}) no-repeat left bottom;
  height: 100vh;
`;
const StyledTitle = styled.div`
  position: relative;
  padding: 12px 16px;
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
const StyledInput = styled.input`
  width: 100%;
  padding: 16px 0;
  border: none;
  color: #ced3e0;
  border-bottom: 1px solid #ced3e0;
`;

const IeltsStarlight: NextPage = () => {
  const AccordionData = [
    {
      title: "Bao nhiêu tuổi thì có thể bắt đầu học IELTS?",
      content:
        "Chương trình IELTS Starlight cho phép học sinh từ 12 tuổi có thể học IELTS sớm với cam kết đạt đầu ra bằng văn bản.",
    },
    {
      title: "Có ngoại khóa hay chương trình ngoài giờ không?",
      content:
        "Với mục tiêu đảm bảo 100% học viên đạt đầu ra, The Real IELTS có chương trình gia sư 1-1 với trợ giảng IELTS 7.0 cho học viên yếu. 100% học viên được tham gia MIỄN PHÍ các workshop, event do Cộng đồng The Real IELTS tổ chức.",
    },
    {
      title: "Mất gốc ko biết gì có học được không?",
      content:
        "Chương trình học tại The Real IELTS thiết kế toàn bộ lộ trình từ 0-7.5+, hỗ trợ học cùng gia sư để đạt cam kết",
    },
    {
      title: "Có cam kết đầu ra không?",
      content:
        "The Real IELTS cam kết đầu ra bằng văn bản, hợp đồng rõ ràng đầy đủ ngay từ khi bắt đầu đăng ký. Quyền lợi cam kết đầu ra, không đạt học lại miễn phí và nhận bổ trợ liên tục đến khi đạt mục tiêu cam kết.",
    },
    {
      title: "Có giáo viên nước ngoài không?",
      content:
        "Giáo viên nước ngoài tham gia vào quá trình giảng dạy kỹ năng nghe - nói của học viên và kiểm định chất lượng đầu ra học viên",
    },
    {
      title: "Khóa học online hay offline?",
      content: "The Real IELTS có hình thức học online và offline cho học viên",
    },
  ];

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
              lineHeight="1.2"
              style={{
                background: colors.primary,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Modest Package
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
            Phổ cập IELTS cho người Việt
          </Text>
          <Text
            fontSize="20px"
            color={colors.sub}
            style={{
              maxWidth: "60%",
              marginBottom: "48px",
            }}
          >
            Chương trình thiết kế cho người Việt từ 0 đến 5.0 IELTS, xóa bỏ sự
            sợ hãi với việc học một ngôn ngữ mới, giúp tự tin học viên tự tin
            hơn trong cuộc sống.
          </Text>
          <Text color={colors.sub} fontSize="20px">
            Đầu vào:{" "}
            <span
              style={{
                color: colors.active,
              }}
            >
              0
            </span>
            <br />
            Đầu ra:{" "}
            <span
              style={{
                color: colors.active,
              }}
            >
              5.0 IELTS
            </span>
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
          <Flex
            flexDirection="column"
            style={{
              maxWidth: "50%",
            }}
          >
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

      <Container
        flexDirection="column"
        style={{
          marginBottom: "195px",
        }}
      >
        <Flex gap="30px">
          <Image src={Teacher1} alt="Image 1" />
          <Flex
            flexDirection="column"
            justifyContent="center"
            gap="48px"
            style={{
              width: "60%",
            }}
          >
            <div>
              <Image src={Quote} alt="Quote" />
            </div>
            <Text color={colors.regular}>
              Với phương châm Học thật - Thi thật - Điểm thật, chúng tôi cam kết
              sát cánh cùng học viên tới khi đạt được mục tiêu trình độ và điểm
              số đã đề ra.
            </Text>
            <Text bold fontSize="20px" color={colors.sub}>
              Phan Quynh Giang - Founder The Real Ielts
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Container flexDirection="column">
        <Text center bold color={colors.h1} fontSize="48px">
          Cam kết học viên
        </Text>
        <Flex>
          <Image src={Banner6} alt="IELTS Starlight"></Image>
        </Flex>
      </Container>
      <Text color={colors.h1} fontSize="48px" bold center>
        Giảng viên
      </Text>
      <Container
        flexDirection="column"
        style={{
          marginBottom: "64px",
        }}
      >
        <div>
          <Slider>
            <div>
              <Grid columns="3" gap="30px">
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </div>
            <div>
              <Grid columns="3" gap="30px">
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </div>
            <div>
              <Grid columns="3" gap="30px">
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </div>
            <div>
              <Grid columns="3" gap="30px">
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </div>
            <div>
              <Grid columns="3" gap="30px">
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column">
                  <div
                    style={{
                      background: "#d9d9d9",
                      width: "100%",
                      height: "350px",
                    }}
                  ></div>
                  <Flex
                    flexDirection="column"
                    gap="16px"
                    style={{
                      padding: "16px",
                    }}
                  >
                    <Text bold fontSize="20px" color={colors.sub}>
                      Vũ Thị Thảo Uyên
                    </Text>
                    <Text color={colors.regular}>
                      IELTS 8.0 Overall <br />
                      Kinh nghiệm 4 năm giảng dạy
                    </Text>
                  </Flex>
                </Flex>
              </Grid>
            </div>
          </Slider>
        </div>
      </Container>
      <Button
        variant="secondary"
        endIcon={<Image src={IconGetFile} alt="Download" />}
        style={{
          margin: "0 auto",
          marginBottom: "120px",
        }}
      >
        <Text color={colors.tertiary} bold>
          PDF Catalogue
        </Text>
      </Button>

      <Container
        gap="90px"
        style={{
          marginBottom: "120px",
        }}
      >
        <div
          style={{
            background: "#D9D9D9",
            height: "500px",
            flex: "1",
          }}
        ></div>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="48px"
        >
          <Text
            bold
            fontSize="24px"
            textTransform="uppercase"
            color={colors.h1}
            center
          >
            ĐĂNG KÝ TƯ VẤN VÀ NHẬN QUÀ
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
        <Text color={colors.h1} fontSize="48px" bold>
          Các câu hỏi thường gặp
        </Text>
        {AccordionData.map((item, i) => (
          <Accordion
            key={i}
            title={item.title}
            content={item.content}
          ></Accordion>
        ))}
      </Container>
    </>
  );
};

export default IeltsStarlight;
