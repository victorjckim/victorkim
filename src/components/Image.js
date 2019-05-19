import React from "react";
import { withController } from "react-scroll-parallax";

const images = {
  maxWidth: "100%",
  height: "auto"
};

class Image extends React.Component {
  handleLoad = () => {
    // updates cached values after image dimensions have loaded
    this.props.parallaxController.update();
  };

  render() {
    return (
      <img
        src={this.props.src}
        onLoad={this.handleLoad}
        style={images}
        alt={this.props.alt}
      />
    );
  }
}

export default withController(Image);
