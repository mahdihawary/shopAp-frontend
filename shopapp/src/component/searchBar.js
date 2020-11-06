import React from 'react'

const searchBar=({filterTerm, filterChange})=>{



    return (
    <div>
        <label >Search</label>
        <input type="text" value={filterTerm} onChange={e=>filterChange(e)}></input>
    </div>
        )
}
export default searchBar