import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cloud1 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const cloud2 = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const cloud3 = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);
  const mountBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const mountFg = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const mountMg = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #006494, #ffffff)" }}
    >
      <motion.h1 style={{ y: yText }}>What I do?</motion.h1>
      {/* <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div> */}
      <motion.div style={{ y: cloud1 }} className="cloud1"></motion.div>
      <motion.div style={{ y: yBg }} className="cloud1Mask"></motion.div>
      <motion.div style={{ y: cloud2 }} className="cloud2"></motion.div>
      <motion.div style={{ y: cloud3 }} className="cloud3"></motion.div>
      <motion.div style={{ y: mountBg }} className="mountBg"></motion.div>
      <motion.div style={{ y: mountFg }} className="mountFg"></motion.div>
      <motion.div style={{ y: mountMg }} className="mountMg"></motion.div>
    </div>
  );
};

export default Parallax;
