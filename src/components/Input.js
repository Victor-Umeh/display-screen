const Input = ({ setBgColor, bgColor }) => {
  const handleChange = (e) => {
    setBgColor(e.target.value);
  };
  return (
    <input
      type="text"
      value={bgColor}
      className="input"
      onChange={handleChange}
    />
  );
};

export default Input;
