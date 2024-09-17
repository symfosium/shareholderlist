import React from 'react'
import { Tr, Td } from 'react-super-responsive-table'

function TableRowShareholders({ name, encryptedSsn, email, address }) {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{encryptedSsn}</Td>
      <Td>{email}</Td>
      <Td>{address}</Td>
      <Td>
        <button>Edit</button>
      </Td>
    </Tr>
  )
}

export default TableRowShareholders
