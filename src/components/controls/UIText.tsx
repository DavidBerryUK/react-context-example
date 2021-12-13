import React from "react";

//
// Text Input
//
// displays a label and text input box
//
interface IProperties {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const UIText: React.FC<IProperties> = (props) => {
  const handleOnChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="ui-text">
      <label>
        {props.label}
        <input type="text" value={props.value} onChange={handleOnChangeEvent} />
      </label>
    </div>
  );
};

export default UIText;
