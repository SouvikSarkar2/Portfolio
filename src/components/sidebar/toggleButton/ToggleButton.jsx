import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      onClick={() => {
        setOpen((prev) => !prev);
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 4.5 L 21 4.5" },
            open: { d: "M 4 18.5 L 18 4.5" },
          }}
        />

        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 3 11.423 L 21 11.432"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 18.346 L 21 18.346" },
            open: { d: "M 4 4.5 L 18 18.346" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 3 18.346 L 21 18.346" },
            open: { d: "M 4 4.5 L 18 18.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
