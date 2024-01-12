import "./loader.scss";
import React from "react";

const Loader = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div className="div-container">
      <div className="div-loader">
        <svg
          className="loading"
          style={{ width: "820px", padding: "20px" }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="574.558px"
          height="190px"
          viewBox="0 0 574.558 120"
          enableBackground="new 0 0 574.558 120"
          xmlSpace="preserve"
        >
          <defs>
            <pattern
              id="water"
              width=".25"
              height="1.1"
              patternContentUnits="objectBoundingBox"
            >
              <path
                fill="#fff"
                d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"
              />
            </pattern>

            <text
              id="text"
              transform="matrix(1 0 0 1 -8.0684 116.7852)"
              fontSize="161.047"
            >
              LOADING
            </text>

            <mask id="text_mask">
              <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#4281ac" />
            </mask>
          </defs>

          <use x="0" y="0" xlinkHref="#text" fill="#3498db" />

          <rect
            className="water-fill"
            mask="url(#text_mask)"
            fill="url(#water)"
            x="-400"
            y="0"
            width="1600"
            height="120"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
