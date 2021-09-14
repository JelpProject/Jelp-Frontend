import './List.css'
import { Link } from 'react-router-dom'

const List = ({ list = [] }) => {
  return (
    <>
      { list.map((data,index) => {
          if (data) {
            return (
              <div className="list-item" key={index}>
                <Link className="list-link" to={`/restaurant/${data.id}`}>
                  <label>{data.name}</label>
                </Link>
              </div>	
            )	
          }
        return null
      }) }
    </>
  )
}

export default List