import React, { useEffect, useState } from 'react'
import TableRowShareholders from './TableRowShareholders'
import EditShareholderModal from '../EditShareholderModal/EditShareholderModal'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

function ShareholderList({ searchQuery }) {
  const [shareholders, setShareholders] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setModalOpen] = useState(false)
  const [selectedShareholder, setSelectedShareholder] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10) // Set to 10 rows per page

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
    setShareholders((prevShareholders) =>
      prevShareholders.map((shareholder) =>
        shareholder.id === updatedShareholder.id
          ? updatedShareholder
          : shareholder
      )
    )
    console.log('Updated Shareholder:', updatedShareholder)
  }

  const filteredShareholders = shareholders.filter((shareholder) =>
    shareholder.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = filteredShareholders.slice(indexOfFirstRow, indexOfLastRow)

  const totalPages = Math.ceil(filteredShareholders.length / rowsPerPage)

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  if (loading) {
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
            <Th>Number of shares</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentRows.length > 0 ? (
            currentRows.map((shareholder) => (
              <TableRowShareholders
                key={shareholder.id}
                shareholder={shareholder}
                onEditClick={() => handleEditClick(shareholder)}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan="6">No Shareholders Data Available</Td>
            </Tr>
          )}
        </Tbody>
      </Table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-arrow"
        >
          &lt; {/* Left Arrow */}
        </button>

        {/* Show the range of rows currently being displayed */}
        <span className="pagination-info">
          {indexOfFirstRow + 1}-
          {Math.min(indexOfLastRow, filteredShareholders.length)} of{' '}
          {filteredShareholders.length}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-arrow"
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>

      {isModalOpen && selectedShareholder && (
        <>
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
