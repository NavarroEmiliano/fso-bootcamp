import Person from "../person/Person";

/* eslint-disable react/prop-types */
const Numbers = ({ persons, removeNumber }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(({ name, number ,id}) => (
        <Person key={name} id={id}name={name} number={number} removeNumber={removeNumber}/>
      ))}
    </div>
  );
};

export default Numbers;
