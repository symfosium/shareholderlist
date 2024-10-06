import React from 'react'
import { Tr, Td } from 'react-super-responsive-table'

function TableRowShareholders({ shareholder, onEditClick }) {
  return (
    <Tr>
      <Td>{shareholder.name}</Td>
      <Td>{shareholder.encryptedSsn}</Td>
      <Td>{shareholder.email}</Td>
      <Td>{shareholder.address}</Td>
      <Td>{shareholder.shareQty}</Td>
      <Td>
        <button onClick={onEditClick}>Edit</button>
      </Td>
    </Tr>
  )
}

export default TableRowShareholders
