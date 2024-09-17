import React from 'react'
import TableRowShareholders from './TableRowShareholders'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function ShareholderList({ shareholders, loading }) {
  if (loading) {
    console.log('Loading')
    return <div>Loading...</div>
  } else {
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
            {shareholders.length > 0 ? (
              shareholders.map((shareholder, index) => (
                <TableRowShareholders
                  key={index}
                  name={shareholder.name}
                  encryptedSsn={shareholder.encryptedSsn}
                  email={shareholder.email}
                  address={shareholder.address}
                />
              ))
            ) : (
              <Tr>
                <Td colSpan="5">No Shareholders Data Available</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </div>
    )
  }
}

export default ShareholderList
