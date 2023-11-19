import { useEffect, useState } from "react";
import "./App.css";
import Numbers from "./components/numbers/Numbers";
import SearchBar from "./components/searchbar/SearchBar";
import Form from "./components/form/Form";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const personsFiltered = !nameFilter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
      );

  const handleFilter = (event) => {
    setNameFilter(event.target.value);
  };

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName.trim(),
      number: newNumber,
    };
    if (persons.some(({ name }) => name === nameObject.name)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };

  const hook = () => {
    axios
    .get("http://localhost:3001/persons")
    .then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBar handler={handleFilter} />

      <Form
        submit={addName}
        newNameHandler={handleNewNameChange}
        newNumberHandler={handleNewNumberChange}
        newName={newName}
        newNumber={newNumber}
      />

      <Numbers persons={personsFiltered} />
    </div>
  );
}

export default App;
