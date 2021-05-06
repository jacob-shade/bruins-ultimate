import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--dark"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  linkTo
}) => {

  return(
    <Link to={linkTo} className='btn-mobile'>
      <button className={`btn ${buttonStyle} ${buttonSize}`}
      onClick={onClick}
      type={type}
      > 
        {children}
      </button>
    </Link>
  )
};
