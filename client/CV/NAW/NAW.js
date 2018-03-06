import React from "react";

import styles from "./NAW.scss";

const nawData = [
  { icon: "account_box", text: "Floyd van Boksel" },
  { icon: "phone", text: "+316 43058239" },
  { icon: "mail", text: "floyd.van.boksel@gmail.com" },
  { icon: "home", text: "Amsterdam, The Netherlands" }
];

const NAW = () => (
  <section className={styles["naw"]}>
    <ul>
      { nawData.map((naw, i) => (
        <li key={i} className="flow-text">
          <i className="small material-icons">{ naw.icon }</i>
          { naw.text }
        </li>
      ))}
    </ul>
  </section>
);

export default NAW;
