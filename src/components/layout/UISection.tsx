import React from "react";

interface IProperties {
  title: string;
}

const UISection: React.FC<IProperties> = (props) => {
  return (
    <div className="ui-section">
      <div className="ui-title">{props.title}</div>
      <div className="ui-body">{props.children}</div>
    </div>
  );
};

export default UISection;
