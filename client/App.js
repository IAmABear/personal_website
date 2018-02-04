import React from "react";

import styles from "./App.scss";

import {
 Fold,
 CV
} from "./PageSections";

const App = () => (
  <section className={styles["application"]}>
    <Fold />
    <CV />
  </section>
);

export default App;
