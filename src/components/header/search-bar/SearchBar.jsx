
export default function SearchBar(props) {
  const {input, updateList} = props

  return (
    <>
      <input
        placeholder="Seach Restaurants"
        value={input}
        onChange={(e) => updateList(e.target.value)}
      />
    </>
  )
}