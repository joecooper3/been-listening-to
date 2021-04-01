import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: 150,
    scale: 2.3,
  },
  show: {
    y: 0,
    scale: 1,
    transition: {
      staggerChildren: 0.5,
      when: "afterChildren",
      duration: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

type TitleProps = {
  animComplete: React.Dispatch<React.SetStateAction<boolean>>;
};

const Title = ({ animComplete }: TitleProps) => {
  return (
    <Header
      initial="hidden"
      animate="show"
      variants={containerVariants}
      onAnimationComplete={() => {
        animComplete(true);
      }}
    >
      <motion.div variants={item}>been</motion.div>
      <motion.div variants={item}>listening</motion.div>
      <motion.div variants={item}>to…</motion.div>
    </Header>
  );
};

export default Title;

const Header = styled(motion.h1)`
  font-family: "Quarto";
  font-size: 72px;
  color: var(--blue);
  margin-left: 120px;
  display: flex;
  flex-flow: row wrap;
  transform-origin: top left;
  overflow: hidden;

  div:first-child {
    width: 100%;
    flex: 100%;
  }

  div:nth-child(2) {
    margin-right: 10px;
  }
`;
