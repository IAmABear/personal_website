import React from "react";

class Stars extends React.PureComponent {
  render() {
    const { score } = this.props;

    const starAmount = new Array(score).fill(" ");
    const emptyStarts = new Array(5 - score).fill(" ");

    return (
      <React.Fragment>
        { starAmount.map((_a, i) => (
          <i key={i} className="small material-icons">star</i>
        ))}

        { emptyStarts.map((_a, i) => (
          <i key={i} className="small material-icons">star_border</i>
        ))}
      </React.Fragment>
    );
  }
}

export default Stars;
