import { NextPage } from "next";
import styled from "styled-components";
import Flex from "../../components/Box/Flex";
import Grid from "../../components/Box/Grid";
import Container from "../../components/Container";
import { Text } from "../../components/Text";
import colors from "../../constants/colors";
import IconEye from "../../assets/icons/eye.png";
import Image from "next/image";
import Button from "../../components/Button";

const Nav = styled(Flex)`
  min-width: 250px;
  .active {
    color: #fff;
    background: #26336D;
  }
`;

const NavItem = styled.div`
  padding: 16px;
  color: ${colors.primary};

  cursor: pointer;
  border-radius: 8px;
  &:hover {
    color: #fff;
    background: #26336D;
  }
`;
const Content = styled(Grid)``;
const ContentItem = styled.div`
  padding: 24px;
`;
const Training: NextPage = () => {
  return (
    <>
      <Container
        flexDirection="column"
        style={{
          padding: "180px 0",
        }}
      >
        <Text
          bold
          color={colors.h1}
          fontSize="48px"
          lineHeight="58px"
          style={{
            marginBottom: "24px",
          }}
        >
          Ôn luyện IELTS
        </Text>
        <Flex gap="30px">
          <Nav flexDirection="column" gap="16px">
            <NavItem className="active">IELTS Listening</NavItem>
            <NavItem>IELTS Reading</NavItem>
            <NavItem>IELTS Speaking</NavItem>
            <NavItem>IELTS Writing</NavItem>
            <NavItem>Grammar</NavItem>
            <NavItem>Vocabulary</NavItem>
          </Nav>
          <Content columns="2" gap="30px">
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
            <ContentItem>
              <div
                style={{
                  backgroundColor: "#e4e4e4",
                  width: "100%",
                  height: "200px",
                  marginBottom: "16px",
                }}
              ></div>
              <Flex justifyContent="space-between">
                <Text color={colors.disable} fontSize="14px">
                  23/09/2021
                </Text>
                <Flex>
                  <Image src={IconEye} alt="View"></Image>
                  <Text color={colors.disable} fontSize="14px">
                    320
                  </Text>
                </Flex>
              </Flex>
              <Text bold fontSize="20px" color="#616161">
                Visit blog.nextearth.io for our latest...
              </Text>
              <Text color={colors.regular}>
                We transferred most of our content to blog.nextearth.io ...
              </Text>
            </ContentItem>
          </Content>
        </Flex>
      </Container>
      <div
        style={{
          width: "100%",
          height: "810px",
          backgroundColor: "#d9d9d9",
        }}
      ></div>
      <Button variant="primary" style={{
        margin: "48px auto",
      }}>
        <Text bold fontSize="24px" lineHeight="32px" color="white">Đăng ký</Text>
      </Button>
    </>
  );
};

export default Training;
