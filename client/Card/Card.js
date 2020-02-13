import React, { PureComponent, Fragment } from "react";
import LazyLoad from 'react-lazyload';

import styles from "./Card.scss";

class Card extends PureComponent {
  render() {
    const { imagePath, title, subTitle, text, horizontal, type } = this.props;

    return (
      <section className={styles["card-wrapper"]}>
        <div className={`${styles["card"]} ${horizontal ? styles['-horizontal'] : ''} card ${type ? styles[type] : ''}`}>
          {type !== "skills"
            ? <Fragment>

              <div className={`${styles["image"]} card-image`}>
                <LazyLoad height={80} width={80}>
                  <img src={imagePath} />
                </LazyLoad>
              </div>

              <div className={styles["job"]}>
                <h4 className={styles["title"]} style={{ margin: "1rem 1rem 0 0" }}>{title}</h4>
                <h5 className="flow-text" style={{ margin: "0" }}>{subTitle}</h5>
              </div>

              <p className="flow-text"><i>{text}</i></p>
            </Fragment>
            : <Fragment>
              <div className={`${styles["image"]} card-image`}>
                <LazyLoad height={80} width={80}>
                  <img src={imagePath} />
                </LazyLoad>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className={styles["title"]}>{title}</h4>
                  <h5 className="flow-text">{subTitle}</h5>
                  <p className="flow-text"><i>{text}</i></p>
                </div>
              </div>
            </Fragment>
          }
        </div>
      </section >
    );
  }
}

export default Card;
