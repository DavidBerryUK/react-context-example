import React from "react";

interface IProperties {
  onClick?: () => void;
}

const UIButtonSave: React.FC<IProperties> = (props) => {
  const handleOnClickEvent = (event: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className="ui-button save" onClick={handleOnClickEvent}>
      Save
    </button>
  );
};

export default UIButtonSave;
