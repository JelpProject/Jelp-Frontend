import './List.css'

const List = ({ list = [] }) => {
  return (
    <>
      { list.map((data,index) => {
          if (data) {
            return (
              <div className="list-item" key={index}>
                {/* need to change it to links to our restaurants */}
                <label>{data.name}</label>
              </div>	
            )	
          }
        return null
      }) }
    </>
  )
}

export default List