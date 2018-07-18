import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFun, subFun } from "./index.redux";

@connect(
    state=>({num:state.counter}),
    { addFun, subFun }
)
class App extends Component {
  render() {
        return (
            <div>
                <button onClick={this.props.addFun}>加</button>
                <button onClick={this.props.subFun}>减</button>
                <h1>当前数值{this.props.num}</h1>
            </div>
        );
  }
}

export default App;
