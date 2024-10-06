import React, { useEffect, useState } from 'react'
import TableRowOwners from './TableRowOwners'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function OwnerList({ searchQuery = '' }) {
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
        console.error('Error fetching owners', e)
        setLoading(false)
      })
  }, [])

  const filteredOwners = owners.filter((owner) =>
    owner.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
            <Th>Share percentage</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredOwners.length > 0 ? (
            filteredOwners.map((owner) => (
              <TableRowOwners
                key={owner.id}
                name={owner.name}
                numberOfShares={owner.shareQty}
                sharePercentage={owner.sharePercentage}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan="3">No Owners</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default OwnerList
