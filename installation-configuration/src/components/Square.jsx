import React, { useState } from "react";

const Square = () => {
  const [value, setValue] = useState("");

  const handleClick = (value) => {
    setValue(value)
  }

  return <div className="square" onClick={() => handleClick('Y')}>{value}</div>;
};

export default Square;
