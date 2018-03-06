import React from "react";

import styles from "./App.scss";

import Fold from "./Fold";
import CV from "./CV";
import Contact from "./Contact";

const App = () => (
  <section className={styles["application"]}>
    <Fold />
    <CV />
    <Contact />
  </section>
);

export default App;
