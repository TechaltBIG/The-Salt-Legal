import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import {
  faDownLong,
  faDownload,
  faFileDownload,
  faSearch,
  faShareAlt,
  faUser,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Banner() {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/package");
  };

  const scrollToDocument = () => {
    const DocumentSection = document.getElementById("DocSection");
    if (DocumentSection) {
      DocumentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="banner-container">
      <div className="banner-image">
        <div className="banner-overlay"></div>
        <div className="banner-text">
          <h2>
            Empower your <span1>LEGAL JOURNEY</span1> with precision and
            efficiency
          </h2>
          <p className="div-banner-p">welcome to your ultimate law toolkit</p>
        </div>

        <div className="banner-search">
          <div class="center-button-2">
            <button onClick={handleDownload}>Get Started Now</button>
          </div>
        </div>

        <div className="download-div">
          <div className="download-div-1">
            <span>
              <FontAwesomeIcon
                icon={faUser}
                // size="3x"
                style={{ color: "#D0A144" }}
              />
            </span>
            <div class="column">
              <h4>1M +</h4>
              <p>Million Users</p>
            </div>
          </div>
          <div className="download-div-1">
            <span>
              <FontAwesomeIcon
                icon={faDownload}
                // size="3x"
                style={{ color: "#D0A144" }}
              />
            </span>
            <div class="column">
              <h4>12K</h4>
              <p>Over Daily Downloads</p>
            </div>
          </div>
          <div className="download-div-1">
            <span>
              <FontAwesomeIcon
                icon={faShareAlt}
                // size="3x"
                style={{ color: "#D0A144" }}
              />
            </span>
            <div class="column">
              <h4>10K+</h4>
              <p>Over Shares</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
