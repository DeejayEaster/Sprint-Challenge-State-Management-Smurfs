import React from "react";
import axios from "axios";

const Smurf = ({ item }) => {
  const deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log("delete", res))
      .catch(function(error) {
        console.log(error);
      });
    window.location.href = window.location.href;
  };
  console.log("list of smurfs", item);
  return (
    <>
      <h2>{item.name}</h2>
      <button onClick={() => deleteSmurf(item.id)}>Smurf Off!</button>
    </>
  );
};

export default Smurf;
