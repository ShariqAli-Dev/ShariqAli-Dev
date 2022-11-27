import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  delay?: number | any;
  width?: any;
  height?: any;
  display?: any;
};

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = (props: Props) => {
  const { children, width, delay = 0 } = props;
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.8", delay }}
      mb={6}
      {...props}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
