/* eslint-disable react/prop-types */
const Button = ({ label, children, onClick }) => (
  <button className="flex center" onClick={onClick}>
    <span className="sr-only">{label}</span>
    {children}
  </button>
);

export default Button;
