/* eslint-disable react/prop-types */

import { useState } from "react";
import Detail from "../detail/Detail";

const Country = ({ country }) => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div>
      {country.name.common}{" "}
      <button onClick={showHandler}>{show ? "Hide" : "Show"}</button>
      {show && <Detail country={country} />}
    </div>
  );
};

export default Country;
