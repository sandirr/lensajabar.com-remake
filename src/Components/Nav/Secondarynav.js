import React from "react";

class Secondarynav extends React.Component {
  render() {
    return (
      <div
        className="container hide-on-med-and-down secondarynav"
        style={{ marginTop: 5 }}
        ref={(secondnav) => {
          this.secondnav = secondnav;
        }}
      >
        <ul className="tabs tabs-fixed-width tab-demo z-depth-1 blue darken-2">
          <li className="tab">
            <a href="#test1">
              <i
                className="tiny material-icons"
                style={{ position: "relative", top: 2 }}
              >
                home
              </i>{" "}
              Beranda
            </a>
          </li>

          <li className="tab">
            <a href="#test3">NASIONAL</a>
          </li>
          <li className="tab">
            <a href="#test4">DAERAH</a>
          </li>
          <li className="tab">
            <a href="#test0">POLHUKAM</a>
          </li>
          <li className="tab">
            <a href="#test2">LENSA EKBIS</a>
          </li>
          <li className="tab">
            <a href="#test2">PERISTIWA</a>
          </li>
          <li className="tab">
            <a href="#test2">HUMANIORA</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Secondarynav;
