/* eslint-disable react/prop-types */
import Input from "../input/Input"

const SearchBar = ({handler}) => {
  return (
    <Input name="Filter shown with" handler={handler}/>
  )
}

export default SearchBar