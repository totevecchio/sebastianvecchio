import React from "react";
import IconBox from "./IconBox";
import { tools, languages } from "./Data";
import "./styles.sass";

const Body = () => (
  <>
    <div className="body">
      <h3>Frameworks, libraries, languages and tools</h3>
      <div className="wrapper">
        {[...tools, ...languages].map((item, index) => (
          <IconBox
            key={`tools_${index}_${item.label.toLowerCase()}`}
            resource={item.icon}
            label={item.label}
            color={item.color}
          />
        ))}
      </div>
    </div>
  </>
);

export default Body;
