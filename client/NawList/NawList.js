import React from "react";

import styles from "./NawList.scss";

const nawData = [
  { icon: "account_box", text: "Floyd van Boksel" },
  { icon: "phone", text: "+316 43058239" },
  { icon: "mail", text: "floyd.van.boksel@gmail.com" },
  { icon: "home", text: "Amsterdam, The Netherlands" }
];

const NawList = () => (
  <ul className={styles["naw-list"]}>
    { nawData.map((naw, i) => (
      <li key={i} className="flow-text">
        <i className="small material-icons">{ naw.icon }</i>
        { naw.text }
      </li>
    ))}
  </ul>
);

export default NawList;
