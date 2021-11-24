import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconBox = ({ resource, label, color = 'black' }) => (
  <div className="icon-box" style={{ backgroundColor: color }}>
    <FontAwesomeIcon
      icon={resource}
      style={{ fontSize: '80px' }}
    />
    <p>
      {label}
    </p>
  </div>
);

export default IconBox;