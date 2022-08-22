import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Flex from "../components/Box/Flex";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Text } from "../components/Text";
import BannerImg from "../assets/images/home/banner_1.png";
import Stats1 from "../assets/images/home/stats_1.png";
import Stats2 from "../assets/images/home/stats_2.png";
import Stats3 from "../assets/images/home/stats_3.png";
import Circle1 from "../assets/images/home/circle_1.png";
import Circle2 from "../assets/images/home/circle_2.png";
import Circle3 from "../assets/images/home/circle_3.png";
import Blob1 from "../assets/images/home/blob_1.png";
import Blob2 from "../assets/images/home/blob_2.png";
import Partner1 from "../assets/images/home/partner_1.png";
import Partner2 from "../assets/images/home/partner_2.png";
import Partner3 from "../assets/images/home/partner_3.png";

import Teacher1 from "../assets/images/home/teacher_1.png";
import Quote from "../assets/images/home/quote.png";
import IconCall from "../assets/icons/call-calling.png";
import IconGetFile from "../assets/icons/get-file.png";
import IconArrowRight from "../assets/icons/arrow-right.png";
import { getEvents, getPosts } from "../utils/wordpress";
import Post from "../components/Post";
import colors from "../constants/colors";
import Button from "../components/Button";

import Slider from "react-slick";
import Grid from "../components/Box/Grid";
interface IBanner {
  img?: string | StaticImageData;
}
interface ICourseItem {
  active?: boolean;
}
const StyledBanner = styled.div<IBanner>`
  //@ts-ignore
  background: url(${BannerImg.src}) no-repeat right center,
    url(${Circle3.src}) no-repeat left bottom,
    url(${Circle2.src}) no-repeat 60% 20%, url(${Circle1.src}) no-repeat 95% 90%;

  width: 100%;
  height: 100vh;
`;
const BannerContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  & > div {
    width: 50%;
  }
  & > p {
    width: 50%;
  }
  & > button {
    margin: 54px 0;
  }
`;
const Heading = styled.div`
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  color: ${colors.text};
  margin-bottom: 54px;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 65%;
    height: 90px;
    border: 3px solid #f4a242;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: 15%;
    z-index: -1;
  }
`;
const Stats = styled(Flex)`
  width: 70% !important;
`;
const CourseList = styled.div`
  margin-bottom: 64px;
`;
const CourseItem = styled(Flex)<ICourseItem>`
  width: 240px;
  padding: 16px;
  border-radius: 16px;
  background: #fff;
  border: ${(props) => (props.active ? "1px solid #f4a242" : "1px solid #fff")};
  // flex-shrink: 0;
`;
const NewsItem = styled(Flex)`
  border: 1px solid #ced3e0;
  border-radius: 16px;
  background: #fff;
  padding: 24px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding-bottom: 16px;
  border: none;
  color: #ced3e0;
  border-bottom: 1px solid #ced3e0;
