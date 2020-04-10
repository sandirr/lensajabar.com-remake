import React from "react";
import M from "materialize-css";
// import axios from "axios";
import RightBar from "../Pannels/RightBar";
import Globaldata from "../Globaldata";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: Globaldata.articles,
      headlines: [
        Globaldata.articles[1],
        Globaldata.articles[2],
        Globaldata.articles[3],
      ],
    };
  }
  componentDidMount() {
    M.Slider.init(this.slider, {
      indicators: false,
      height: 280,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l8 s12" style={{ margin: 0, padding: 0 }}>
            {/* Headline news */}
            <div
              className="slider"
              ref={(slider) => {
                this.slider = slider;
              }}
              style={{ marginTop: 12 }}
            >
              <ul className="slides">
                {this.state.headlines.map((headline, index) => (
                  <li key={index}>
                    <img alt="lensajabar" src={headline.urlToImage} />
                    <div className="caption left-align">
                      <h5
                        style={{
                          textShadow: "2px 2px 3px #000",
                          display: "inline-block",
                          marginTop: "20%",
                        }}
                      >
                        {headline.title}
                      </h5>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* konten */}
            <div>
              <div className="col s12 m12" style={{ margin: 0, padding: 0 }}>
                {this.state.articles.map((article, index) => (
                  <div
                    className="card horizontal"
                    style={{ margin: 0, padding: 0 }}
                    key={index}
                  >
                    <div className="card-stacked">
                      <div className="card-content">
                        <h5
                          style={{
                            padding: 0,
                            margin: 0,
                            marginBottom: 10,
                            fontWeight: "bold",
                          }}
                          className="blue-text text-darken-2"
                        >
                          {article.title}
                        </h5>
                        <p>
                          {article.description}{" "}
                          <button
                            className="waves-effect btn-small blue darken-2"
                            style={{ textTransform: "none" }}
                          >
                            Lanjut membaca
                          </button>
                        </p>
                      </div>
                    </div>
                    <div
                      className="card-image"
                      style={{ position: "relative" }}
                    >
                      <img
                        src={article.urlToImage}
                        style={{
                          width: 150,
                          height: 100,
                          marginTop: 15,
                          marginRight: 15,
                        }}
                        alt="lensajabar"
                      />
                      <div
                        className="sharethis-inline-share-buttons"
                        style={{ position: "absolute", bottom: 5, zIndex: 2 }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* rightbar */}
          <RightBar />
        </div>
      </div>
    );
  }
}

export default Home;
