import React from "react";

import Card from "../../Card";

import styles from "./Jobs.scss";

const jobs = [
  {
    title: "Werf3",
    imagePath: "https://pbs.twimg.com/profile_images/967903155/Werf3_avatar_400x400.png",
    subTitle: "UX designer",
    text: "July 2013 - August 2013"
  },
  {
    title: "GridLine",
    imagePath: "https://www.gridline.nl/assets/products/GridLine-geenBeschrijving-178f6103d469ae5dd9d101921a88ba3c.svg",
    subTitle: "UX designer / Front-end developer",
    text: "March 2015 - present"
  }
];

const Jobs = () => (
  <section className={styles["jobs"]}>
    <h2>Jobs</h2>
    <section className={styles["jobs-overview"]}>
      { jobs.map((j) => (
        <Card key={j.title} {...j} />
      ))}
    </section>
  </section>
);

export default Jobs;
