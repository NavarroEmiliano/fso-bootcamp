/* eslint-disable react/prop-types */
const SearchBar = ({handler,label}) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handler} />
    </div>
  );
};

export default SearchBar;
