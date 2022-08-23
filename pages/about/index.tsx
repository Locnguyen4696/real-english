import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Text } from "../../components/Text";
import Banner from "../../assets/images/about/banner.png";
import Banner2 from "../../assets/images/about/banner_2.png";

import styled from "styled-components";
import colors from "../../constants/colors";
import Flex from "../../components/Box/Flex";
import Button from "../../components/Button";
import About1 from "../../assets/images/about/about_1.png";
import About2 from "../../assets/images/about/about_2.png";
import About3 from "../../assets/images/about/about_3.png";
import Partner1 from "../../assets/images/home/partner_1.png";
import Partner2 from "../../assets/images/home/partner_2.png";
import Partner3 from "../../assets/images/home/partner_3.png";
import ListIcon from "../../assets/icons/list-icon.png";
import IconGetFile from "../../assets/icons/get-file.png";
import IconArrowRight from "../../assets/icons/arrow-right.png";
import Grid from "../../components/Box/Grid";
const StyledBanner = styled.div`
  height: 80vh;
  background: url(${Banner.src}) no-repeat center center;
  background-size: 100vw;
`;
const StyledBanner2 = styled(StyledBanner)`
  background: url(${Banner2.src}) no-repeat center center;
  margin-bottom: 30px;
`;
const StyledListItem = styled.div`
  position: relative;
  padding-left: 40px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: url(${ListIcon.src}) no-repeat left top;
  }
`;
const NewsItem = styled(Flex)`
  border: 1px solid #ced3e0;
  border-radius: 16px;
  background: #fff;
  padding: 24px;
`;
const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Real English</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <StyledBanner></StyledBanner>
      <Container flexDirection="column">
        <Text
          bold
          color={colors.h1}
          fontSize="48px"
          style={{
            margin: "48px 0",
          }}
        >
          The Real IELTS - Hệ thống luyện thi IELTS <br /> hàng đầu cho thanh
          thiếu niên Việt Nam
        </Text>
        <Text
          fontSize="20px"
          color={colors.sub}
          style={{
            marginBottom: "48px",
          }}
        >
          Thông qua hoạt động đào tạo và kết nối cộng đồng, The Real IELTS đồng
          hành trên hành trình tìm động lực chinh phục chứng chỉ IELTS và phát
          triển bản thân của hàng nghìn học viên. The Real IELTS tạo nên niềm
          yêu thích tiếng Anh, giúp việc học trở thành niềm đam mê thông qua
          việc vận dụng các phương pháp học kết hợp tâm lý học và công nghệ vào
          việc tiếp thu kiến thức.
        </Text>
        <Text
          fontSize="20px"
          color={colors.sub}
          style={{
            marginBottom: "64px",
          }}
        >
          Được đánh giá là đơn vị đào tạo luyện thi IELTS uy tín, hệ thống The
          Real IELTS được thành lập bởi đội ngũ giáo viên có năng lực, chuyên
          môn tốt và kinh nghiệm thực tiễn trong lĩnh vực luyện thi IELTS.
        </Text>
        <Flex justifyContent="center" gap="24px">
          <Button variant="secondary">
            <Text color={colors.tertiary}>Khoá học</Text>
          </Button>
          <Button variant="tertiary">
            <Text color={colors.secondary}>Đăng ký học thử</Text>
          </Button>
        </Flex>
        <Flex
          style={{
            marginBottom: "130px",
          }}
        >
          <Flex
            alignItems="center"
            style={{
              width: "50%",
            }}
          >
            <Image src={About1} alt="" />
          </Flex>
          <Flex
            flexDirection="column"
            gap="24px"
            justifyContent="center"
            style={{
              width: "50%",
            }}
          >
            <Text fontSize="48px" bold color={colors.h1}>
              Tầm nhìn
            </Text>
            <Text color={colors.regular}>
              Bằng sự tận tâm và chiến lược phát triển bền vững, The Real IELTS
              nỗ lực phấn đấu trở thành hệ thống giáo dục chuyên luyện thi IELTS
              hàng đầu cho hơn 90 triệu người có nhu cầu học tiếng Anh tại Việt
              Nam.
            </Text>
          </Flex>
        </Flex>
        <Flex
          style={{
            marginBottom: "130px",
          }}
        >
          <Flex
            flexDirection="column"
            gap="24px"
            justifyContent="center"
            style={{
              width: "50%",
            }}
          >
            <Text fontSize="48px" bold color={colors.h1}>
              Sứ mệnh
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Cộng đồng
            </Text>
            <Text color={colors.regular}>
              Giảm độ tuổi tiếp cận IELTS của thanh thiếu niên, phổ cập tiếng
              Anh trong cộng đồng thanh thiếu niên Việt Nam
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Xã hội
            </Text>
            <Text color={colors.regular}>
              Nâng chuẩn Tiếng Anh trung bình của người lao động Việt Nam lên
              7.0 IELTS – Học thật để làm thật.
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Nội bộ
            </Text>
            <Text color={colors.regular}>
              The Real IELTS là cộng đồng mà trong đó các thành viên cùng nhau
              học thật, làm thật, cùng nhau phát triển, cùng nhau thành công.
              Together we will suceed.
            </Text>
          </Flex>
          <Flex
            justifyContent="flex-end"
            alignItems="center"
            style={{
              width: "50%",
            }}
          >
            <Image src={About2} alt="" />
          </Flex>
        </Flex>
        <Flex
          style={{
            marginBottom: "130px",
          }}
        >
          <Flex
            alignItems="center"
            style={{
              width: "50%",
            }}
          >
            <Image src={About3} alt="" />
          </Flex>
          <Flex
            flexDirection="column"
            gap="24px"
            justifyContent="center"
            style={{
              width: "50%",
            }}
          >
            <Text fontSize="48px" bold color={colors.h1}>
              Giá trị cốt lõi
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Real people make miracles
            </Text>
            <Text color={colors.regular}>
              Sự nỗ lực không ngừng của đội ngũ The Real IELTS sẽ tạo nên những
              giá trị đích thực cho khách hàng, từ đó đem lại giá trị cho bản
              thân và cộng đồng
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Real Connection (Kết nối)
            </Text>
            <Text color={colors.regular}>
              Kết nối tạo giá trị. Networking cộng đồng The Real IELTS không chỉ
              cung cấp kiến thức, phương pháp học tập hiệu quả mà còn là nguồn
              động lực tích cực tạo giá trị thực cho khách hàng
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Renewal (Đổi mới)
            </Text>
            <Text color={colors.regular}>
              Sáng tạo tích cực hướng đến sự đổi mới là tôn chỉ làm việc của The
              Real IELTS
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Responsibility (Trách nhiệm)
            </Text>
            <Text color={colors.regular}>
              Không lý do, không đổ lỗi, nhận trách nhiệm và hướng đến giải pháp
            </Text>
            <Text fontSize="20px" bold color={colors.sub}>
              Reputation (Uy tín)
            </Text>
            <Text color={colors.regular}>
              Uy tín cá nhân là uy tín của tập thể. Chúng tôi lựa chọn làm việc
              với sự tận tậm, minh bạch để xây dựng điều này. Uy tín là thương
              hiệu The Real IELTS
            </Text>
          </Flex>
        </Flex>
      </Container>
      <Text
        center
        bold
        color={colors.h1}
        fontSize="48px"
        style={{
          marginBottom: "64px",
        }}
      >
        Những sự thật tại The Real IELTS
      </Text>
      <Container
        gap="60px"
        style={{
          marginBottom: "96 px",
        }}
      >
        <Flex
          flexDirection="column"
          gap="24px"
          style={{
            flex: "1 1 30%",
          }}
        >
          <Text center bold color={colors.sub}>
            Học thật - Thi thật
          </Text>
          <StyledListItem>
            <Text color={colors.regular}>
              Quy trình học nghiêm ngặt đảm bảo đầu ra
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Kiểm tra đánh giá chất lượng trước, trong và sau buổi học
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Gia sư 1-1 với giáo viên IELTS 7.0+ cho học viên không đạt đầu ra
            </Text>
          </StyledListItem>
        </Flex>
        <Flex
          flexDirection="column"
          gap="24px"
          style={{
            flex: "1 1 30%",
          }}
        >
          <Text center bold color={colors.sub}>
            Điểm thật - Chứng chỉ thật
          </Text>
          <StyledListItem>
            <Text color={colors.regular}>
              Chứng chỉ giảng viên và trợ giảng công khai với học viên
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Điểm quá trình đánh giá đúng với trình độ học viên, nói không với
              bệnh thành tích
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Khóa học luyện thi cấp tốc và hỗ trợ đăng ký thi trọn gói tại IDP
              hoặc BC
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Học viên đạt được chứng chỉ được ghi danh trên bảng vàng TRI và
              nhận quà
            </Text>
          </StyledListItem>
        </Flex>
        <Flex
          flexDirection="column"
          gap="24px"
          style={{
            flex: "1 1 30%",
          }}
        >
          <Text center bold color={colors.sub}>
            Cam kết thật
          </Text>
          <StyledListItem>
            <Text color={colors.regular}>Cam kết học viên bằng văn bản</Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Học lại miễn phí đến khi đạt đầu ra
            </Text>
          </StyledListItem>
          <StyledListItem>
            <Text color={colors.regular}>
              Hoàn tiền 100% nếu không đúng cam kết
            </Text>
          </StyledListItem>
        </Flex>
      </Container>
      <Container
        gap="92px"
        alignItems="center"
        style={{
          marginBottom: "64px",
        }}
      >
        <div
          style={{
            width: "750px",
            height: "420px",
            background: "#D9D9D9",
          }}
        ></div>
        <Flex flexDirection="column" gap="48px">
          <Text bold fontSize="48px" color={colors.h1}>
            Phương pháp đào tạo{" "}
            <span style={{ color: colors.active }}>LCLT</span>
          </Text>
          <Flex flexDirection="column" gap="16px">
            <Text bold fontSize="20px" color={colors.sub}>
              Learner Centered
            </Text>
            <Text color={colors.regular}>Lấy người học làm trọng tâm</Text>
          </Flex>
          <Flex flexDirection="column" gap="16px">
            <Text bold fontSize="20px" color={colors.sub}>
              Linguistic Thinking
            </Text>
            <Text color={colors.regular}>Xây dựng tư duy Ngôn ngữ</Text>
          </Flex>
        </Flex>
      </Container>
      <Container
        justifyContent="center"
        gap="24px"
        style={{ marginBottom: "120px" }}
      >
        <Button
          variant="secondary"
          endIcon={<Image src={IconGetFile} alt="Download" />}
        >
          <Text color={colors.tertiary} bold>
            File phương pháp học
          </Text>
        </Button>
        <Button
          variant="tertiary"
          endIcon={<Image src={IconArrowRight} alt="Show more" />}
        >
          <Text color={colors.secondary} bold>
            Tìm hiểu thêm
          </Text>
        </Button>
      </Container>
      <Text
        center
        bold
        color={colors.h1}
        fontSize="48px"
        style={{
          marginBottom: "64px",
        }}
      >
        Cộng đồng TRI
      </Text>
      <StyledBanner2></StyledBanner2>
      <Container
        style={{
          marginBottom: "120px",
        }}
      >
        <Grid
          columns="2"
          gap="32px 50px"
          style={{
            width: "100%",
          }}
        >
          <Text
            color={colors.active}
            fontSize="20px"
            bold
            center
            style={{
              padding: "18px 0",
            }}
          >
            Tiktok TRI
          </Text>
          <Text
            color={colors.active}
            fontSize="20px"
            bold
            center
            style={{
              padding: "18px 0",
            }}
          >
            Cộng đồng chuyên gia TRI
          </Text>
          <Text
            color={colors.active}
            fontSize="20px"
            bold
            center
            style={{
              padding: "18px 0",
            }}
          >
            Fanpage TRI
          </Text>
          <Text
            color={colors.active}
            fontSize="20px"
            bold
            center
            style={{
              padding: "18px 0",
            }}
          >
            Cộng đồng hỗ trợ học tập TRI
          </Text>
        </Grid>
      </Container>
      <Text
        color={colors.h1}
        center
        fontSize="44px"
        bold
        style={{
          marginBottom: "64px",
        }}
      >
        Đối tác
      </Text>
      <Container
        justifyContent="space-between"
        style={{
          marginBottom: "120px",
        }}
      >
        <div>
          <Image src={Partner1} alt="" />
        </div>
        <div>
          <Image src={Partner2} alt="" />
        </div>
        <div>
          <Image src={Partner3} alt="" />
        </div>
      </Container>
      <Text
        bold
        color={colors.h1}
        center
        fontSize="48px"
        style={{
          marginBottom: "64px",
        }}
      >
        Báo chí nói gì về chúng tôi?
      </Text>
      <Container
        style={{
          marginBottom: "120px",
        }}
      >
        <Grid
          columns="2"
          gap="30px"
          style={{
            width: "100%",
          }}
        >
          <NewsItem justifyContent="space-between" alignItems="center">
            <Flex
              flexDirection="column"
              gap="16px"
              style={{
                maxWidth: "50%",
              }}
            >
              <Text color={colors.disable} fontSize="14px">
                23 Septemper 2021
              </Text>
              <Text color="#616161" bold fontSize="20px">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </Flex>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "#E4E4E4",
              }}
            ></div>
          </NewsItem>
          <NewsItem justifyContent="space-between" alignItems="center">
            <Flex
              flexDirection="column"
              gap="16px"
              style={{
                maxWidth: "50%",
              }}
            >
              <Text color={colors.disable} fontSize="14px">
                23 Septemper 2021
              </Text>
              <Text color="#616161" bold fontSize="20px">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </Flex>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "#E4E4E4",
              }}
            ></div>
          </NewsItem>
          <NewsItem justifyContent="space-between" alignItems="center">
            <Flex
              flexDirection="column"
              gap="16px"
              style={{
                maxWidth: "50%",
              }}
            >
              <Text color={colors.disable} fontSize="14px">
                23 Septemper 2021
              </Text>
              <Text color="#616161" bold fontSize="20px">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </Flex>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "#E4E4E4",
              }}
            ></div>
          </NewsItem>
          <NewsItem justifyContent="space-between" alignItems="center">
            <Flex
              flexDirection="column"
              gap="16px"
              style={{
                maxWidth: "50%",
              }}
            >
              <Text color={colors.disable} fontSize="14px">
                23 Septemper 2021
              </Text>
              <Text color="#616161" bold fontSize="20px">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </Flex>
            <div
              style={{
                width: "200px",
                height: "200px",
                background: "#E4E4E4",
              }}
            ></div>
          </NewsItem>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default About;
