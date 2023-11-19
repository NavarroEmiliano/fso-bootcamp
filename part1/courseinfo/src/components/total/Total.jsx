/* eslint-disable react/prop-types */

const Total = ({ course }) => {
  const { parts } = course;
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <div>
      <p style={{ fontWeight: "bolder" }}>Total of exercises {total}</p>
    </div>
  );
};

export default Total;
