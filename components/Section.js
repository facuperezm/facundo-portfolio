import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const Div = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }) => (
  <Div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </Div>
);

export default Section;
