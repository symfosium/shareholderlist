import React from 'react';
import TableRowTransaction from './TableRowTransaction';
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TransactionHistoryTable = () => {
  return (
    <div>
      <h2>Transaction history</h2>
      <Table className="shareholders-table">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Seller</Th>
            <Th>Buyer</Th>
            <Th>Shares Qty</Th>
            <Th>Price</Th>
            <Th>From</Th>
            <Th>To</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRowTransaction
            name="israt"
            seller="madhu"
            buyer="saima"
            numbersOfShares="143"
            price="100000"
            from="v"
            to="a"
          />
          <TableRowTransaction
            name="saku"
            seller="anton"
            buyer="anna"
            numbersOfShares="86"
            price="200000"
            from="b"
            to="c"
          />
        </Tbody>
      </Table>
    </div>
  )
}

export default TransactionHistoryTable;