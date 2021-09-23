import { useState, useEffect } from 'react'
import './SearchPage.css'
import SearchBar from '../search-bar/SearchBar'
import List from '../list/List'
import { getRestaurantsByName } from '../../service/Service'

export default function SearchPage() {
  const [input, setInput] = useState("")
  const [listDefault, setListDefault] = useState([])
  const [list, setList] = useState([])

  useEffect(() => {

    getData()

  }, [])

  // need to make it async when making API calls
  const getData = async () => {
    
    if (input.length > 0) {
      const res = await getRestaurantsByName(input)
      console.log(res);
      setListDefault(res.data)
      setList(res.data)
    }


  }

  // might have to make an async function
  const updateList = (input) => {
    getData()

    if (input.length === 0) {
      const emptyList = []
      setList(emptyList)
    } else {

      const filtered = listDefault.filter(ele => {
        return ele.name.toLowerCase().includes(input.toLowerCase())
      })
      setList(filtered)

    }

    setInput(input)

  }

  const displayList = () => {
    // user has added input, a list shows
    // user has added input, but list is empty,
    // a statement with no restaurants should show
    if (input.length > 0) {
      if (list.length > 0) {
        return (
          <>
            <List list={list} />
          </>
        )
      } else {
        return (
          <>
            <p style={{paddingLeft: '10px'}}>No restaurants found</p>
          </>
        )
      }
    } else {
      return null
    }
  }

  const checkForInput = () => {
    if (input.length > 0) {
      return 'block'
    } else {
      return 'none'
    }
  }

  return (
    <>
      <SearchBar
        input={input}
        updateList={updateList}
      />
      <div
        style={{display: `${checkForInput()}`}}
        className="list-container">
        { displayList() }
      </div>
    </>
  )
}