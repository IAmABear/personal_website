import React from "react";

import styles from "./App.scss";

import {
 Fold,
 CV,
 Contact
} from "./PageSections";

const App = () => (
  <section className={styles["application"]}>
    <Fold />
    <CV />
    <Contact />
  </section>
);

export default App;
