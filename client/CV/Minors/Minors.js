import React from "react";

import styles from "./Minors.scss";

const Minors = () => (
  <section className={styles["minor"]}>
    <h2>Minors</h2>
    <ul>
      <li className="flow-text">Datavisualisation <i>(September 2013 - February 2014)</i></li>
      <li className="flow-text">Mobile interaction <i>(February 2014 - June 2014)</i></li>
    </ul>
  </section>
);

export default Minors;
