/* eslint-disable react/prop-types */
const Person = ({id, name, number ,removeNumber}) => {
  return (
    <div key={name}>
      <span>{name} </span>
      <span>{number}</span>
      <button onClick={()=>removeNumber(id,name)}>Delete</button>
    </div>
  );
};

export default Person;
