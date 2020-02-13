import React from "react";

import styles from "./Skills.scss";

import Card from "../../Card";
import Stars from "./Stars";

const skills = [
  {
    title: "HTML(5)",
    imagePath: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    score: 4,
    text: "+/- 8 years",
    horizontal: true
  },
  {
    title: "CSS(3)",
    imagePath:
      "http://iconshow.me/media/images/logo/brand-logo-icon/png/512/css3-512.png",
    score: 3,
    text: "+/- 8 years",
    horizontal: true
  },
  {
    title: "Balsamiq",
    imagePath:
      "https://blog.balsamiq.com/wp-content/uploads/2017/09/Balsamiq-Wireframes-Thumbnail-Final-0.png",
    score: 4,
    text: "+/- 6 years",
    horizontal: true
  },
  {
    title: "Ruby",
    imagePath:
      "https://ih0.redbubble.net/image.270426643.3373/flat,800x800,075,f.jpg",
    score: 3,
    text: "+/- 4 years",
    bigLogo: true,
    horizontal: true
  },
  {
    title: "React",
    imagePath: "https://cdn.worldvectorlogo.com/logos/react.svg",
    score: 4,
    text: "+/- 3 years",
    horizontal: true
  },
  {
    title: "GraphQL",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1024px-GraphQL_Logo.svg.png",
    score: 2,
    text: "+/- 1 years",
    horizontal: true
  },
  {
    title: "Sass",
    imagePath:
      "http://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
    score: 4,
    text: "+/- 4 years",
    bigLogo: true,
    horizontal: true
  },
  {
    title: "JavaScript",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Unofficial_JavaScript_logo.svg/480px-Unofficial_JavaScript_logo.svg.png",
    score: 4,
    text: "+/- 8 years",
    horizontal: true
  }
];

const Skills = () => (
  <section className={styles["skills"]}>
    <h2>Skills</h2>

    <section className={styles["current-skils"]}>
      {skills.map(l => (
        <Card key={l.title} {...l} subTitle={<Stars {...l} />} type="skills" />
      ))}
    </section>
  </section>
);

export default Skills;
