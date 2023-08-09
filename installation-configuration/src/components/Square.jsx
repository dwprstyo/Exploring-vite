import React, { useState } from "react";

const Square = ({props, onSquareClick}) => {

  return <div className="square" onClick={() => onSquareClick()}>X</div>;
};

export default Square;
