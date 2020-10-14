import React from "react";
import { Link } from "react-router-dom";
const Main = ({ setCookie }) => {
  return (
    <Link to="/">
      <button
        onClick={() => {
          setCookie("user", "");
        }}
      >
        Log outs
      </button>
    </Link>
  );
};

export default Main;
