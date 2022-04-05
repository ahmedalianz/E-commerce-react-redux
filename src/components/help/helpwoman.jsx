import "./help.css";

import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function HelpWoman() {
  const [none, setNone] = useState("");
  const nohelp = () => {
    setNone("none");
  };
  return (
    <div className={`help-block ${none}`}>
      <img className="help-woman" src="images/wo.png" alt="" />
      <div className="help-text">
        <button onClick={nohelp} className="close">
          X
        </button>
        <h1>هل تحتاج للمساعده يمكنك تفقد مركز المساعده</h1>
        <Link onClick={nohelp} className="help-link" to="/help">
          <button className="help-button">مركز المساعده</button>
        </Link>
      </div>
    </div>
  );
}
