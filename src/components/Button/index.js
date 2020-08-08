import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

export default function Button({
  text,
  click,
  icon,
  styleType,
  id,
  className,
  type,
}) {
  return (
    <div>
      <button
        onClick={click}
        id={id}
        type={type ? type : "button"}
        className={`btn btn-${styleType} ${className ? className : ""}`}
      >
        {icon} {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
  icon: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};