`;
const Home: NextPage = ({ posts }: any) => {
  // console.log(posts);
  // const jsxPosts = posts.map((post: any) => {
  //   const featuredMedia = post["_embedded"]["wp:featuredmedia"][0];
  //   return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  // });
  return (
    <div>
      <Head>
        <title>Real English</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <StyledBanner>
        <BannerContent>
          <Heading>
            The Real IELTS <br />
            IELTS Đích thực
          </Heading>
          <Text color={colors.regular}>
            The Real IELTS ra đời với mục đích xóa tan nỗi sợ tiếng Anh của
            người Việt. Chương trình học IELTS đầu tiên áp dụng từ độ tuổi 12
            vận dụng các phương pháp học kết hợp tâm lý học và công nghệ vào
            việc tiếp thu kiến thức.
          </Text>
          <Text color={colors.sub} fontSize="20px" bold>
            Học thật - Thi thật - Chứng chỉ thật
          </Text>
          <Button variant="primary">
            <Text color={colors.tertiary} bold>
              Đăng ký
            </Text>
          </Button>
          <Stats justifyContent="space-between">
            <Flex flexDirection="column">
              <Text fontSize="20px" bold color={colors.sub}>
                20+
              </Text>
              <Flex>
                <Image src={Stats1} alt="Giáo viên tài năng" />
                <Text color={colors.disable}>Giáo viên tài năng</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="20px" bold color={colors.sub}>
                2000+
              </Text>
              <Flex>
                <Image src={Stats2} alt="Học viên đang theo học" />
                <Text color={colors.disable}>Học viên đang theo học</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="20px" bold color={colors.sub}>
                1000+
              </Text>
              <Flex>
                <Image src={Stats3} alt="Học viên cán đích" />
                <Text color={colors.disable}>Học viên cán đích</Text>
              </Flex>
            </Flex>
          </Stats>
        </BannerContent>
      </StyledBanner>
      <div
        style={{
          background: "#F7F7F8",
          padding: "64px 0",
        }}
      >
        <Container flexDirection="column">
          <Text
            color={colors.text}
            fontSize="48px"
            style={{
              marginBottom: "48px",
            }}
          >
            Khoá học
          </Text>
          <CourseList>
            <Slider slidesToScroll={3} slidesToShow={3} infinite={false}>
              <div>
                <CourseItem
                  active
                  flexDirection="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text bold color={colors.active}>
                    IELTS Starlight
                  </Text>
                  <Text color={colors.text}>IELTS 0 - 7.5+ cho học sinh</Text>
                </CourseItem>
              </div>
              <div>
                <CourseItem
                  flexDirection="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text bold color={colors.text}>
                    Advance Package
                  </Text>
                  <Text color={colors.text}>Combo 0-7.5+</Text>
                </CourseItem>
              </div>
              <div>
                <CourseItem
                  flexDirection="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text bold color={colors.text}>
                    Modest Package
                  </Text>
                  <Text color={colors.text}>Combo 0-5.0+</Text>
                </CourseItem>
              </div>
              <div>
                <CourseItem
                  flexDirection="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text bold color={colors.text}>
                    Fluent Package
                  </Text>
                  <Text color={colors.text}>Combo 0-6.5+</Text>
                </CourseItem>
              </div>
              <div>
                <CourseItem
                  flexDirection="column"
                  alignItems="center"
                  gap="16px"
                >
                  <Text bold color={colors.text}>
                    Private Package
                  </Text>
                  <Text color={colors.text}>Gia sư 1-1</Text>
                </CourseItem>
              </div>
            </Slider>
          </CourseList>
          <Button
            variant="secondary"
            startIcon={<Image src={IconCall} alt="Call" />}
            style={{
              margin: "0 auto",
              marginBottom: "120px",
            }}
          >
            <Text color={colors.tertiary} bold>
              Đăng ký nhận tư vấn ngay
            </Text>
          </Button>
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
          bold
          color={colors.h1}
          center
          fontSize="48px"
          style={{
            marginBottom: "64px",
          }}
        >
          Giảng viên
        </Text>
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
      </div>
      <div
        style={{
          padding: "40px",
          background: `url(${Blob1.src}) no-repeat top right`,
        }}
      >
        <Container flexDirection="column">
          <Text
            bold
            color={colors.h1}
            fontSize="48px"
            style={{
              marginBottom: "64px",
            }}
          >
            Câu chuyện Real IELTS
          </Text>
          <div>
            <Slider>
              <div>
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
                      Trước khi học ielts thì e không biết tới TRI. Em có tìm
                      hiểu 1 số khoá học, sau đó thì biết tới TRI và thấy rất
                      thú vị vs muốn theo học. Bên cạnh đó, e cũng học được cách
                      “lắng nghe” và “phát âm” hiệu quả nữa. Nói chung e cảm
                      thấy khá hứng thú với phương pháp dạy và khóa học. mỗi
                      buổi học online khiến e rất hào hứng, không ràng buộc, khô
                      khan như trên lớp và luôn kích thích sự tò mò của e về nội
                      dung:“hôm nay mình sẽ học gì về văn hoá và ngôn ngữ nước
                      bạn?”
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Tường Vi - THPT Yên Định
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Rào cản lớn nhất của mình đối với việc chinh phục chứng
                      chỉ IELTS là không có động lực học. Thực sự ban đầu mình
                      thấy rất khó với người chuyên ban A như mình. Nhưng đến
                      với TRI, mình không còn cảm thấy nhàm chán nữa vì phương
                      pháp học rất đặc biệt khiến cho việc tiếp thu ngôn ngữ mới
                      trở nên dễ hơn. Bên cạnh đó điểm mình ưng nhất là TRI có
                      cộng đồng người học và các anh chị Tiktoker nổi tiếng
                      thường xuyên chia sẻ về hành trình học và cả cuộc sống nữa
                      khiến mình học được rất nhiều điều.
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Tuấn Anh - Đại học FPT
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Biết đến TRI qua tiktok của chị Hanah Vân Anh. Quá trình
                      học ở đây rất vui và hiểu bài, dù thời gian ngắn nhưng
                      phương pháp dạy của cô khiến em nắm được trọng tâm bài rất
                      tốt. Cô giáo và trợ giảng thì vô cùng nhiệt tình luôn. Cảm
                      ơn TRI đã giúp em đạt tấm bằng IELTS 6.5 sau 6 tháng chăm
                      chỉ cùng nhau.
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Trường An - THPT Phan Bội Châu
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Highly recommend cho bạn nào đang cần bằng gấp như mình
                      thì nên đến TRI nhé. Không có nhiều trung tâm cam kết đầu
                      ra trên 6.5 và TRI là một trong những chỗ khiến mình tin
                      tưởng bởi đội ngũ giảng viên chất lượng. Mình đã chọn TRI
                      để chinh phục target 7.0 trong 3 tháng để kịp nộp hồ sơ
                      xét tuyển THPT 2022 và TRI đã giúp mình vượt kì vọng luôn!
                      Mình đã được tuyển thẳng vào Kinh tế Quốc dân với tấm bằng
                      IELTS 7.5. Cảm ơn TRI rất nhiều!
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Nguyễn Kiên - Đại học Kinh tế Quốc dân
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Mình cảm thấy may mắn thậc sự khi học TRI và gặp được cô
                      Thảo Uyên 🙆🏻. Cô vừa xinh lại còn có phong cách giảng dạy
                      rất đỉnh, rất truyền cảm hứng luôn. Mỗi tội chưa hát cho
                      học sinh nghe bao giờ. Anyway, iu cô và cảm ơn cô nhìu
                      nhìu. 🥰{" "}
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Tiến Quý - THPT Xuân Đỉnh
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Em kém speaking do hay run và không tự tin. Nhờ sự nhiệt
                      tình và kiên nhẫn của cô Uyên, em đã tiến bộ rất nhiều.
                      Không chỉ nhận được kiến thức, em còn cảm thấy như có thêm
                      một người chị, một idol đem lại động lực cho em mỗi ngày.{" "}
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Thu Hà - Đại học Ngoại thương
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Ban đầu em cũng không hiểu sao fanpage của trung tâm lại
                      được yêu mến như thế. Học rồi mới biết từ giáo viên đến
                      trợ giảng đều vô cùng năng lượng, nhiệt tình và trẻ trung.
                      Đi học như đi chơi nhưng luôn luôn trong tinh thần “learn
                      smart play hard”, cả lớp vẫn phải đạt đầu ra mới chịu :D{" "}
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Hoàng Giang - Marketing
                    </Text>
                  </Flex>
                </Flex>
              </div>
              <div>
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
                      Mình không quá chăm nên TRI là 1 lựa chọn tuyệt vời, khóa
                      học có phân chia bài rõ ràng cụ thể, mình sẽ k phải phân
                      vân xem hôm nay học gì. Quan trọng nhất là bên TRI
                      takecare đỉnhhh. K hiểu chỗ nào ở bài giảng thay vì như
                      những chỗ khác mình đã học là sẽ đăng lên nhóm hỏi hay cmt
                      thì bên TRI bạn có thể nhắn trực tiếp cho các chị trợ
                      giảng sẽ đc trả lời ngay.{" "}
                    </Text>
                    <Text bold fontSize="20px" color={colors.sub}>
                      Châu Anh - Đại học Thương mại
                    </Text>
                  </Flex>
                </Flex>
              </div>
            </Slider>
          </div>
        </Container>
      </div>
      <div
        style={{
          padding: "120px 0",
          background: `url(${Blob2.src}) no-repeat left 100px, #FBFBFC`,
        }}
      >
        <Text
          bold
          color={colors.h1}
          center
          fontSize="48px"
          style={{
            marginBottom: "64px",
          }}
        >
          Tự học IELTS với cộng đồng TRI
        </Text>
        <Container
          style={{
            marginBottom: "64px",
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
        <Button
          variant="secondary"
          style={{
            margin: "0 auto",
            marginBottom: "120px",
          }}
        >
          <Text color={colors.tertiary} bold>
            Tham gia cộng đồng T.R.I
          </Text>
        </Button>
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
          color={colors.h1}
          center
          fontSize="48px"
          bold
          style={{
            marginBottom: "64px",
          }}
        >
          Sự kiện hot
        </Text>
        <Container
          alignItems="flex-end"
          style={{
            height: "500px",
            background: "#D9D9D9",
            marginBottom: "120px",
          }}
        >
          <Flex
            flexDirection="column"
            gap="16px"
            style={{
              width: "100%",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(10px)",
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
        </Container>
        <Container gap="90px">
          <div
            style={{
              background: "#D9D9D9",
              height: "500px",
              flex: "1",
            }}
          ></div>
          <Flex flexDirection="column" alignItems="center" justifyContent="center" gap="48px">
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
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
// export async function getStaticProps({ params }: any) {
//   const posts = await getPosts();
//   const events = await getEvents();
//   return {
//     props: {
//       posts,
//       events,
//     },
//     revalidate: 10, // In seconds
//   };
// }
