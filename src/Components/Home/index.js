import React from "react";
import "./styles.sass";
import MediaQuery from "react-responsive";

import Header from "../Header";
import Footer from "../Footer";
import Body from "../Body";
import Slides from "../Slides";

const Index = () => {
  return (
    <div className='content-box'>
      <Header />
      <MediaQuery maxWidth={600}>
        <Body />
      </MediaQuery>
      <MediaQuery minWidth={600}>
        <Slides />
      </MediaQuery>
      <Footer />
    </div>
  );
};

export default Index;
