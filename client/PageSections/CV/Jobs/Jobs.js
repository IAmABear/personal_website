import React from "react";

import styles from "./Jobs.scss";

const Jobs = () => (
  <section className={styles["jobs"]}>
    <h2>Jobs</h2>
    <article>
      <h3>GridLine</h3>
      <p>Front-end developer / UX designer</p>
      <p>March 2015 - present</p>
    </article>
    <article>
      <h3>Werf3</h3>
      <p>UX designer</p>
      <p>July 2013 - August 2013</p>
    </article>
  </section>
);

export default Jobs;
