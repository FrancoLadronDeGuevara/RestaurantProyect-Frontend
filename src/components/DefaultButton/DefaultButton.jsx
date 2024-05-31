import "./DefaultButton.css"
const DefaultButton = ({ buttonText, onclick, styles}) => {
  return (
    <button
    className="default-button"
    style={styles}
    onClick={onclick}
    >
      {buttonText}
    </button>
  );
};

export default DefaultButton;
