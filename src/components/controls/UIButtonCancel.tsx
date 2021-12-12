import React from "react";

interface IProperties {
  onClick?: () => void;
}

const UIButtonCancel: React.FC<IProperties> = (props) => {
  const handleOnClickEvent = (event: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button className="ui-button cancel" onClick={handleOnClickEvent}>
      Cancel
    </button>
  );
};

export default UIButtonCancel;
