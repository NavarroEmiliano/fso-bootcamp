/* eslint-disable react/prop-types */
import Input from "../input/Input";
const Form = ({
  submit,
  newNameHandler,
  newNumberHandler,
  newName,
  newNumber,
}) => {
  return (
    <form onSubmit={submit}>
      <Input name="name" handler={newNameHandler} value={newName} />
      <Input name="number" handler={newNumberHandler} value={newNumber} />
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Form;
