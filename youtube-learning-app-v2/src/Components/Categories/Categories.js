import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faHandshake } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faPhp,
  faJsSquare,
  faHtml5,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

const Categories = ({ name, path, icon, playlistId, commentId }) => {
  return (
    <div className="categories">
      <div className="categories__card">
        <div className="card--title">
          <h3>{name}</h3>
        </div>
        <div className="card--icon"></div>
      </div>
    </div>
  );
};

export default Categories;
