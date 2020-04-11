import React from "react";
import { Link } from "react-router-dom";

class Sidenav extends React.Component {
  render() {
    return (
      <ul id="mobile-demo" className="sidenav">
        <li>
          <div className="user-view" style={styles.userView}>
            <div className="background">
              <img
                src="https://lensajabar.com/wp-content/uploads/2020/04/new-ogo-lensa-jabar-new.png"
                alt="lensajabar"
                style={styles.logo}
              />
            </div>
          </div>
        </li>

        <li>
          <div className="blue-text text-darken-2">
            <form style={{ cursor: "auto" }}>
              <div className="input-field">
                <input
                  placeholder="Search something..."
                  id="search"
                  type="search"
                  style={{
                    paddingLeft:50
                  }}
                />
                <label className="label-icon" htmlFor="search">
                  <i className="tiny material-icons blue-text text-darken-2">
                    search
                  </i>
                </label>
              </div>
            </form>
          </div>
        </li>
        
        <li>
          <Link to="#!">
            <i className="material-icons">home</i>BERANDA
          </Link>
        </li>
        <li>
          <Link t="#test3">NASIONAL</Link>
        </li>
        <li>
          <Link t="#test4">DAERAH</Link>
        </li>
        <li>
          <Link t="#test0">POLHUKAM</Link>
        </li>
        <li>
          <Link t="#test2">LENSA EKBIS</Link>
        </li>
        <li>
          <Link t="#test2">PERISTIWA</Link>
        </li>
        <li>
          <Link t="#test2">HUMANIORA</Link>
        </li>
      </ul>
    );
  }
}

const styles = {
  logo: { width: "100%" },
  userView: { paddingBottom: 50 },
};
export default Sidenav;
