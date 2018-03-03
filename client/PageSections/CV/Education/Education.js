import React from "react";

import Card from "../Components/Card";

import styles from "./Education.scss";

const educations = [
  {
    title: "Hogeschool van Amsterdam",
    imagePath: "https://upload.wikimedia.org/wikipedia/en/f/fc/Hogeschool_van_amsterdam_logo.svg",
    subTitle: "Field of Study: Interaction Design",
    text: "September 2010 - January 2015"
  },
  {
    title: "Christelijke Scholengemeenschap Buitenveldert",
    imagePath: "https://pbs.twimg.com/profile_images/378800000797681015/8e0b515fbaa0bb07bf0e6526455beea4_400x400.jpeg",
    subTitle: "Havo",
    text: "September 2010 - July 2014"
  }
];

const Education = () => (
  <section>
    <h2>Education</h2>
    <section className={styles["education"]}>
      { educations.map((i) => (
        <Card key={i.title} {...i} />
      ))}
    </section>
  </section>
);

export default Education;
