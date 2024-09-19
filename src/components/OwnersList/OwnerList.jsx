import React, { useEffect, useState } from 'react'
import TableRowOwners from './TableRowOwners'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function OwnerList() {
  const [owners, setOwners] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get('/owner/all')
      .then((response) => {
        setOwners(response.data)
        setLoading(false)
      })
      .catch((e) => {
        console.error('Error fetching owners', error)
        setLoading(false)
      })
  })

  if (loading) {
    return <div>Loading...</div>
  }
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
          {owners.length > 0 ? (
            owners.map((owner) => (
              <TableRowOwners
                key={owner.id}
                name={owner.name}
                numberOfShares={owner.numberOfShares}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan="2">No Owners</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default OwnerList
