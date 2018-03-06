import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

import styles from "./Contact.scss";

const contactText = [
  { icon: "account_box", text: "Floyd van Boksel" },
  { icon: "phone", text: "+316 43058239" },
  { icon: "mail", text: "floyd.van.boksel@gmail.com" },
  { icon: "home", text: "Amsterdam, The Netherlands" }
];

const Contact = () => (
  <ScrollableAnchor id="Contact">
    <section className={styles["contact"]}>
      <ul>
        { contactText.map((contactText, i) => (
          <li key={i} className="flow-text">
            <i className="small material-icons">{ contactText.icon }</i>
            { contactText.text }
          </li>
        ))}
      </ul>
    </section>
  </ScrollableAnchor>
);

export default Contact;
