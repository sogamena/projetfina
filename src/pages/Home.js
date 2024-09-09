import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <div className="container">
        <div className="home-content">
          <div class="header-container">
            <div class="header-content">
              <h1>Welcome to Our Site</h1>
              <p>Discover our exceptional services and offers.</p>

              <Link className="new-more btn-header" to={"/vehicules/"}>
                View more
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="latest-content">
            <h2>Latest news</h2>
            <br />
            <hr />
            <br />
            <div className="news-content">
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img
                    className="photo-new"
                    src="/images/image/150cchighcabin_2.png"
                    alt="sary"
                  />
                </div>
                <div>
                  <h2>150cc loader HI Cabin</h2>
                </div>
              </div>
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img
                    className="photo-new"
                    src="/images/image/deca_pm_front.png"
                    alt="sary"
                  />
                </div>
                <h2>DECA- 296000</h2>
              </div>
              <div className="cadre-new">
                <div className="cadre-new-img">
                  <img
                    className="photo-new"
                    src="/images/image/rustamplus01.jpg"
                    alt="sary"
                  />
                </div>
                <h2>Rustam plus- 365000</h2>
              </div>
            </div>
            <br />
            <h2 className="btn-more">
              <Link className="new-more btn-header" to={"/vehicules/"}>
                View more
              </Link>
            </h2>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
