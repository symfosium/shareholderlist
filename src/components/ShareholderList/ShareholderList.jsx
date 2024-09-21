import React, { useEffect, useState } from 'react'
import TableRowShareholders from './TableRowShareholders'
import EditShareholderModal from '../EditShareholderModal/EditShareholderModal'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function ShareholderList() {
  const [shareholders, setShareholders] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedShareholder, setSelectedShareholder] = useState(null)

  useEffect(() => {
    api
      .get('/shareholder/all')
      .then((response) => {
        setShareholders(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading shareholders data:', error)
        setLoading(false)
      })
  }, [])

  const handleEditClick = (shareholder) => {
    console.log('Edit button clicked for:', shareholder)
    setSelectedShareholder(shareholder)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleSaveShareholder = (updatedShareholder) => {
    console.log('Updated Shareholder', updatedShareholder)
  }

  if (loading) {
    console.log('Loading')
    return <div>Loading...</div>
  }

  if (!Array.isArray(shareholders)) {
    return <div>Error: Invalid data format</div>
  }

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
                key={shareholder.id}
                shareholder={shareholder}
                onEditClick={() => handleEditClick(shareholder)}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan="5">No Shareholders Data Available</Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      {isModalOpen && selectedShareholder && (
        <>
          {console.log('Modal is being rendered')}
          <EditShareholderModal
            shareholder={selectedShareholder}
            onClose={handleModalClose}
            onSave={handleSaveShareholder}
          />
        </>
      )}
    </div>
  )
}

export default ShareholderList
