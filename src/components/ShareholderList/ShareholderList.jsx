import React from 'react'
import TableRowShareholders from './TableRowShareholders'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function ShareholderList() {
  return (
    <div>
      <h2>Shareholder List</h2>
      <Table className="shareholders-table">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>SSN</Th>
            <Th>Email</Th>
            <Th>Address</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRowShareholders
            name="John Doe"
            ssn="123-45-6789"
            email="john@example.com"
            address="123 Main St"
          />
          <TableRowShareholders
            name="Jane Smith"
            ssn="987-65-4321"
            email="jane@example.com"
            address="456 Oak Ave"
          />
        </Tbody>
      </Table>
    </div>
  )
}

export default ShareholderList
