/* eslint-disable react/prop-types */

const Button = ({handler,text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

export default Button