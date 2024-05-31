import "./DefaultButton.css"
const DefaultButton = ({ buttonText, onclick, styles, icon = null}) => {
  return (
    <button
    className="default-button"
    style={styles}
    onClick={onclick}
    >
      {icon}
      {buttonText}
    </button>
  );
};

export default DefaultButton;
