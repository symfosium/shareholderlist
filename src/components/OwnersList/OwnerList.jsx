import React from 'react'
import TableRowOwners from './TableRowOwners'

function OwnerList() {
  return (
    <div>
      <h2>Owners List</h2>
      <table className="shareholders-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Shares</th>
          </tr>
        </thead>
        <tbody>
          <TableRowOwners name="John Doe" numbersOfShares="12" />
          <TableRowOwners name="Jane Smith" numbersOfShares="198" />
        </tbody>
      </table>
    </div>
  )
}

export default OwnerList
