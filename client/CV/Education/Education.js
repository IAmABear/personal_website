import React from "react";

import Card from "../../Card";

import styles from "./Education.scss";

const educations = [
  {
    title: "Hogeschool van Amsterdam",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Hogeschool_van_amsterdam_logo.svg",
    subTitle: "Field of Study: Interaction Design",
    text: "September 2010 - January 2015"
  }
];

const Education = () => (
  <section className={styles["education"]}>
    <h2>Education</h2>
    <section className={styles["educations"]}>
      {educations.map(i => (
        <Card key={i.title} {...i} />
      ))}
    </section>
  </section>
);

export default Education;
