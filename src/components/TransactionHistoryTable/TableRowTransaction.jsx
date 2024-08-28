import React from 'react';

const TableRowTransaction = ({name, seller, buyer, numbersOfShares, price, from, to}) => {
    console.log ({name, seller, buyer, numbersOfShares, price, from, to})
    return (
        <tr>
            <td>{name}</td>
            <td>{seller}</td>
            <td>{buyer}</td>
            <td>{numbersOfShares}</td>
            <td>{price}</td>
            <td>{from}</td>
            <td>{to}</td>
        </tr>
    );
};

export default TableRowTransaction;