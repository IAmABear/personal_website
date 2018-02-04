import React from "react";

import styles from "./App.scss";

import Fold from "./PageSections/Fold";

const App = () => (
  <section className={styles["application"]}>
    <Fold />
  </section>
);

export default App;
