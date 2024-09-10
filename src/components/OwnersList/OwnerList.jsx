import React from 'react'
import TableRowOwners from './TableRowOwners'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function OwnerList() {
  return (
    <div>
      <h2>Owners List</h2>
      <Table className="shareholders-table">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Shares Qty</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRowOwners name="John Doe" numberOfShares="12" />
          <TableRowOwners name="Jane Smith" numberOfShares="198" />
        </Tbody>
      </Table>
    </div>
  )
}

export default OwnerList
