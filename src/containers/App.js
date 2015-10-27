import React from "react";
import { connect } from "react-redux";
import { searchProducts } from "../actions";

@connect(state => state.products)
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(searchProducts("shoes"))
  }
  render() {
    return <h1>It Works!</h1>
  }
}

export default App;