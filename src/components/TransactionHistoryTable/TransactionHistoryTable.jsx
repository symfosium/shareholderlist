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
            <Th>Purchase Date</Th>
            <Th>Seller</Th>
            <Th>Buyer</Th>
            <Th>Shares Qty</Th>
            <Th>Price</Th>
            <Th>Tax Reported?</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Note</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRowTransaction
            name="israt"
            dateOfPurchase="2.3.2024"
            seller="madhu"
            buyer="saima"
            shareQty="143"
            price="100000"
            taxReported="yes"
            shareNumberFrom="v"
            shareNumberTo="a"
            note="note1"
          />
          <TableRowTransaction
            name="Anton"
            dateOfPurchase="13.8.2022"
            seller="saku"
            buyer="saima"
            shareQty="143"
            price="100000"
            taxReported="yes"
            shareNumberFrom="v"
            shareNumberTo="a"
            note="note1"
          />
        </Tbody>
      </Table>
    </div>
  )
}

export default TransactionHistoryTable;