import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";
import colors from "../../constants/colors";
import Flex from "../Box/Flex";
import Container from "../Container";

interface INav {
    href: string;
    label: string;
    children?: {
        href: string;
        label: string;
    }[];
}

const NAV_DATA: INav[] = [
    {
        href: "/",
        label: "Trang chủ",
    },
    {
        href: "/about",
        label: "Giới thiệu",
    },
    {
        href: "/courses",
        label: "Khoá học",
        children: [
            {
                label: "IELTS Starlight",
                href: "courses/ielts-starlight",
            },
            {
                label: "Modest Package",
                href: "courses/modest-package",
            },
            {
                label: "Fluent Package",
                href: "courses/fluent-package",
            },
            {
                label: "IELTS Starlight",
                href: "courses/advance-package",
            },
            {
                label: "IELTS Starlight",
                href: "courses/private-package",
            },
        ],
    },
    {
        href: "/training",
        label: "Ôn luyện IELTS",
    },
    {
        href: "/news",
        label: "Tin tức",
    },
    {
        href: "/test",
        label: "Thi thử IELTS",
    },
    {
        href: "/contact",
        label: "Liên hệ",
    },
];

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 120px;
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

const StyledNavItem = styled.div`
    position: relative;
`;
const SubMenu = styled(Flex)`
    position: absolute;
    padding: 30px 20px;
    width: 200px;
    background: white;
`;
const SubMenuItem = styled.div`
    cursor: pointer;
`;

const NavItem = ({ item }: { item: INav }) => {
    const router = useRouter();
    const [isHover, setIsHover] = useState<boolean>(false);
    return (
        <StyledNavItem
            key={item.href}
            className={router.pathname === item.href ? "active" : ""}
            onMouseOver={(e) => {
                console.log("alo");
                if (item.children) {
                    setIsHover(true);
                }
            }}
            onMouseLeave={(e) => {
                if (isHover) {
                    setIsHover(false);
                }
            }}
        >
            <Link href={item.href}>{item.label}</Link>
            {isHover && (
                <SubMenu flexDirection="column" gap="20px">
                    {item.children?.map((child: any) => (
                        <SubMenuItem key={child.label}>
                            <Link href={child.href}>{child.label}</Link>
                        </SubMenuItem>
                    ))}
                </SubMenu>
            )}
        </StyledNavItem>
    );
};

export default function Header() {
    return (
        <StyledHeader>
            <Wrapper>
                <Image src={Logo} alt="logo" width={64} height={64} />
                <Flex gap="32px">
                    {NAV_DATA.map((item: INav) => (
                        <NavItem item={item} key={item.label}></NavItem>
                    ))}
                </Flex>
            </Wrapper>
        </StyledHeader>
    );
}
