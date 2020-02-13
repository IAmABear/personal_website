import React from "react";

import Card from "../../Card";

import styles from "./Education.scss";

const educations = [
  {
    title: "Hogeschool van Amsterdam",
    imagePath:
      "https://cdn.freebiesupply.com/logos/large/2x/hogeschool-van-amsterdam-1-logo-svg-vector.svg",
    subTitle: "Field of Study: Interaction Design",
    text: "September 2010 - January 2015"
  }
];

const Education = () => (
  <section className={styles["education"]}>
    <h2>Education</h2>
    <section className={styles["educations"]}>
      {educations.map(i => (
        <Card key={i.title} type="education" {...i} />
      ))}
    </section>
  </section>
);

export default Education;
