import ButtonProps from "./Button.props";

const Button: React.FC<ButtonProps> = ({ text, style, onClick }) => {
  return (<div style={style} onClick={onClick}>
    {text}
  </div>);
};

export default Button;