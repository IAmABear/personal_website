import React, { PureComponent } from "react";
import LazyLoad from 'react-lazyload';

import styles from "./Card.scss";

class Card extends PureComponent {
  render() {
    const { imagePath, title, subTitle, text, horizontal, type } = this.props;

    return (
      <section className={styles["card-wrapper"]}>
        <div className={`${styles["card"]} ${horizontal ? styles['-horizontal'] : ''} card ${type ? styles[type] : ''}`}>
          <div className={`${styles["image"]} card-image`}>
            <LazyLoad height={80} width={80}>
              <img src={ imagePath } />
            </LazyLoad>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <h4 className={styles["title"]}>{ title }</h4>
              <h5 className="flow-text">{subTitle}</h5>
              <p className="flow-text"><i>{ text }</i></p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Card;
