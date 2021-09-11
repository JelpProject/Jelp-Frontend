import './SearchBar.css'

export default function SearchBar(props) {
  const { input, updateList } = props
  
  const checkForInput = () => {
    if (input.length > 0) {
      return "5px 5px 0 0"
    } else {
      return "5px"
    }
  }

  return (
    <>
      <input
        style={{borderRadius: `${checkForInput()}`}}
        className="searchbar-input"
        placeholder="Search Restaurants"
        value={input}
        onChange={(e) => updateList(e.target.value)}
      />
    </>
  )
}