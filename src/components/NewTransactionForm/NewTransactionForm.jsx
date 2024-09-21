import React, { useState } from 'react'
import styles from './NewTransactionForm.module.css'
import api from '../../services/api'

const NewTransactionForm = () => {
  const [formData, setFormData] = useState({
    buyer: '',
    seller: '',
    date: '',
    price: '',
    shares: '',
    taxReported: true,
    shareFrom: '',
    shareTo: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleTaxChange = (e) => {
    const value = e.target.value === 'yes' ? true : false
    setFormData({
      ...formData,
      taxReported: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      ...formData,
      taxReported: formData.taxReported,
      dateOfPurchase: formData.date,
      shareQty: formData.shares,
      shareNumberFrom: formData.shareFrom,
      shareNumberTo: formData.shareTo,
    }

    api
      .post('/transactionHistory/add', formData)
      .then((response) => {
        console.log('Transaction added: ', response.data)
        setFormData({
          buyer: '',
          seller: '',
          date: '',
          price: '',
          shares: '',
          taxReported: true,
          shareFrom: '',
          shareTo: '',
        })
      })
      .catch((e) => {
        console.error('Error adding transaction', e)
      })
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.header}>Transaction Information</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Buyer:</label>
          <input
            type="text"
            name="buyer"
            className={styles.inputField}
            value={formData.buyer}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Seller:</label>
          <input
            type="text"
            name="seller"
            className={styles.inputField}
            value={formData.seller}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Date of Purchase:</label>
          <input
            type="date"
            name="date"
            className={styles.inputField}
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            className={styles.inputField}
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Number of Shares:</label>
          <input
            type="number"
            name="shares"
            className={styles.inputField}
            value={formData.shares}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Withholding Tax Reported?</label>
          <select
            name="withholdingTax"
            className={styles.inputField}
            value={formData.taxReported ? 'yes' : 'no'}
            onChange={handleTaxChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Share Numbers (From - To):</label>
          <div className={styles.shareRange}>
            <input
              type="text"
              name="shareFrom"
              placeholder="From"
              className={styles.inputField}
              value={formData.shareFrom}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="shareTo"
              placeholder="To"
              className={styles.inputField}
              value={formData.shareTo}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Add new transaction
        </button>
      </form>
    </div>
  )
}

export default NewTransactionForm
