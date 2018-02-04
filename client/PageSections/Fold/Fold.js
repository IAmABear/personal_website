import React from "react";

import styles from "./Fold.scss";

const Fold = () => (
  <section className={styles["fold"]}>
    <h1 className={styles["title"]}>Floyd van Boksel</h1>
    <h2 className={styles["sub-title"]}>Front-end developer</h2>

    <ul className={styles["nav-links"]}>
      <li>
        <button>
          <a href="#">CV</a>
        </button>
      </li>
      <li>
        <button>
          <a href="#">Contact</a>
        </button>
      </li>
    </ul>
  </section>
);

export default Fold;
