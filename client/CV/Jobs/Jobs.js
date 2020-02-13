import React from "react";

import Card from "../../Card";

import styles from "./Jobs.scss";

const jobs = [
  {
    title: "Werf3",
    imagePath:
      "http://www.werf3.nl/default/includes/themes/Werf3/images/werf3.png",
    subTitle: "UX designer",
    text: "July 2013 - August 2013"
  },
  {
    title: "GridLine",
    imagePath:
      "https://scontent-amt2-1.xx.fbcdn.net/v/t31.0-8/266250_172670172795522_659943_o.jpg?_nc_cat=107&_nc_ohc=fG1qj64hjokAX8AgAYK&_nc_ht=scontent-amt2-1.xx&oh=c4b310d3f290f844c8c40c671728b175&oe=5EC74157",
    subTitle: "Front-end developer",
    text: "March 2015 - June 2018"
  },

  {
    title: "Transavia",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Transavia_logo.svg/1280px-Transavia_logo.svg.png",
    subTitle: "Front-end developer",
    text: "June 2018 - Oktober 2019"
  },
  {
    title: "Saxum",
    imagePath:
      "https://sound2light.nl/wp-content/uploads/2018/12/Saxum.png",
    subTitle: "Front-end developer",
    text: "June 2018 - present"
  },
  {
    title: "Nationale Nederlanden",
    imagePath:
      "https://www.honigenhonig.nl/media/k2/items/cache/1f9ed10eb56cd40cd992151d37066c7e_XL.jpg",
    subTitle: "Front-end developer",
    text: "November 2019 - present"
  }
];

const Jobs = () => (
  <section className={styles["jobs"]}>
    <h2>Jobs</h2>
    <section className={styles["jobs-overview"]}>
      {jobs.map(j => (
        <Card key={j.title} type="jobs" {...j} />
      ))}
    </section>
  </section>
);

export default Jobs;
