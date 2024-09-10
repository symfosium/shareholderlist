import React from 'react';
import { Tr, Td } from 'react-super-responsive-table'

const TableRowTransaction = ({name, seller, buyer, numbersOfShares, price, from, to}) => {
    console.log ({name, seller, buyer, numbersOfShares, price, from, to})
    return (
      <Tr>
        <Td data-label="Name">{name}</Td>
        <Td data-label="Seller">{seller}</Td>
        <Td data-label="Buyer">{buyer}</Td>
        <Td data-label="Number of shares">{numbersOfShares}</Td>
        <Td data-label="Price">{price}</Td>
        <Td data-label="From">{from}</Td>
        <Td data-label="To">{to}</Td>
      </Tr>
    )
};

export default TableRowTransaction;