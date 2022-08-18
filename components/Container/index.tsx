import React from "react";
import styled from "styled-components";
import breakpoints from "../../constants/breakpoints";
import Flex from "../Box/Flex";

interface IContainer {
  children: React.ReactNode;
}
const Container = styled(Flex)`
    width: 100%;
    margin: 0 auto;
    @media ${breakpoints.xs}{
        width: 540px;
    }
    @media ${breakpoints.sm}{
        width: 720px;
    }
    @media ${breakpoints.md}{
        width: 960px;
    }
    @media ${breakpoints.lg}{
        width: 1140px;
    }
`;

export default Container;