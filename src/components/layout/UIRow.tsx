import React from "react";

interface IProperties {
  alignRight?: boolean;
}

const UIRow: React.FC<IProperties> = (props) => {
  const className = `ui-row ${props.alignRight ? "right" : ""}`;

  return <div className={className}>{props.children}</div>;
};

export default UIRow;
