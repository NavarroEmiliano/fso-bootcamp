import Languages from "../languages/Languages";
import Weather from "../weather/Weather";

/* eslint-disable react/prop-types */
const Detail = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital {country.capital}</p>
      <p>Population {country.population}</p>
      <Languages country={country}/>
      <img src={country.flags.png} alt={country.name.common} />
      <Weather country={country}/>
    </div>
  );
};

export default Detail;
