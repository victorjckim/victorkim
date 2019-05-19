import React from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "../components/Image";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <Image src="assets/img/background.jpg" alt="" />
          <Image src="assets/img/dark.jpg" alt="" />
        </Parallax>
      </div>
    );
  }
}

export default Intro;
