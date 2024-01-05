import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, white, skyblue);
`;

const Title = styled.h1`
  font-family: "Muli", sans-serif;
  font-size: 4em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const HButton = styled.a`
  //font-family: "Roboto", sans-serif;
  font-size: 40px;
  font-weight: 500;
  //color: black;
  text-decoration: none;
  background: white;
  //padding: 40px;
  width: 350px;
  text-align: center;
  position: relative;

  span {
    display: inline-block;
    min-width: 0.3em;
    //text-transform: uppercase;
    transition: 0.25s cubic-bezier(0.5, -1, 0.5, 2);
    opacity: 0;
    transform: translate(0, -20px);
    text-align: center;
    padding-left: 200px;
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
`;

const Link = styled.a`
  color: #333;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;

  &:hover,
  &:focus {
    color: #222;
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
    color: rgb(210, 73, 54);
  }
`;

const Techstack = () => {
  return (
    <Container>
      <Title>
        <h1>
          <Link className="flip-animate" target="_blank">
            <span data-hover="Techstack">Techstack</span>
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
                <span data-hover="Frontend">Frontend</span>
              </Link>
            </h3>
            <ButtonDiv>
              <button style={{ background: "transparent", border: "none" }}>
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
                <HButton data-text="Next" style={{ background: "transparent" }}>
                  <span>
                    <img width="55" src="/Logo/next.png" />
                  </span>
                </HButton>
              </button>
            </ButtonDiv>
          </InnerDiv>
          <InnerDiv style={{ paddingLeft: "190px" }}>
            <h3 style={{ paddingLeft: "90px" }}>
              <Link
                style={{ paddingLeft: "90px" }}
                className="flip-animate"
                target="_blank"
              >
                <span data-hover="Backend">Backend</span>
              </Link>
            </h3>
            <ButtonDiv>
              <button style={{ background: "transparent", border: "none" }}>
                <HButton data-text="Node" style={{ background: "transparent" }}>
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
          </InnerDiv>
        </Div>
      </Title>
    </Container>
  );
};

export default Techstack;
