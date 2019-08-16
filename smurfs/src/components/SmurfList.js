import React from "react";
import Smurf from "./Smurf";

const SmurfList = ({ list }) => {
  console.log("list stuffs", list);
  return (
    <div className="item-conatiner">
      {list && list.map(item => <Smurf key={item.id} item={item} />)}
    </div>
  );
};

export default SmurfList;
