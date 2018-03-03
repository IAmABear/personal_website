import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from "./CV.scss";

import Education from "./Education";
import Internships from "./Internships";
import Jobs from "./Jobs";
import Languages from "./Languages";
import Minors from "./Minors";
import NAW from "./NAW";
import Profile from "./Profile";
import Skills from "./Skills";

const CV = () => (
  <ScrollableAnchor id="CV">
    <section className={styles["cv"]}>
      <h1 className={styles["title"]}>Curriculum vitae Floyd van Boksel</h1>
      <section className={styles["contents"]}>
        <section>
          <NAW />
          <Profile />
        </section>

        <Skills />

        <section>
          <Jobs />
          <Internships />
        </section>

        <section>
          <Education />

          <section>
            <Minors />
            <Languages />
          </section>
        </section>
      </section>
    </section>
  </ScrollableAnchor>
);

export default CV;
