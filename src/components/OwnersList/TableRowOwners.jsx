import React from 'react'

function TableRowOwners({ name, numberOfShares }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{numberOfShares}</td>
    </tr>
  )
}

export default TableRowOwners
