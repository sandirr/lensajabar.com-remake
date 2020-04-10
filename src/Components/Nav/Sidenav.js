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
          <Link to="#!">
            <i className="material-icons">cloud</i>First Link With Icon
          </Link>
        </li>
        <li>
          <Link to="#!">Second Link</Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link to="/" className="subheader">
            Subheader
          </Link>
        </li>
        <li>
          <Link className="waves-effect" to="#!">
            Third Link With Waves
          </Link>
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
