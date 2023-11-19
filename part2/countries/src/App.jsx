import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Country from "./components/country/Country";
import Detail from "./components/detail/Detail";
import SearchBar from "./components/searchbar/SearchBar";

function App() {
  const [countries, setCountries] = useState([]);

  const [filteredCountries, setfilteredCountries] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  };

  const findCountrieHandler = (event) => {
    const inputText = event.target.value.toLowerCase();
    if (inputText.length) {
      const filter = countries.filter((country) =>
        country.name.common.toLowerCase().includes(inputText)
      );
      setfilteredCountries(filter);
    } else {
      setfilteredCountries([]);
    }
  };

  const countriesLength = filteredCountries.length;

  useEffect(hook, []);
  return (
    <div>
      <SearchBar handler={findCountrieHandler} label="find countries"/>
      <div>
        {countriesLength > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : countriesLength <= 10 && countriesLength > 1 ? (
          filteredCountries.map((country) => (
            <Country key={country.cca3} country={country} />
          ))
        ) : countriesLength === 1 ? (
          <Detail country={filteredCountries[0]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
