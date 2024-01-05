import { useState, useEffect } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion, useAnimation } from "framer-motion";

const variants = {
  initial: {
    clipPath: "circle(30px at -100% -100%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 20,
    },
  },
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      delay: 0.1,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (open) {
      controls.start("open");
    } else {
      controls.start("closed");
    }
  }, [open, controls]);

  return (
    <motion.div className="sidebar" animate={controls} initial="initial">
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
