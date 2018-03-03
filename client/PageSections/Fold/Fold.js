import React from "react";

import styles from "./Fold.scss";

const Fold = () => (
  <section className={styles["fold"]}>
    <h1 className={styles["title"]}>Floyd van Boksel</h1>
    <h2 className={styles["sub-title"]}>Front-end developer</h2>

    <ul className={styles["nav-links"]}>
      <li>
        <a href="#CV" className="waves-effect waves-light btn">CV</a>
      </li>
      <li>
        <a href="#" className="waves-effect waves-light btn">Contact</a>
      </li>
    </ul>
  </section>
);

export default Fold;
