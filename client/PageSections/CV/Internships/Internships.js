import React from "react";

import styles from "./Internships.scss";

const Internships = () => (
  <section className={styles["internships"]}>
    <h2>Internships</h2>
    <article>
      <h3>GridLine</h3>
      <p>Front-end developer / UX designer</p>
      <p>July 2014 - Januari 2015</p>
    </article>
    <article>
      <h3>Werf3</h3>
      <p>UX designer</p>
      <p>Februari 2013 - July 2013</p>
    </article>
  </section>
);

export default Internships;
