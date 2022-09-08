import React from "react";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var { item } = this.props;

    return (
      <div className="card" key={item.name}>
        <div className="card-content">
          <div className="card-details">
            <div className="card-title">{item.name}</div>
          </div>
        </div>
        <div className="editDelete">
          <div
            className="centerLeftRight"
            onClick={() => this.props.onViewDetails(item.name)}
          >
            View Details
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
