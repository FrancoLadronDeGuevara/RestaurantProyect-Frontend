import "./DefaultButton.css"
const DefaultButton = ({ buttonText, onclick}) => {
  return (
    <button
    className="default-button"
    onClick={onclick}
    >
      {buttonText}
    </button>
  );
};

export default DefaultButton;
