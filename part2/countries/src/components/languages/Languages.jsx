/* eslint-disable react/prop-types */

const Languages = ({ country }) => {
  return (
    <div>
      <h3>Languages</h3>
      <ul>
        {Object.keys(country.languages).map((lang) => (
          <li key={lang}>{country.languages[lang]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
