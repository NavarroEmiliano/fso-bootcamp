const Input = ({name,handler,value}) => {
  return (
    <div>
    {name}: <input onChange={handler} value={value} />
  </div>
  )
}

export default Input