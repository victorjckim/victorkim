import React from "react";
import "./Intro.css";
import NavBar from "./NavBar";

const icon = {
  color: "whitesmoke",
  padding: "5px",
  textShadow: "2px 4px 3px rgba(0,0,0,0.3)"
};

const Intro = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="pimg1">
        <div className="ptext name">
          <span className="border">
            Victor Kim
            <div style={{ textAlign: "center", paddingTop: "15px" }}>
              <a
                href="https://www.linkedin.com/in/victorjckim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-lg" style={icon} />
              </a>
              <a
                href="https://github.com/victorjckim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-lg" style={icon} />
              </a>
              <a
                href="https://www.instagram.com/victorjckim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-lg" style={icon} />
              </a>
            </div>
          </span>
        </div>
      </div>
      <section className="section section-light" id="sectionOne">
        <h2>Section One</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <div className="pimg2">
        <div className="ptext">
          <span className="border transparent">Image Two Text</span>
        </div>
      </div>
      <section className="section section-dark" id="sectionTwo">
        <h2>Section Two</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <div className="pimg3">
        <div className="ptext">
          <span className="border transparent">Image Three Text</span>
        </div>
      </div>
      <section className="section section-light" id="sectionThree">
        <h2>Section Three</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <div className="pimg1">
        <div className="ptext">
          <span className="border">Lorem Ipsum</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
