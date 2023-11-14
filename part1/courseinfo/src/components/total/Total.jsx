/* eslint-disable react/prop-types */

const Total = ({ course }) => {
  const { parts } = course;
  return (
    <div>
      <p>
        Number of exercises{" "}
        {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
      </p>
    </div>
  );
};

export default Total;
