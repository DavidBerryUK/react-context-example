import React from "react";

//
// Restore Button
//
interface IProperties {
  onClick?: () => void;
}

const UIButtonRestore: React.FC<IProperties> = (props) => {
  const handleOnClickEvent = (event: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className="ui-button restore" onClick={handleOnClickEvent}>
      Restore
    </button>
  );
};

export default UIButtonRestore;
