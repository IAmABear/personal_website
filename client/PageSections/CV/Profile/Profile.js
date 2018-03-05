import React from "react";

import styles from "./Profile.scss";

const Profile = () => (
  <section className={`${styles["profile"]} flow-text`}>
    <h2>Profile</h2>
    <p>Hi, my name is Floyd van Boksel, a UX-designer and a self-taught front-end developer; always looking to expand my programming knowledge and how to support all kind of devices without a hitch. Apart from that, I am always looking for a challenge both in, and outside work hours so hit me up for a chat over a beer or two.</p>
  </section>
);

export default Profile;
