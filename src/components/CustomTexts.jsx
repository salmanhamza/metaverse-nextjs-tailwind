"use client";

import { motion } from "framer-motion";
import { textContainer } from "../utils/motion";

export const TypingText = ({ title, textStyle }) => (
  <motion.p variants={textContainer} initial="hidden"></motion.p>
);

export const TitleText = ({ title, textStyle }) => <h2>Title Text</h2>;
