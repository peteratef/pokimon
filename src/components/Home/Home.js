import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/pokemonActions";
import Pagination from "../Pagination/Pagination";
import EachPokemon from "./EachPokemon";
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    var exampleItems = this.props.items;

    this.state = {
      inputValue: "",
      depSelectedValue: "select_Department",
      exampleItems: exampleItems,
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  componentDidMount() {
    this.props.onInitFunction("");
  }

  handleInputChange = (value) => {
    let inputValueq = value.target.value;
    this.setState({ inputValue: inputValueq });

    this.props.onChangeFilter(inputValueq);
  };
  render() {
    let itemList = this.state.pageOfItems.map((item) => {
      return (
        <EachPokemon
          key={item.name}
          item={item}
          onViewDetails={(id) => {
            this.props.history.push(`/view/${id}`);
          }}
        />
      );
    });

    return (
      <div className="container">
        <div className="search">
          <div className="searchFor">
            <input
              className="input_field"
              type="text"
              placeholder="search For Pokémons"
              onChange={this.handleInputChange}
              value={this.state.inputValue}
            />
          </div>
        </div>
        <h3 className="center">Pokémons Items</h3>

        <div className="box">{itemList}</div>
        <center>
          <div className="text-center">
            <Pagination
              items={
                this.state.inputValue.length > 0 ||
                this.state.depSelectedValue !== "select_Department"
                  ? this.props.fitlteredItems
                  : this.props.items
              }
              onChangePage={this.onChangePage}
            />
          </div>
        </center>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    fitlteredItems: state.fitlteredItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInitFunction: (mainObject) => dispatch(actions.initFunction(mainObject)),

    onChangeFilter: (inputValue) => dispatch(actions.changeFilter(inputValue)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
