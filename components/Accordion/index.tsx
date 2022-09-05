import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import IconPlus from "../../assets/icons/icon-plus.png";
import IconMinus from "../../assets/icons/icon-minus.png";
import colors from "../../constants/colors";
interface IAccordion {
  title: string;
  content: string;
}
const StyledItemTitle = styled.div`
  position: relative;
`;
const StyledContent = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 0.3s ease-out;
`;
const Accordion = ({ title, content }: IAccordion) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        borderBottom: "1px solid #CED3E0",
      }}
    >
      <StyledItemTitle>
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
          }}
        >
          <Image
            src={isOpen ? IconMinus : IconPlus}
            alt={isOpen ? "Open" : "Close"}
          />
        </div>
        <Text
          color={colors.sub}
          bold
          fontSize="20px"
          style={{
            padding: "16px 0",
          }}
          onClick={() => setIsOpen(!isOpen)}
          pointer
        >
          {title}
        </Text>
      </StyledItemTitle>
      <StyledContent
        style={{
          maxHeight: isOpen ? "fit-content" : "0",
          padding: isOpen ? "16px 0" : "0",
        }}
      >
        {content}
      </StyledContent>
    </div>
  );
};

export default Accordion;
