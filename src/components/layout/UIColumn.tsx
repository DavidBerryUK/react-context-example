import React from "react";

interface IProperties {}

const UIColumn: React.FC<IProperties> = (props) => {
  return <div className="ui-column">{props.children}</div>;
};

export default UIColumn;
