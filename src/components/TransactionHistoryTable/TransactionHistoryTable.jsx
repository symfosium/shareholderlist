import React, { useEffect, useState } from 'react'
import TableRowTransaction from './TableRowTransaction'
import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import api from '../../services/api'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const TransactionHistoryTable = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
            <Th>Name</Th>
            <Th>Purchase Date</Th>
            <Th>Seller</Th>
            <Th>Buyer</Th>
            <Th>Shares Qty</Th>
            <Th>Price</Th>
            <Th>Tax Reported?</Th>
            <Th>From</Th>
            <Th>To</Th>
            <Th>Note</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <TableRowTransaction
                key={transaction.id}
                name={transaction.name}
                dateOfPurchase={transaction.dateOfPurchase}
                seller={transaction.seller}
                buyer={transaction.buyer}
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
              <Td colspan="10">No transaction available</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </div>
  )
}

export default TransactionHistoryTable
