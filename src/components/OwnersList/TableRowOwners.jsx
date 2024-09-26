import React from 'react'
import { Tr, Td } from 'react-super-responsive-table'

function TableRowOwners({ name, numberOfShares, sharePercentage }) {
  return (
    <Tr>
      <Td data-label="Name">{name}</Td>
      <Td data-label="Number of Shares">{numberOfShares}</Td>
      <Td data-lebel="Share Percentage">{sharePercentage}</Td>
    </Tr>
  )
}

export default TableRowOwners
