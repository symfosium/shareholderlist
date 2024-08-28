import React from 'react'

function TableRowShareholders({ name, ssn, email, address }) {
  console.log({ name, ssn, email, address })
  return (
    <tr>
      <td>{name}</td>
      <td>{ssn}</td>
      <td>{email}</td>
      <td>{address}</td>
    </tr>
  )
}

export default TableRowShareholders
