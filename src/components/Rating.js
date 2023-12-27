

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";


export default function Rating({ rating, onClick, style }) {
  return (
    <>
          {[...Array(5)].map((tt, i) => (
              <span key={i} onClick={() => onClick(i)} style={style}>
                  {rating > i ? (<AiFillStar fontSize='15px'/>) : (<AiOutlineStar fontSize='15px'/>)}
              </span>
          ))}
    </>
  );
}
