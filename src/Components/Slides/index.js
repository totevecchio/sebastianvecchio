import React, { useState } from "react";
import IconBox from "../Body/IconBox";
import { tools, languages } from "../Body/Data";
import "./styles.sass";
import Carousel from "../Carousel";


const Slides = () => {
  return (
    <div className="body">
    <h3>Frameworks, libraries, languages and tools</h3>
        <Carousel show={4}>
          {[...languages, ...tools].map((item, index) => (
            <div className="">
              <IconBox
                key={`tools_${index}_${item.label.toLowerCase()}`}
                resource={item.icon}
                label={item.label}
                color={item.color}
              />
            </div>
          ))}
        </Carousel>
    </div>
  );
};

export default Slides;
