import React from 'react'
import { Tr, Td } from 'react-super-responsive-table'

const TableRowTransaction = ({
  seller,
  buyer,
  dateOfPurchase,
  shareQty,
  price,
  taxReported,
  shareNumberFrom,
  shareNumberTo,
  note,
}) => {
  return (
    <Tr>
      <Td data-label="Seller">{seller}</Td>
      <Td data-label="Buyer">{buyer}</Td>
      <Td data-label="Date of purchase">{dateOfPurchase}</Td>
      <Td data-label="Number of shares">{shareQty}</Td>
      <Td data-label="Price">{price}</Td>
      <Td data-label="Tax">{taxReported}</Td>
      <Td data-label="From">{shareNumberFrom}</Td>
      <Td data-label="To">{shareNumberTo}</Td>
      <Td data-label="Note">{note}</Td>
    </Tr>
  )
}

export default TableRowTransaction
