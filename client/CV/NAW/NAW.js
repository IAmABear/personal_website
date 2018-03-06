import React from "react";

import styles from "./NAW.scss";

const NAW = () => (
  <section className={styles["naw"]}>
    <ul>
      <li className="flow-text">
        <i className="small material-icons">account_box</i>
        Floyd van Boksel
      </li>
      <li className="flow-text">
        <i className="small material-icons">phone</i>
        +316 43058239
      </li>
      <li className="flow-text">
        <i className="small material-icons">mail</i>
        floyd.van.boksel@gmail.com
      </li>
      <li  className="flow-text">
        <i className="small material-icons">home</i>
        Amsterdam, The Netherlands
      </li>
    </ul>
  </section>
);

export default NAW;
