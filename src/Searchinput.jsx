const SearchInput = ({ value, onChange }) => {
  function handleChange(event){
    onChange(event.target.value)
  }

  return(
    <input type="text" className="search" value={value} placeholder="Pesquisar" onChange={handleChange} />
  )
}

export default SearchInput