import React from "react";

import styles from "./Skills.scss";

const Skills = () => (
  <section className={styles["skills"]}>
    <h2>Skills</h2>

    <ul>
      <li>HTML(5)</li>
      <li>CSS(3)</li>
      <li>JavaScript</li>
      <li>Ruby (on Rails)</li>
    </ul>

    <ul>
      <li>React</li>
      <li>Sass</li>
      <li>Haml</li>
      <li>GraphQl</li>
    </ul>
  </section>
);

export default Skills;
