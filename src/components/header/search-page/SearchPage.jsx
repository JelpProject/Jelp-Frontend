import { useState, useEffect } from 'react'
import './SearchPage.css'
import SearchBar from '../search-bar/SearchBar'
import List from '../list/List'

export default function SearchPage() {
  const [input, setInput] = useState("")
  const [listDefault, setListDefault] = useState([])
  const [list, setList] = useState([])

  const sampleData = [
    {
      id: 1,
      name: "Tost Cafe"
    },
    {
      id: 2,
      name: "Taco Bell"
    },
    {
      id: 3,
      name: "Halal Munchies"
    },
    {
      id: 4,
      name: "Kimbob Spot"
    },
    {
      id: 5,
      name: "Deli from the Corner"
    }
  ]

  useEffect(() => {
    getData()
  }, [])

  // need to make it async when making API calls
  const getData = () => {

    setListDefault(sampleData)
    setList(sampleData)

  }

  // might have to make an async function
  const updateList = (input) => {

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