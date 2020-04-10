import React from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Topnav extends React.Component {
  componentDidMount() {
    M.FloatingActionButton.init(this.fixedactionbutton, {
      direction: "bottom",
    });
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav style={styles.navbar} className="nav-extended">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                <img
                  src="https://lensajabar.com/wp-content/uploads/2020/04/new-ogo-lensa-jabar-new.png"
                  style={styles.logo}
                  alt="lensajabar"
                />
              </Link>
              <Link
                to="/"
                data-target="mobile-demo"
                className="sidenav-trigger"
              >
                <i className="material-icons blue-text text-darken-2">menu</i>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li style={styles.menuContain}>
                  <div className="blue-text text-darken-2" style={styles.Menu}>
                    <form style={{ cursor: "auto" }}>
                      <div class="input-field">
                        <input
                          placeholder="Search something..."
                          id="search"
                          type="search"
                          style={{
                            display: "inline-block",
                            outline: "none",
                            background: "none",
                          }}
                        />
                        <label class="label-icon" for="search">
                          <i class="material-icons blue-text text-darken-2">
                            search
                          </i>
                        </label>
                      </div>
                    </form>
                  </div>
                </li>
                {/* <li style={styles.menuContain}>
                  <Link
                    to="/"
                    className="blue-text text-darken-2"
                    style={styles.Menu}
                  >
                    Berita Jawa Barat
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/"
                    className="blue-text text-darken-2"
                    style={styles.Menu}
                  >
                    Berita Jabar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="blue-text text-darken-2"
                    style={styles.Menu}
                  >
                    Berita Seputar Jabar
                  </Link>
                </li>
              </ul>
            </div>

            <div
              class="nav-content secondarynav2 hide-on-med-and-down"
              style={{ display: "none" }}
            >
              <ul
                class="tabs"
                style={{ backgroundColor: "rgba(255,255,255,.1)" }}
              >
                <li className="tab">
                  <a href="#test1">Beranda</a>
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
          </div>
        </nav>
        <div
          className="fixed-action-btn"
          style={{
            right: "10%",
            bottom: "auto",
            top: 3,
            border: "none",
            boxShadow: "none",
          }}
          ref={(fixedactionbutton) => {
            this.fixedactionbutton = fixedactionbutton;
          }}
        >
          <button
            className="btn-floating btn-large transparent tooltipped"
            data-position="top"
            data-tooltip="Social Network"
            style={{ boxShadow: "none" }}
          >
            <img
              src="./Images/sosmed.png"
              alt="Social Network"
              style={{ width: 55, position: "relative", top: 10 }}
            />
          </button>
          <ul className="thisItem">
            <li>
              <div
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column-reverse",
                  boxShadow: "none",
                  background: "transparent",
                }}
              >
                <div>
                  <a
                    href="https://lensajabar.com/feed/"
                    target="blank"
                    className="btn-floating orange accent-2"
                  >
                    <ion-icon name="logo-rss"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/channel/UC7KlvWQh-DnPuVzBVzDgM_A"
                    target="blank"
                    className="btn-floating red"
                  >
                    <ion-icon name="logo-youtube"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/lensa-jabar-7a349a167/"
                    target="blank"
                    className="btn-floating blue darken-4"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/lensajabartv.channel"
                    target="blank"
                    className="btn-floating red"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.tumblr.com/blog/tabloidlensajabar"
                    target="blank"
                    className="btn-floating indigo darken-4"
                  >
                    <ion-icon name="logo-tumblr"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    target="blank"
                    className="btn-floating deep-orange darken-4"
                  >
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    target="blank"
                    className="btn-floating cyan accent-4"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </div>
                <div>
                  <a href="/" target="blank" className="btn-floating blue">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
const styles = {
  Menu: {
    fontWeight: "bold",
    fontSize: 14,
    textShadow: "2px 2px 1px #f3f3f3",
  },
  logo: { height: 40, marginTop: 9 },
  menuContain: {},
  navbar: {
    background: "rgba(255,255,255, .9)",
  },
};

export default Topnav;
