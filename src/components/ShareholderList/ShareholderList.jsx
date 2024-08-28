import React from 'react'
import TableRowShareholders from './TableRowShareholders'

function ShareholderList() {
  return (
    <div>
      <h2>Shareholder List</h2>
      <table className="shareholders-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Social security number</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  )
}

export default ShareholderList
