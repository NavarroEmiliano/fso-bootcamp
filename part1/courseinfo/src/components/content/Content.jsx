/* eslint-disable react/prop-types */

import Part from "../part/Part";

const Content = ({ course }) => {
  const { parts } = course;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

export default Content;
