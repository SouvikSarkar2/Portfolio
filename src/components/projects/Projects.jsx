import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "./Image";

const items = [
  {
    id: 1,
    title: "The Next Blog",
    img: [
      "/works/tnb1.png",
      "/works/tnb2.png",
      "/works/tnb3.png",
      "/works/tnb4.png",
      "/works/tnb5.png",
    ],
    desc: "Introducing our innovative blog app - a seamless blend of simplicity and functionality. Craft compelling stories effortlessly with our user-friendly interface. Enjoy advanced features like real-time collaboration, rich media integration, and personalized reading experiences. Elevate your blogging journey with intuitive tools designed for both beginners and seasoned writers. Embrace the future of blogging with our cutting-edge app!",
    color: { bg: "#0c0c1d", logo: "", title: "grey", button: "orange" },
    link: "https://the-next-blog-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Flavour Fusion",
    img: [
      "/works/ff1.png",
      "/works/ff2.png",
      "/works/ff3.png",
      "/works/ff4.png",
      "/works/ff5.png",
    ],
    desc: "Satisfy your pizza cravings instantly with our hassle-free pizza ordering app. No login required! Browse our delicious menu, customize your pizza, and swiftly place your order for speedy delivery or pickup. Enjoy a seamless and anonymous pizza experience with just a few taps. Your favorite pizza, your way, without any unnecessary logins – it's that easy!",
    color: { bg: "#0c0c1d", logo: "", title: "grey", button: "orange" },
    link: "https://flavor-fusion-sable.vercel.app/",
  },
  {
    id: 3,
    title: "WorldWise",
    img: [
      "/works/ww1.png",
      "/works/ww2.png",
      "/works/ww3.png",
      "/works/ww4.png",
      "/works/ww5.png",
    ],
    desc: "Embark on a journey of a lifetime with WorldWise, your ultimate travel companion! This app seamlessly captures and chronicles your global adventures, from city escapades to exotic getaways. Track your journeys effortlessly, log memories with photos and notes, and revisit your travel timeline anytime. With interactive maps, insightful statistics, and a user-friendly interface, WorldWise makes documenting and sharing your travel stories a breeze. Unleash the explorer in you and turn every trip into a memorable chapter with WorldWise!",
    color: { bg: "#0c0c1d", logo: "", title: "grey", button: "orange" },
  },
  {
    id: 4,
    title: "CarHub",
    img: [
      "/works/ch1.png",
      "/works/ch2.png",
      "/works/ch3.png",
      "/works/ch4.png",
      "/works/ch5.png",
    ],
    desc: "Unlock a world of personalized expressions with our card ordering app! Choose from a stunning array of designs for every occasion, customize your message, and effortlessly send heartfelt cards to your loved ones. Whether it's birthdays, holidays, or special moments, our user-friendly interface ensures a seamless experience. Express your sentiments with just a few taps, and let our app handle the rest. Elevate your greeting game and make every occasion unforgettable with our convenient and delightful card ordering app.",
    color: { bg: "#0c0c1d", logo: "", title: "grey", button: "orange" },
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section
      style={{
        background: item.color.bg,
      }}
    >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <Image images={item.img} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button style={{ background: "#ee9626" }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                see Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1 style={{ color: "orange" }}>Feature Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
