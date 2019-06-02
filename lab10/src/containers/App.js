import React, { Component } from "react";
import "./App.css";
import Input from "../components/Input/Input";
import {
  changePlnsToDollars,
  changeDollarsToPlns
} from "../services/currency/currency";

const currency = {
  dollars: "dollars",
  plns: "plns"
};

var onlyNumber = new RegExp("^\\d+$");

const changeStateValue = (name, value) => {
  const { dollars, plns } = currency;
  if (name === plns) {
    return {
      [name]: value,
      dollars: changePlnsToDollars(Number(value))
    };
  } else if (name === dollars) {
    return {
      [name]: value,
      plns: changeDollarsToPlns(Number(value))
    };
  }
};

class App extends Component {
  state = {
    plns: "",
    dollars: ""
  };

  onHandleChange = ({ target: { value, name } }) => {
    if (value !== "") {
      if (!onlyNumber.test(value)) {
        return;
      }
    }
    const newState = changeStateValue(name, value);

    this.setState(newState);
  };

  render() {
    const { plns, dollars } = this.state;
    return (
      <div className="App">
        <Input name="plns" value={plns} onChange={this.onHandleChange} />
        <Input name="dollars" value={dollars} onChange={this.onHandleChange} />
      </div>
    );
  }
}

export default App;
