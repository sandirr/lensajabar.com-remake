import React from "react";
import Globaldata from "../Globaldata";

export default class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onScrollOn: false,
      articles: [],
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1300) {
        this.setState({ onScrollOn: true });
      } else {
        this.setState({ onScrollOn: false });
      }
    });

    let articles = [];
    for (let i = 0; i < 5; i++) {
      articles[i] = Globaldata.articles[i];
    }
    this.setState({ articles: articles });
  }

  render() {
    return (
      <div
        className={
          this.state.onScrollOn ? "col l4 sticky" : "col l4 not-sticky"
        }
        id="sidebar"
      >
        <div className="row sidebar__inner">
          <div className="col l12">
            <div style={{ textAlign: "center" }}>
              <img
                src="https://lensajabar.com/wp-content/uploads/2020/04/ADS-Cimahi-2.jpg"
                alt="lensajabar"
                style={{ width: "100%", padding: 0, margin: 0 }}
              />
              <img
                src="https://lensajabar.com/wp-content/uploads/2019/12/Smart-Positive.jpg.webp"
                alt="lensajabar"
                style={{ width: "100%", padding: 0, margin: 0 }}
              />
              <img
                src="https://lensajabar.com/wp-content/uploads/2019/02/Logo-yabasma.jpg"
                alt="lensajabar"
                style={{ width: "100%", padding: 0, margin: 0 }}
              />
            </div>

            <ul className="collection" style={{ borderRadius: "10px" }}>
              <li className="collection-item blue darken-2">
                <h6 style={{ fontWeight: "bold" }} className="white-text">
                  Berita Terbaru
                </h6>
              </li>
              {this.state.articles.map((article, index) => (
                <li className="collection-item avatar transparent" key={index}>
                  <img src={article.urlToImage} alt="..." className="circle" />
                  <p
                    className="blue-text text-darken-2"
                    style={{ cursor: "pointer" }}
                  >
                    {article.title}
                  </p>
                </li>
              ))}
            </ul>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              &copy; 2014 lensajabar.com
              <br />
              By Lensa Digital
              <br />
              All right reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
