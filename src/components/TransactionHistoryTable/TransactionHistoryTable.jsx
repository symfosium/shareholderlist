import React, { useEffect, useState } from 'react'
import TableRowTransaction from './TableRowTransaction'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TransactionHistoryTable = ({ searchQuery = '' }) => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage] = useState(10) // Set to 10 rows per page

  useEffect(() => {
    api
      .get('/transactionHistory/all')
      .then((response) => {
        setTransactions(response.data)
        setLoading(false)
      })
      .catch((e) => {
        console.error('Error loading transaction history: ', e)
        setError('Failed to load transaction history')
        setLoading(false)
      })
  }, [])

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      transaction.seller?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.buyer?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  // Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = filteredTransactions.slice(indexOfFirstRow, indexOfLastRow)

  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage)

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

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h2>Transaction history</h2>
      <Table className="shareholders-table">
        <Thead>
          <Tr>
            <Th>Seller</Th>
            <Th>Buyer</Th>
            <Th>Purchase Date</Th>
            <Th>Shares Qty</Th>
            <Th>Price</Th>
            <Th>Tax Reported?</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Note</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentRows.length > 0 ? (
            currentRows.map((transaction) => (
              <TableRowTransaction
                key={transaction.id}
                seller={transaction.seller}
                buyer={transaction.buyer}
                dateOfPurchase={transaction.dateOfPurchase}
                shareQty={transaction.shareQty}
                price={transaction.price}
                taxReported={transaction.taxReported ? 'yes' : 'no'}
                shareNumberFrom={transaction.shareNumberFrom}
                shareNumberTo={transaction.shareNumberTo}
                note={transaction.note}
              />
            ))
          ) : (
            <Tr>
              <Td colSpan="10">No transaction available</Td>
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
          {indexOfFirstRow + 1}-{Math.min(indexOfLastRow, filteredTransactions.length)} of {filteredTransactions.length}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-arrow"
        >
          &gt; {/* Right Arrow */}
        </button>
      </div>
    </div>
  );
};

export default TransactionHistoryTable