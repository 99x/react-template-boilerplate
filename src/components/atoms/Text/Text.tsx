import TextProps from "./Text.props"

const Text: React.FC<TextProps> = ({ text, style }) => {
  return (<div style={style}>
    {text}
  </div>)
};

export default Text;