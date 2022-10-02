import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import colors from "../../constants/colors";
import Flex from "../Box/Flex";
import Container from "../Container";
const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    z-index: 100;
`;
const Wrapper = styled(Container)`
    padding: 24px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    color: ${colors.text};
    .active {
        color: ${colors.active};
        a {
            color: ${colors.active};
        }
    }
    a {
        font-weight: 600;
        text-decoration: none;
        color: #909090;
        transition: 0.2s ease-in-out;
        &:hover,
        &:active {
            color: ${colors.active};
            scale: 1.1;
        }
    }
`;

export default function Header() {
    const router = useRouter();

    return (
        <StyledHeader>
            <Wrapper>
                <Image src={Logo} alt="logo" />
                <Flex gap="32px">
                    <div className={router.pathname === "/" ? "active" : ""}>
                        <Link href="/">Trang chủ</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("about") ? "active" : ""
                        }
                    >
                        <Link href="/about">Giới thiệu</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("courses") ? "active" : ""
                        }
                    >
                        <Link href="/courses">Khoá học</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("training") ? "active" : ""
                        }
                    >
                        <Link href="/training">Ôn luyện IELTS</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("news") ? "active" : ""
                        }
                    >
                        <Link href="/news">Tin tức</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("test") ? "active" : ""
                        }
                    >
                        <Link href="/test">Thi thử IELTS</Link>
                    </div>
                    <div
                        className={
                            router.pathname.includes("contact") ? "active" : ""
                        }
                    >
                        <Link href="/contact">Liên hệ</Link>
                    </div>
                </Flex>
            </Wrapper>
        </StyledHeader>
    );
}
