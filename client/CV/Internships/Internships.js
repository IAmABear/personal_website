import React from "react";

import Card from "../../Card";

import styles from "./Internships.scss";

const internships = [
  {
    title: "Werf3",
    imagePath: "http://www.werf3.nl/default/includes/themes/Werf3/images/werf3.png",
    subTitle: "UX designer",
    text: "February 2013 - July 2013"
  },
  {
    title: "GridLine",
    imagePath: "https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/266250_172670172795522_659943_o.jpg?_nc_cat=107&_nc_ohc=fG1qj64hjokAX8AgAYK&_nc_ht=scontent-amt2-1.xx&oh=c4b310d3f290f844c8c40c671728b175&oe=5EC74157",
    subTitle: "Front-end developer",
    text: "July 2014 - January 2015"
  }
];

const Internships = () => (
  <section className={styles["internships"]}>
    <h2>Internships</h2>
    <section className={styles["internships-overview"]}>
      {internships.map((i) => (
        <Card key={i.title} type="internships" {...i} />
      ))}
    </section>
  </section>
);

export default Internships;
