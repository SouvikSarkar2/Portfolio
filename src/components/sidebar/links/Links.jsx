import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.38,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 40,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const [activePage, setActivePage] = useState("Homepage");
  const [dotPosition, setDotPosition] = useState(0);
  const items = ["Homepage", "Services", "Projects", "Contact"];

  const handlePageClick = (page) => {
    setOpen((prev) => !prev);
    setActivePage(page);
  };

  const handleDotMove = (index) => {
    setDotPosition(index);
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, index) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.15 }}
          onClick={() => handlePageClick(item)}
          onMouseEnter={() => handleDotMove(index)}
        >
          {item}
          <span
            className={`dot ${dotPosition === index ? "active" : ""}`}
          ></span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
