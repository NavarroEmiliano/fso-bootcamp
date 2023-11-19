/* eslint-disable react/prop-types */
const Person = ({ name, number }) => {
  return (
    <div key={name}>
      <span>{name} </span>
      <span>{number}</span>
    </div>
  );
};

export default Person;
