import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import NawList from "../NawList";

import styles from "./Contact.scss";

const Contact = () => (
  <ScrollableAnchor id="Contact">
    <section className={styles["contact"]}>
      <NawList />
    </section>
  </ScrollableAnchor>
);

export default Contact;
