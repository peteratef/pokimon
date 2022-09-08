import React, { Component } from "react";
import { connect } from "react-redux";

import "./ViewPokimon.css";

class ViewPokimon extends Component {
  constructor() {
    super();
    this.state = {
      abilities: "",
      name: "",
    };
  }

  componentDidMount() {
    if (typeof this.props.match.params.id == "undefined") {
    } else {
      const pokimonId = this.props.match.params.id;
      let pokimonDetails = this.props.items.find(
        (item) => item.name === parseInt(pokimonId)
      );

      this.setState({
        abilities: pokimonDetails ? pokimonDetails.abilities : "",
        name: this.props.match.params.id,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <a onClick={() => this.props.history.push("/")}>Back to all Pokimon</a>
        <br />

        <div>
          {this.state.name} Details <br />
          {/* <br />
          {this.state.abilities.ability.name} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPokimon);
