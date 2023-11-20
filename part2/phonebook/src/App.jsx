import { useEffect, useState } from "react";
import "./App.css";
import Numbers from "./components/numbers/Numbers";
import SearchBar from "./components/searchbar/SearchBar";
import Form from "./components/form/Form";
import personsService from "./services/persons";

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
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find(
          (person) => person.name === nameObject.name
        );
        const newPersonObject = { ...person, number: newNumber };

        personsService
          .updatePerson(newPersonObject)
          .then((updatedPerson) => {
            const personsFilter = persons.map((person) =>
              person.id !== newPersonObject.id ? person : updatedPerson
            );
            setPersons(personsFilter);
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => console.log(error.message));
      }
    } else {
      personsService
        .addPerson(nameObject)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => console.log(error.message));
    }
  };

  const removeNumber = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personsService
        .removePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => console.log(error.message));
    }
  };

  const personsFiltered = !nameFilter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
      );

  useEffect(() => {
    personsService
      .getAll()
      .then((allPersons) => {
        setPersons(allPersons);
      })
      .catch((error) => console.log(error.message));
  }, []);

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

      <Numbers persons={personsFiltered} removeNumber={removeNumber} />
    </div>
  );
}

export default App;
