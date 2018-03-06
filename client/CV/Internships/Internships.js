import React from "react";

import Card from "../../Card";

import styles from "./Internships.scss";

const internships = [
  {
    title: "Werf3",
    imagePath: "https://pbs.twimg.com/profile_images/967903155/Werf3_avatar_400x400.png",
    subTitle: "UX designer",
    text: "February 2013 - July 2013"
  },
  {
    title: "GridLine",
    imagePath: "https://www.gridline.nl/assets/products/GridLine-geenBeschrijving-178f6103d469ae5dd9d101921a88ba3c.svg",
    subTitle: "UX designer / Front-end developer",
    text: "July 2014 - January 2015"
  }
];

const Internships = () => (
  <section className={styles["internships"]}>
    <h2>Internships</h2>
    <section className={styles["internships-overview"]}>
      { internships.map((i) => (
        <Card key={i.title} {...i} />
      ))}
    </section>
  </section>
);

export default Internships;
