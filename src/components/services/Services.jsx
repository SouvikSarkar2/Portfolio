import styled from "styled-components";
//import { motion } from "framer-motion";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: white;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 120%;
  }
`;

const Title = styled.h1`
  font-family: "Muli", sans-serif;
  font-size: 4em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 28px;
    padding-bottom: 10px;
    padding-left: 10px;
    h1 {
      font-size: 40px;
      margin-top: -180px;
      margin-left: 10px;
    }
  }
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    button {
      height: 40px;
    }
    h3 {
      margin-top: 10px;
      margin-left: 20px;
      padding-bottom: 10px;
    }
  }
`;

const InnerDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: "190px";
  @media (max-width: 768px) {
    padding-left: 100px;
    margin-left: -280px;
    button {
      height: 40px;
    }
    h3 {
      margin-left: 15px;
      margin-top: 20px;
    }
  }
`;

const HButton = styled.a`
  //font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  background: white;
  //padding: 40px;
  width: 350px;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  span {
    display: inline-block;
    min-width: 0.3em;
    //text-transform: uppercase;
    transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
    opacity: 0;
    transform: translate(0, -20px);
    text-align: center;
    padding-left: 200px;

    @media screen and (max-width: 768px) {
      img {
        width: 30px;
      }
    }
  }

  &:before {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 100px;
    transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
    //text-transform: uppercase;
    letter-spacing: 3.5px;
    opacity: 1;
    transform: translate(0, 0px);
  }

  &:hover,
  &:focus {
    &:before {
      opacity: 0;
      transform: translate(0, 20px);
    }

    span {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  align-items: center;
  justify-content: space-evenly;
`;

const Div = styled.div`
  //border: 1px solid red;
  height: 80vh;
  width: 1380px;
  display: flex;
  padding-top: 40px;
  justify-content: space-around;
  /* * {
    border: 1px solid red;
  } */
  @media (max-width: 768px) {
    flex-direction: column;
    width: 150px;
  }
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: white;
  }

  &:hover span,
  &:focus span {
    transform: rotateX(90deg) translateY(-22px);
  }

  span {
    display: inline-block;
    padding: 0;
    transition: transform 0.3s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
  }

  span:before {
    content: attr(data-hover);
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    text-align: center;
    transition: color 0.3s;
  }

  &:hover span:before,
  &:focus span:before {
    color: #dd571c;

    text-decoration: solid;
  }
`;

const Techstack = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit:
            "cover" /* Ensures the video covers the entire container */,
          zIndex: "-1" /* Places the video behind other elements */,
        }}
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>
      <Container>
        <Title>
          <h1>
            <Link className="flip-animate" target="_blank">
              <span data-hover="Techstack" style={{ userSelect: "none" }}>
                Techstack
              </span>
            </Link>
          </h1>
          <Div>
            <InnerDiv style={{ marginLeft: "-190px" }}>
              <h3 style={{ paddingLeft: "180px" }}>
                <Link
                  className="flip-animate"
                  target="_blank"
                  style={{ "&:focus": { borderColor: "#00ccff" } }}
                >
                  <span style={{ userSelect: "none" }} data-hover="Frontend">
                    Frontend
                  </span>
                </Link>
              </h3>
              <ButtonDiv>
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <HButton
                    data-text="Javascript"
                    style={{ padding: "10px", background: "transparent" }}
                  >
                    <span>
                      <img
                        width="55"
                        src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/javascript.svg"
                      />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Typescript"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/ts.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="React"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/react 2.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Redux"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/redux.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="ReactQuery"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/reactquery.svg" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Next"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/next.png" />
                    </span>
                  </HButton>
                </button>
              </ButtonDiv>
            </InnerDiv>
            <InnerDiv2 style={{}}>
              <h3 style={{ paddingLeft: "90px" }}>
                <Link
                  style={{ paddingLeft: "90px" }}
                  className="flip-animate"
                  target="_blank"
                >
                  <span style={{ userSelect: "none" }} data-hover="Backend">
                    Backend
                  </span>
                </Link>
              </h3>
              <ButtonDiv>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Node"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/node.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Express"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/express.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="MongoDB"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/mongo.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="MySQL"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/sql.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Supabase"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/sb.png" />
                    </span>
                  </HButton>
                </button>
                <button style={{ background: "transparent", border: "none" }}>
                  <HButton
                    data-text="Golang"
                    style={{ background: "transparent" }}
                  >
                    <span>
                      <img width="55" src="/Logo/go.png" />
                    </span>
                  </HButton>
                </button>
              </ButtonDiv>
            </InnerDiv2>
          </Div>
        </Title>
      </Container>
    </>
  );
};

export default Techstack;
