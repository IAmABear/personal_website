import React from "react";

import styles from "./Card.scss";

const Card = ({ imagePath, title, score, experience, bigLogo }) => {
  const starAmount = new Array(score).fill(" ");
  const emptyStarts = new Array(5 - score).fill(" ");

  return (
    <section className={styles["card-wrapper"]}>
      <div className={`${styles["card"]} card horizontal`}>
        <div className={`${styles["image"]} card-image ${ bigLogo ? styles["-whitespace"] : ''}`}>
          <img src={ imagePath } />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h4 className={styles["title"]}>{ title }</h4>
            { starAmount.map((_a, i) => (
              <i key={i} className="small material-icons">star</i>
            ))}

            { emptyStarts.map((_a, i) => (
              <i key={i} className="small material-icons">star_border</i>
            ))}

            <p className="flow-text"><i>{ experience }</i></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
