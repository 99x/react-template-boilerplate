import TextProps from './Text.props';

const Text: React.FC<TextProps> = ({ text, style }) => (
  <div style={style}>
    {text}
  </div>
);

export default Text;
