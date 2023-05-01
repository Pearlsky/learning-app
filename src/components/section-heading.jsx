/* eslint-disable react/prop-types */
const SectionHeading = ({ heading, children }) => (
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-xl font-medium">{heading}</h2>
    </div>
    <div>{children}</div>
  </div>
);

export default SectionHeading;
