import React from "react";
import "./style.css";
const CharacterCard = props => (
  <div className="m-2 img waves-effect" onClick={props.imageClick}>
  <div className="img-container z-depth-1 mr-2 mb-2">
    <img className="img" alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
  </div>
</div>
);

export default CharacterCard;