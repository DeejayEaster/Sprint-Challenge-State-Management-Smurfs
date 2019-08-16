import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getData } from "../store/actions";
import SmurfList from "./SmurfList";
import NewSmurfForm from "./NewSmurfForm";

const App = props => {
  useEffect(() => {
    if (props.smurfs.length === 0) {
      props.getData();
    }
  }, [props.smurfs]);
  // console.log("these here props:", props);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <button onClick={props.getData}>update list</button>
      <SmurfList list={props.smurfs} />
      <NewSmurfForm />
    </div>
  );
};

const mapStatesToProp = state => {
  console.log("App.js map-state-to-props", state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStatesToProp,
  { getData }
)(App);
