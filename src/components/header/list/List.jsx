
const List = ({ list = [] }) => {
  return (
    <>
    { list.map((data,index) => {
        if (data) {
          return (
            <div key={index}>
              <h1>{data.name}</h1>
	          </div>	
    	    )	
    	  }
    	return null
    }) }
    </>
  )
}

export default List