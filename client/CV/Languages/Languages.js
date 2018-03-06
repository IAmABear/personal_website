import React from "react";

import styles from "./Languages.scss";

const Languages = () => (
  <section className={styles["languages"]}>
    <h2>Languages</h2>
    <ul>
      <li className="flow-text">Dutch: Decent</li>
      <li className="flow-text">English: Good</li>
    </ul>
  </section>
);

export default Languages;
