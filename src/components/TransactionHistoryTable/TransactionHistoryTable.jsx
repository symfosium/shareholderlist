import React from 'react';
import TableRowTransaction from './TableRowTransaction';

const TransactionHistoryTable = () => {
    return (
        <div>
            <h2>Transaction history</h2>
            <table className="shareholders-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Seller</th>
                    <th>Buyer</th>
                    <th>Number of shares</th>
                    <th>Price</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
                <TableRowTransaction
                    name = 'israt'
                    seller = 'madhu'
                    buyer = 'saima'
                    numbersOFShare = '143'
                    price = '100000'
                    from = 'v'
                    to = 'a' 
                    />
                 <TableRowTransaction
                    name = 'saku'
                    seller = 'anton'
                    buyer = 'anna'
                    numbersOFShare = '86'
                    price = '200000'
                    from = 'b'
                    to = 'c' 
                    />
            </tbody>
            </table>
        </div>
    );
};

export default TransactionHistoryTable;