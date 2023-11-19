import Person from "../person/Person";

/* eslint-disable react/prop-types */
const Numbers = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => (
        <Person key={name} name={name} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
