import React from "react";

import styles from "./Education.scss";

const Education = () => (
  <section className={styles["education"]}>
    <h2>Education</h2>
    <article>
      <h3>Hogeschool van Amsterdam Amsterdam</h3>
      <ul>
        <li>SEPTEMBER 2010 - JANUARI 2015</li>
        <li>HBO Informatica</li>
        <li>Field of study: Interaction Design</li>
      </ul>
    </article>

    <article>
      <h3>Christelijke Scholengemeenschap Buitenveldert</h3>
      <ul>
        <li>SEPTEMBER 2014 - JULI 2010</li>
        <li>Havo</li>
      </ul>
    </article>
  </section>
);

export default Education;
